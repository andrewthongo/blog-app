const initialState = {
  modalIsOpen: false,
  posts: [],
};

export const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MODAL":
      if (action.value) {
        return { ...state, modalIsOpen: true };
      } else {
        return { ...state, modalIsOpen: false };
      }
    case "GET_POST":
      return { ...state, posts: action.data };
    default:
      return { ...state };
  }
};
