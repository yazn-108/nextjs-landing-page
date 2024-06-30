import Link from "next/link";
import React from "react";
const page = () => {
  return (
    <section className="h-dvh grid place-content-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-violet-600">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
            Something is missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-400">
            Sorry, we can not find that page. You wll find lots to explore on
            the home page.{" "}
          </p>
          <Link
            href="/"
            className="transition-all inline-flex text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-violet-600 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
export default page;
