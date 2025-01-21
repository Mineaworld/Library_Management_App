import Link from "next/link";
import React from "react";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";

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
    </Link>
  </li>
);

export default BookCard;
