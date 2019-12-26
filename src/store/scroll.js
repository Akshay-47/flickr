const SET_SCROLL = "SET_SCROLL";
export function setScroll(scrollPosition) {
  return {
    type: SET_SCROLL,
    payload: scrollPosition
  };
  //   dispatch({ type: SET_SCROLL, payload: scrollPosition });
}

const scrollReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_SCROLL:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default scrollReducer;
