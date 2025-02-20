import React from "react";

const page = () => {
  return (
    <main className="root-container flex flex-col min-h-screen items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold capitalize text-light-100">
        Whao hey, Slow down!
      </h1>
      <p className="mt-3 text-light-400 text-center leading-relaxed px-4 max-w-xs sm:max-w-md md:max-w-lg">
        You are too fast. Please take a moment and relax, we're processing your
        request at the pace our system can handle. This safety measure ensures
        everyone gets a smooth experience. Try again in a few seconds!
      </p>
    </main>
  );
};

export default page;
