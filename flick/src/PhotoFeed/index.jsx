import { useState } from "react";
import Header from "../Global/Header/Header";
import NavBar from "./Navigation/NavBar";
import PhotoSection from "./PhotoSect/PhotoSection";
import data from "../Global/Data/temp.json";

import "./index.css";
import "./responsive.css";

function App({ userIndex }) {
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
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        userIndex={userIndex}
      />
      <NavBar />
      <PhotoSection filteredData={filteredData} />
    </>
  );
}

export default App;
