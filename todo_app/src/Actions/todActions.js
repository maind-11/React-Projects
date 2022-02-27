export const addTodo = (value) => {
  return {
    type: "add_todo",
    payload: {
      todo: value,
    },
  };
};

export const removeTodo = (index) => {
  return {
    type: "remove_todo",
    payload: {
      index: index,
    },
  };
};

export const editTodo = (index, value) => {
  return {
    type: "edit_todo",
    payload: {
      index: index,
      todo: value,
    },
  };
};
