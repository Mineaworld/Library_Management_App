import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constant";

const Home = () => {
  return (
    <>
      <BookOverview {...sampleBooks[4]} />
      <BookList
        containerClassname="mt-28"
        title="Latest books"
        book={sampleBooks}
      />
    </>
  );
};

export default Home;
