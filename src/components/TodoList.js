import React from "react";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  return (
    <ul>
      {todos
        .filter((todo) => {
          if (filter === "ALL") return true;
          if (filter === "DONE") return todo.completed;
          if (filter === "INCOMPLETE") return !todo.completed;
          return true;
        })
        .map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
          />
        ))}
    </ul>
  );
};

export default TodoList;
