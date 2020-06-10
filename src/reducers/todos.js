// import { List } from "immutable";

const todos = (state = [], action) => {
  // new list if default because initialization calls reducer with undefined
  switch (action.type) {
    default:
      return state;
    case "ADD_TODO":
      // list from this library returns a new array on push
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          completed: false,
        },
      ];
    case "RM_TODO":
      return [...state].splice(action.id, 1);
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
  }
};

export default todos;
