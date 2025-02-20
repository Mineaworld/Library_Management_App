"use client";

import config from "@/lib/config";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;
// Authenticator function to get authentication tokens from the server
const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errortext = await response.text();
      throw new Error(
        `Request failed with status ${response.status} : ${errortext}`
      );
    }

    const data = await response.json();
    const { token, expire, signature } = data;
    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Authecatication is failed : ${error.message}`);
  }
};
const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void;
}) => {
  const IKuploadRef = useRef(null);
  const [file, setfile] = useState<{ filePath: string | null }>({
    filePath: null,
  });

  const onError = (error: any) => {
    console.log("Upload error", error);

    toast({
      title: "Uploaded failed !",
      description: `Your image failed to upload. Please try again`,
      variant: "destructive",
    });
  };
  const onSuccess = (res: any) => {
    setfile(res);
    onFileChange(res.filePath);

    toast({
      title: "Uploaded successfully !",
      description: `${res.filePath} uploaded successfully`,
    });
  };
  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className="hidden"
        ref={IKuploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test.png"
      />
      <Button
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();
          if (IKuploadRef.current) {
            // @ts-ignore
            IKuploadRef.current?.click();
          }
        }}
      >
        <img
          src="/icons/upload.svg"
          alt="upload-image"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-black text-base">Upload a File</p>
        {file && <p className="upload-filename">{file.filePath}</p>}
      </Button>
      {file.filePath && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={300}
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
