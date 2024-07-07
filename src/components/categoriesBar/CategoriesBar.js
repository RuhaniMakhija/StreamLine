import React, { useState } from "react";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art ",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");
  const handleCategorySelection = (ele) => {
    setActiveElement(ele);
  };
  return (
    <div className="categoriesbar">
      {keywords?.map((ele, index) => {
        return (
          <span
            key={index}
            onClick={() => handleCategorySelection(ele)}
            className={activeElement === ele ? "active" : ""}
          >
            {ele}
          </span>
        );
      })}
    </div>
  );
};

export default CategoriesBar;
