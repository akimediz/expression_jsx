import React from "react";
import ReactDOM from "react-dom";

const fname = "Abdulakeem";
const lname = "Morakinyo";
const lucky_num = 8;

ReactDOM.render(
  <div>
    <h2>Hello {fname + " " + lname}</h2>
    <p>your lucky num is {4 + 7}</p>
  </div>,
  document.getElementById("root")
);
