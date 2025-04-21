// DOM- DOCUMNET OBJECT MODEL
const heading = document.createElement("h1"); // creates a tag on the UI    <h1>Hello sourav</h1>
heading.innerText = "Hello sourav from js!!"; // this line will be pushed in between the h1 tag

document.body.appendChild(heading); // this line is supposed to render our h1 tag on UI, it will add the content
