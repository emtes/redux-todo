import React from "react";

const Todo = ({ onClick, completed, text }) => (
  <li>
    <article onClick={onClick}>
      <h3>{text.trim()}</h3>
      <ul>
        <li>
          <button>{completed ? "Mark Incomplete" : "Done"}</button>
        </li>
      </ul>
    </article>
  </li>
);

export default Todo;
