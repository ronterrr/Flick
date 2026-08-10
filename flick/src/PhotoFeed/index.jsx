import { useState } from "react";
import Header from "./Header/Header";
import PhotoSection from "./PhotoSect/PhotoSection";
import data from "./Data/temp.json";

import "./index.css";
import "./responsive.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData =
    searchTerm === ""
      ? ""
      : data.filter((item) => {
          const term = searchTerm.toLowerCase();
          return (
            item.caption?.toLowerCase().includes(term) ||
            item.username?.toLowerCase().includes(term)
          );
        });

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PhotoSection filteredData={filteredData} />
    </>
  );
}

export default App;
