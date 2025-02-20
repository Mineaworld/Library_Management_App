import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BookSvg from "./BookSvg";

type BookCoverVariant = "extrasmall" | "small" | "meduim" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extrasmall: "book-cover--extrasmall",
  small: "book-cover--small",
  meduim: "book-cover--meduim",
  regular: "book-cover--regular",
  wide: "book-cover--wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverImage: string;
}

const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600/png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <BookSvg coverColor={coverColor} />
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87%", height: "8%" }}
      >
        <Image
          src={coverImage}
          alt="cover"
          fill
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default BookCover;
