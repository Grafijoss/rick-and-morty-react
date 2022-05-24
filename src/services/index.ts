import axios from "axios";
import { mapCharactersResponse } from "../mappers/mappers";

const baseCharactersUrl = "https://rickandmortyapi.com/api/character";

const fetchAllCharacters = (paginatorOption?: "next" | "prev") => {
  // const url = paginatorOption ?

  return axios(baseCharactersUrl).then(({ data }) => {
    const { info, results } = data;
    return mapCharactersResponse({
      info,
      results,
      baseCharactersUrl,
      paginatorOption
    });
  });
};

export { fetchAllCharacters };
