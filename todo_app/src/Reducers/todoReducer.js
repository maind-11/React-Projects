let initalState = [
  { desc: "Learn React", date: "2022-02-20" },
  { desc: "Learn Angular", date: "2022-02-20" },
  { desc: "Learn Vue", date: "2022-02-20" },
  { desc: "Learn Next.js", date: "2022-02-20" },
];

const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case "add_todo":
      return [...state, action.payload.todo];
    case "remove_todo":
      state.splice(action.payload.index, 1);
      return [...state];
    case "edit_todo":
      console.log("Inside reducer");
      console.log(state);
      state.splice(action.payload.index, 1, action.payload.todo);
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default todoReducer;
