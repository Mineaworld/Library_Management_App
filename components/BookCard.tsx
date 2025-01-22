import Link from "next/link";
import React from "react";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

const BookCard = ({
  id,
  title,
  color,
  coverUrl,
  genre,
  isLoaned = false,
}: Book) => (
  <li className={cn(isLoaned && "xs:w-52 w-full")}>
    <Link
      href={`/books/${id}`}
      className={cn(isLoaned && "xs:w-52 w-full flex flex-col items-center")}
    >
      <BookCover coverColor={color} coverImage={coverUrl} />
      <div className={cn("mt-4", !isLoaned && "xs:max-w-40 max-w-28")}>
        <p className="book-title">{title}</p>
        <p className="book-genre">{genre}</p>
      </div>
      {isLoaned && (
        <div className="mt-3 w-full">
          <div className="book-loaned">
            <Image
              src={"/icons/calendar.svg"}
              alt="calendar"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-light-100">7 days left</p>
          </div>
          <Button className="bg-dark-600 mt-3 min-h-14 w-full font-bebas-neue text-base text-primary hover:bg-dark-700 transition-colors duration-300 ">
            Get receipt
          </Button>
        </div>
      )}
    </Link>
  </li>
);

export default BookCard;
