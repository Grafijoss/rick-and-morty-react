import * as types from "./types";

const setAllCharacters = (payload: DataResponse) => ({
  type: types.GET_ALL_CHARACTERS,
  payload
});

export { setAllCharacters };
