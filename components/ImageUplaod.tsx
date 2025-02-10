"use client";

import config from "@/lib/config";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import { useRef, useState } from "react";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const respone = await fetch(`${config.env.apiEndpint}/api/auth/imagekit`);

    if (!respone.ok) {
      const errortext = await respone.text();

      throw new Error(
        `Request failed with status ${respone.status} : ${errortext}`
      );
    }

    const data = await respone.json();
    const { token, expire, signature } = data;
    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Authecatication is failed : $error.message`);
  }
};
const ImageUplaod = () => {
  const IKuplaodRef = useRef(null);
  const [file, setfile] = useState<{ filePath: string | null }>({
    filePath: null,
  });

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload className="hidden" ref={IKuplaodRef} />
    </ImageKitProvider>
  );
};

export default ImageUplaod;
