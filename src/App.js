import React from "react";
import Explorer from "./components/Explorer/index.js";
import { data } from "./data";

function App() {
  return (
    <>
      {data.map((item, index) => {
        return <Explorer key={index} folderItems={item} />;
      })}
    </>
  );
}

export default App;
