import "./Card.scss";
import { useState, useEffect } from "react";

const Card = (props) => {
  const [json, setJson] = useState([]);
  const { resName, cuisines, rating } = props; // destructuring
  const name = "vamsy"; // global scope - can be anywhere in th file

  useEffect(() => {
    console.log("useEffect called");
    // this is the right place to make API calls

    const fetchData = async () => {
      // fetch is a function, fetch(endpoint), always returns a promise.
      // promise -:
      // 1. pending - loading
      /// 2. resolve - data
      // 3. reject - error screen, js is a single threaded synchronysly typed programming lang
      // asynchronous operations
      // event loop - async operations perform hota h
      // await can only be used with async
      // global and block scope

      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log(data);
      const result = await data.json();
      console.log(result);
      // result = json; // do not update the state directly.
      setJson(result);
    };
    const data = "sourav";
    console.log(data); // block scope

    console.log(fetchData());
    // fetch always returns you a promise - js concept
  }, []); // dependency array.
  // empty array - useffect will be called once
  // [count] - useffect will run whenever our count changes
  // no dependency array - re-rendered whenever the component is re-rendered
  return (
    <div className="res-card">
      <img src="https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg" />
      {json.map((item) => {
        return item.name;
      })}
      <h5>{cuisines}</h5>
      <p>{rating}</p>
      {console.log("loading..........")}
      {console.log(name)}
    </div>
  );
};

export default Card;
