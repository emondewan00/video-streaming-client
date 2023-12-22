"use client";
import React from "react";

const page = () => {
  let timeOut;
  const searchHandler = (e) => {
    if (timeOut) {
      console.log("inside if else");
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      console.log("hello");
    }, 200);
  };
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <input type="text" onChange={searchHandler} placeholder="search text" />
    </div>
  );
};

export default page;
