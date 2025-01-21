import React from "react";
import BookCard from "./BookCard";

interface Props {
  title: string;
  book: Book[];
  containerClassname?: string;
}

const BookList = ({ title, book, containerClassname }: Props) => {
  return (
    <section className={containerClassname}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
      <ul className="book-list">
        {book.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
