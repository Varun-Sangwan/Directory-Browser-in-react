import React from "react";

function File({ name }) {
  return (
    <>
      <img src={`./images/file.png`} alt="file" />
      {name}
    </>
  );
}

export default File;
