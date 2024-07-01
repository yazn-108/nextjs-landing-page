"use client";
import React from "react";
import { motion, useAnimate } from "framer-motion";
const Page = () => {
  const [scope, animate] = useAnimate();
  return (
    <section
      id="home"
      ref={scope}
      className="max-w-screen-xl mx-auto mt-24 container flex flex-col items-center px-4 pt-16 text-center"
    >
      <h1 className="text-3xl font-bold leading-none sm:text-5xl">
        Quisquam necessita vel
        <span className="text-primary">
          laborum <br /> doloribus
        </span>
        delectus
      </h1>
      <p className="px-8 mt-8 mb-12 text-lg text-gray-500">
        Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
        amet vero eaque explicabo!
      </p>
      <div className="flex flex-wrap justify-center">
        <motion.button
          initial={{ x: "-100%", opacity: 0, rotate: 180 }}
          animate={{ x: "0%", opacity: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 6, stiffness: 33, delay: 0 }}
          className="px-8 py-3 m-2 text-lg font-semibold rounded bg-primary text-gray-50"
          onClick={() => {
            animate([
              ["button", { scale: 1.1 }],
              ["button", { scale: 1 }],
            ]);
          }}
        >
          Get started
        </motion.button>
      </div>
    </section>
  );
};
export default Page;
