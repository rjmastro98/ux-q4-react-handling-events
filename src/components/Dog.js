// Dog.js
import React from "react";

function Dog(props) {
  return (
    <div>
      <div>{props.dog.name}</div>
      <button>Pet Me!</button>
    </div>
  );
}

export default Dog;
