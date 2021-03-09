import React from "react";

function Folder({ open, toggleFolder, name }) {
  return (
    <>
      <img src={`./images/${open}.png`} alt="folder" onClick={toggleFolder} />
      {name}
    </>
  );
}

export default Folder;
