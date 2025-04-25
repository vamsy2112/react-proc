import React from "react";
import ReactDOM from "react-dom/client";

const AppContainer = () => {
  return (
    <div>
      <h1>App component from app.js</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);
