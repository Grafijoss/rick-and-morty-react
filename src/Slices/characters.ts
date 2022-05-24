import axios from "axios";
import { createSlice } from '@reduxjs/toolkit'
import { InitialState } from '../type'
import { mapCharactersResponse } from "../mappers/mappers";
const baseCharactersUrl = "https://rickandmortyapi.com/api/character";

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
  },
  loading: false,
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        fetchingCharacters: state => {
            state.loading = true;
        },
        getCharactersSuccess: (state, { payload }) => {
            state.characters = payload.characters;
            state.charactersFilter = payload.characters;
            state.paginationInfo = payload.paginationInfo;
            state.loading = false;
        },
    }
})


export const { fetchingCharacters, getCharactersSuccess } = charactersSlice.actions
export default charactersSlice.reducer;
export const charactersSelector = (state: InitialState) => state.characters

export function fetchCharacters(paginatorOption?: "next" | "prev") {
    return async (dispatch: any) => {
      dispatch(fetchingCharacters())
  
      try {

        const payload = await axios(baseCharactersUrl).then(({ data }) => {
            const { info, results } = data;
            return mapCharactersResponse({
              info,
              results,
              baseCharactersUrl,
              paginatorOption
            });
          });

          console.log({
            payload
          })
  
        dispatch(getCharactersSuccess(payload))
      } catch (error) {
        dispatch(getCharactersSuccess({}))
      }
    }
  }