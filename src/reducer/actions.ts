import * as types from "./types";
import { DataResponse } from '../type';

const setAllCharacters = (payload: DataResponse) => ({
  type: types.GET_ALL_CHARACTERS,
  payload
});

export { setAllCharacters };
