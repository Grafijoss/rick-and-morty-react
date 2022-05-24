import * as types from "./types";

const initialState: InitialState = {
  characters: [],
  charactersFilter: [],
  paginationInfo: {},
  matchName: "",
  filter: {
    type: "",
    value: "all"
  },
  modal: {
    open: false,
    character: {},
    interestingCharacters: [],
    episodes: []
  }
};

export const reducer = (state: InitialState = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_CHARACTERS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
