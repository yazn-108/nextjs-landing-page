"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";
const Feature = ({ targetNum, sign, sectionName, svg }) => {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div className="flex overflow-hidden rounded-lg bg-gray-800 text-gray-100">
      <div className="flex items-center justify-center px-4 bg-primary text-gray-800">
        {svg}
      </div>
      <div className="flex items-center justify-between flex-1 p-3">
        <p className="text-2xl font-semibold">
          <span ref={ref}>
            {inView ? <CountUp end={targetNum} duration={1}></CountUp> : 0}
          </span>
          {sign}
        </p>
        <p className="capitalize">{sectionName}</p>
      </div>
    </div>
  );
};
export default Feature;
