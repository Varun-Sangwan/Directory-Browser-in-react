import React, { useState } from "react";
import Folder from "../Folder";
import File from "../File";
import "./index.css";

export default function Explorer({ folderItems }) {
  let nestedFolder = [];
  const [items, setItems] = useState(folderItems);
  const [inputValue, setInputValue] = useState("");

  function toggleFolder() {
    items.isOpen = !items.isOpen;
    setItems({ ...items });
  }

  function addNewFolder() {
    items.children.push({
      type: "folder",
      name: "",
      isOpen: false,
      children: [],
    });
    items.isOpen = true;
    setItems({ ...items });
  }

  function addNewFile() {
    items.children.push({
      type: "file",
      name: "",
      children: [],
    });
    items.isOpen = true;
    setItems({ ...items });
  }

  function emptyFolder() {
    items.children = [];
    setItems({ ...items });
  }

  function renderItemName() {
    return items.name ? (
      items.name
    ) : (
      <input
        type="text"
        placeholder={`Enter the ${items.type} name`}
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        onBlur={(event) => {
          if (items.type === "folder") {
            items.isOpen = true;
          }
          items.name = event.target.value;
          setItems({ ...items });
        }}
      />
    );
  }

  if (items.children.length > 0) {
    nestedFolder = items.children.map((item, index) => (
      <Explorer key={index} folderItems={item} />
    ));
  }

  return (
    <div className="explorer">
      <div className="options">
        {items.type === "folder" ? (
          <>
            <div className="content">
              <Folder
                items={items}
                name={renderItemName()}
                open={items.isOpen && items.children.length ? "open" : "close"}
                toggleFolder={toggleFolder}
              />
            </div>
            <img
              className="addFolder"
              src={"./images/addFolder.png"}
              alt="add-folder"
              onClick={addNewFolder}
            />
            <img
              className="addFile"
              src={"./images/addFile.png"}
              alt="add-file"
              onClick={addNewFile}
            />
            <img
              className="emptyFolder"
              src={"./images/emptyFolder.png"}
              alt="empty-folder"
              onClick={emptyFolder}
            />
          </>
        ) : (
          <div className="content">
            <File name={renderItemName()} />
          </div>
        )}
      </div>
      {items.isOpen ? nestedFolder : null}
    </div>
  );
}
