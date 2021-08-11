const initialState = {
  modalIsOpen: false,
};

export const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MODAL":
      if (action.value) {
        return { ...state, modalIsOpen: true };
      } else {
        return { ...state, modalIsOpen: false };
      }
    default:
      return { ...state };
  }
};
