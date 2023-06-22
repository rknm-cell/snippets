import { SET_WORDS } from "./actions";

const initialState = {
  word: [],
};

function wordReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WORDS:
      return { ...state, word: action.paylod };
  }
}

export default wordReducer;
