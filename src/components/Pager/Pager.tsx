import { useSelector } from "react-redux";
import { PagerContainer, PagerButton, PagerText } from "./StyledComponents";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { DataResponse, PaginationInfo } from '../../type'
import { charactersSelector } from '../../Slices/characters'

const Pager = () => {
  const dispatch: Dispatch<any> = useDispatch();
  // const paginationInfo = useSelector(
  //   ({ paginationInfo }: DataResponse) => paginationInfo
  // );

  const { paginationInfo }: any = useSelector(charactersSelector)

  const { current, next, prev, pages }: PaginationInfo = paginationInfo;

  // useEffect(() => {
  //   console.log({
  //     paginationInfo
  //   });
  // }, [])


  const fetchCharacters = async (paginatorOption: "next" | "prev") => {
    // dispatch(fetchCharacters(paginatorOption))
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
