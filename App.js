import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./src/Navbar/Navbar"; // Named imports
import Search from "./src/Search/Search"; // Importing the Search component
import Card from "./src/Card/Card"; // Named imports
import Counter from "./src/Counter/Counter";

const App = () => {
  const resName = "behrouz biriyani";
  return (
    <div>
      <Navbar />
      <Search />
      <Counter />
      <Card
        resName={resName}
        cuisines="biriyani, desserts, raita"
        rating="5.0⭐️"
      />
      <Card resName="burger king" />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); // it targets the element with id="root" in the DOM

root.render(<App />); // this will render our react component between the element fetched
