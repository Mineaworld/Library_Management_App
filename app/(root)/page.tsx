import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constant";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {
  const results = await db.select().from(users);

  // Convert the results object to a JSON string with indentation for better readability in the console
  console.log(JSON.stringify(results, null, 2));
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
