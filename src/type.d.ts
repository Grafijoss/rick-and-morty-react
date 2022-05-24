interface Char {
  image: string;
  name: string;
  location: {
    name: string;
    url: string;
  };
  status: string;
  species: string;
  id: number;
}

type CharactersState = Array<Char>;

interface InitialState {
  characters: CharactersState;
  charactersFilter: CharactersState;
  paginationInfo: object;
  matchName: string;
  filter: {
    type: string;
    value: string;
  };
  modal: {
    open: boolean;
    character: Char | object;
    interestingCharacters: Array<CharactersState>;
    episodes: Array<object>;
  };
}

interface DataResponse {
  characters: CharactersState;
  charactersFilter: CharactersState;
  paginationInfo: PaginationInfo;
}

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
  currentPage?: string;
};

export type PaginatorOption = "next" | "prev";

interface ResponseData {
  info: Info;
  results: CharactersState;
  baseCharactersUrl?: string;
  paginatorOption?: PaginatorOption;
}

interface PaginationInfo {
  current: number;
  next: string | null;
  prev: string | null;
  pages: number;
}

export type ActionReducer = {
  type: string;
  payload: DataResponse;
}
