import { getCurrentPage } from "./utils";

const mapCharactersResponse = ({
  info,
  results,
  baseCharactersUrl,
  paginatorOption
}: ResponseData) => {
  return {
    characters: results,
    charactersFilter: results,
    paginationInfo: {
      ...info,
      current: getCurrentPage({ paginatorOption, info }),
      currentPage: baseCharactersUrl
    }
  };
};

export { mapCharactersResponse };
