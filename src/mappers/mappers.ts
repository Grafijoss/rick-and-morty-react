import { getCurrentPage } from "./utils";
import { ResponseData } from '../type'

const mapCharactersResponse = ({
  info,
  results,
  baseCharactersUrl,
  paginatorOption
}: ResponseData) => {
  return {
    characters: results,
    paginationInfo: {
      ...info,
      current: getCurrentPage({ paginatorOption, info }),
      currentPage: baseCharactersUrl
    }
  };
};

export { mapCharactersResponse };
