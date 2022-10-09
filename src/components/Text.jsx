import React from "react";

const Text = ({ text, currentElement }) => {
  const textArray = text.split(" ");

  console.log("SPLIT", textArray);

  return React.createElement(`${currentElement}`, null, `${text}`);
};

export default Text;
