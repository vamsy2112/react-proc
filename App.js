import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./src/Navbar/Navbar";
import Search from "./src/Search/Search"; // Importing the Search component

const App = () => {
  return (
    <div>
      <Navbar />
      <Search />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); // it targets the element with id="root" in the DOM

root.render(<App />); // this will render our react component between the element fetched
