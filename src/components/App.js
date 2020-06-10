import React from "react";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import ListFilters from "./ListFilters";

const App = () => {
  return (
    <>
      <h1>To Do List</h1>
      <ListFilters />
      <NewTodo />
      <TodoList />
    </>
  );
};

export default App;
