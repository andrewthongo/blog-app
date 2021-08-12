export const openModalAction = (value) => {
  return {
    type: "SET_MODAL",
    value,
  };
};

export const createPostAction = (data) => {
  return {
    type: "CREATE_POST_API",
    data,
  };
};

export const deletePostAction = (data) => {
  return {
    type: "DELETE_POST_API",
    data,
  };
};

export const updatePostAction = (data) => {
  return {
    type: "UPDATE_POST_API",
    data,
  };
};
