import React from "react";
import { useDispatch } from "react-redux";

const ListFilters = () => {
  const dispatch = useDispatch();
  return (
    <ul>
      <li onClick={() => dispatch({ type: "SET_FILTER", filter: "ALL" })}>
        All Tasks
      </li>
      <li onClick={() => dispatch({ type: "SET_FILTER", filter: "DONE" })}>
        Completed
      </li>
      <li
        onClick={() => dispatch({ type: "SET_FILTER", filter: "INCOMPLETE" })}
      >
        Incomplete
      </li>
    </ul>
  );
};

export default ListFilters;
