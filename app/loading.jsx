import React from "react";
export const metadata = {
  title: "yazn_108 | loading...",
};
const Loading = () => {
  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <div className="absolute w-16 h-16 border-4 border-dashed rounded-full animate-ping border-violet-400 dark:border-primary"></div>
      <p className="text-2xl">loading...</p>
    </div>
  );
};
export default Loading;
