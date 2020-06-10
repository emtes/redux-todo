import React, { useState } from "react";
import { useDispatch } from "react-redux";

const NewTodo = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor="task">Task</label>
      <input
        id="task"
        type="text"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      ></input>
      <button onClick={() => dispatch({ type: "ADD_TODO", text: newTask })}>
        Add
      </button>
    </>
  );
};

export default NewTodo;
