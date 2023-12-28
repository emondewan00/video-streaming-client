import videoCategories from "@/utils/categories";
import React from "react";

const Categories = ({ setCategory, setPage, setPageUrl }) => {
  return (
    <div className="my-4">
      <h1 className="text-xl mb-2">Filter By Category</h1>
      <ul className="list-disc list-inside">
        {videoCategories.sort().map((category, index) => (
          <li
            onClick={() => {
              setCategory(`&category=${category}`);
              setPageUrl(`limit=15&page=1`);
              setPage(1);
            }}
            className="cursor-pointer"
            key={index}
          >
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
