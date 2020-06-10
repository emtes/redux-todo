export const addTodo = (text) => ({ type: "ADD_TODO", text });
export const toggleTodo = (id) => ({ type: "TOGGLE_TODO", id });
export const removeTodo = (id) => ({ type: "RM_TODO", id });

export const Filters = {
  ALL_TODOS: "ALL_TODOS",
  COMPLETED_TODOS: "COMPLETED_TODOS",
  INCOMPLETE_TODOS: "INCOMPLETE_TODOS",
};
