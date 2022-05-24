import { useSelector } from "react-redux";
import { PagerContainer, PagerButton, PagerText } from "./StyledComponents";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { fetchAllCharacters as fetchPagerChars } from "../../services";
import { setAllCharacters } from "../../reducer/actions";

const Pager = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const paginationInfo = useSelector(
    ({ paginationInfo }: DataResponse) => paginationInfo
  );

  const { current, next, prev, pages }: PaginationInfo = paginationInfo;

  console.log({
    paginationInfo
  });

  const fetchCharacters = async (paginatorOption: "next" | "prev") => {
    const payload = await fetchPagerChars(paginatorOption);
    dispatch(setAllCharacters(payload));
  };

  const nextPage = fetchCharacters("next");

  const prevPage = fetchCharacters("prev");

  return (
    <PagerContainer>
      <PagerButton disabled={!prev}>Anterior</PagerButton>
      <PagerText>
        Pagina {current} de {pages}
      </PagerText>
      <PagerButton disabled={!next}>Siguiente</PagerButton>
    </PagerContainer>
  );
};

export default Pager;
