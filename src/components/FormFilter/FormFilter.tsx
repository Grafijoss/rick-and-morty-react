import { SearchForm, SearchButton, SearchInput } from "./StyledComponents";
import Search from "../icons/Search";

const FormFilter = () => {
  return (
    <SearchForm>
      <SearchButton>
        <Search fill="#CCCCCC" />
      </SearchButton>
      <SearchInput type="text" placeholder="Buscar personaje" />
    </SearchForm>
  );
};

export default FormFilter;
