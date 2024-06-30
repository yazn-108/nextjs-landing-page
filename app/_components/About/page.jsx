"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import office1 from "@/public/office-long-1.png";
import office2 from "@/public/office-long-2.png";
const Page = () => {
  return (
    <section id="about">
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute left-2/4 -translate-x-2/4 top-[67%] max-sm:top-[55%] text-2xl max-sm:text-xl capitalize text-center title-font mb-4 font-medium text-white sm:text-3xl"
        >
          About us
        </motion.h1>
        <svg
          className="w-dvw"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 70"
        >
          <defs>
            <clipPath id="clippath">
              <path
                fill="#7c3aed"
                d="M270.96 98.42v103.17c0 11.3-6.03 21.74-15.81 27.38l-89.34 51.58a31.612 31.612 0 01-31.62 0l-89.35-51.58a31.631 31.631 0 01-15.81-27.38V98.42c0-11.3 6.03-21.74 15.81-27.38l89.35-51.58a31.612 31.612 0 0131.62 0l89.34 51.58a31.631 31.631 0 0115.81 27.38z"
              ></path>
            </clipPath>
          </defs>
          <path
            fill="#7c3aed"
            d="M270.96 98.42v103.17c0 11.3-6.03 21.74-15.81 27.38l-89.34 51.58a31.612 31.612 0 01-31.62 0l-89.35-51.58a31.631 31.631 0 01-15.81-27.38V98.42c0-11.3 6.03-21.74 15.81-27.38l89.35-51.58a31.612 31.612 0 0131.62 0l89.34 51.58a31.631 31.631 0 0115.81 27.38z"
          ></path>
          <g clipPath="url(#clippath)">
            <path
              fill="#FFFFFF"
              d="M270.96 93.67v121.78c0 2.77-1.48 5.33-3.87 6.71l-105.47 60.89c-5.16 2.98-11.62-.75-11.62-6.71V154.62c0-2.77 1.48-5.32 3.87-6.71l105.47-60.96c5.16-2.98 11.62.74 11.62 6.71z"
              opacity="0.08"
            ></path>
            <path
              fill="#252634"
              d="M150 154.61v121.76c0 5.95-6.44 9.67-11.59 6.69L32.9 222.14a7.723 7.723 0 01-3.86-6.69V93.63c0-5.95 6.44-9.67 11.6-6.69l105.51 60.98a7.723 7.723 0 013.86 6.69z"
              opacity="0.15"
            ></path>
          </g>
        </svg>
      </div>
      <div className="mx-4 bg-gray-800 p-4 border-2 border-violet-600 rounded-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "linear", damping: 6, stiffness: 33, delay: 0 }}
          className="bg-center bg-our-products bg-cover h-[400px] w-full rounded-md"
        ></motion.div>
        <section className="text-gray-100">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 sm:mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">
                  <motion.h3
                    className="overflow-hidden text-3xl font-semibold"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ clipPath: "inset(0 0 0 0)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    Morbi tempor
                  </motion.h3>
                  <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                    Vestibulum diam nunc
                  </span>
                </div>
              </div>
              <div className="relative col-span-12 sm:px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                  <motion.div
                    initial={{ y: "40%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    transition={{
                      ease: "linear",
                      damping: 6,
                      stiffness: 33,
                      delay: 0,
                    }}
                    className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600"
                  >
                    <h3 className="w-fit text-xl font-semibold tracking-wide">
                      Donec porta enim vel
                      <motion.p
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{
                          ease: "easeInOut",
                          damping: 6,
                          stiffness: 33,
                          delay: 0.33,
                        }}
                        className="bg-violet-600 h-0.5"
                      ></motion.p>
                    </h3>
                    <p className="mt-3">
                      Pellentesque feugiat ante at nisl efficitur, in mollis
                      orci scelerisque. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ y: "40%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    transition={{
                      ease: "linear",
                      damping: 6,
                      stiffness: 33,
                      delay: 0,
                    }}
                    className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600"
                  >
                    <motion.h3 className="w-fit text-xl font-semibold tracking-wide">
                      Aliquam sit amet nunc ut
                      <motion.p
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{
                          ease: "easeInOut",
                          damping: 6,
                          stiffness: 33,
                          delay: 0.33,
                        }}
                        className="bg-violet-600 h-0.5"
                      ></motion.p>
                    </motion.h3>
                    <p className="mt-3">
                      Morbi vulputate aliquam libero non dictum. Aliquam sit
                      amet nunc ut diam aliquet tincidunt nec nec dui. Donec
                      mollis turpis eget egestas sodales.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ y: "40%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    transition={{
                      ease: "linear",
                      damping: 6,
                      stiffness: 33,
                      delay: 0,
                    }}
                    className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600"
                  >
                    <h3 className="w-fit text-xl font-semibold tracking-wide">
                      Pellentesque habitant morbi
                      <motion.p
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{
                          ease: "easeInOut",
                          damping: 6,
                          stiffness: 33,
                          delay: 0.33,
                        }}
                        className="bg-violet-600 h-0.5"
                      ></motion.p>
                    </h3>
                    <p className="mt-3">
                      Suspendisse tincidunt, arcu nec faucibus efficitur, justo
                      velit consectetur nisl, sit amet condimentum lacus orci
                      nec purus. Mauris quis quam suscipit, vehicula felis id,
                      vehicula enim.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light sm:text-lg text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            We did not reinvent the wheel
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              damping: 6,
              stiffness: 33,
              delay: 0,
            }}
          >
            <Image
              className="w-full rounded-lg"
              src={office2}
              alt="office content 1"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              damping: 6,
              stiffness: 33,
              delay: 0.5,
            }}
          >
            <Image
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={office1}
              alt="office content 2"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Page;
