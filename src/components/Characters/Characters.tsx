import {
  CharacteresHeader,
  FavoriteFilter,
  FavoriteLabel
} from "./StyledComponents";
import FavoriteIcon from "../Favorite/Favorite";
import CharactersList from "../CharactersList/CharactersList";
import Pager from "../Pager/Pager";

const Characters = () => {
  return (
    <>
      <CharacteresHeader>
        <FavoriteFilter>
          <FavoriteLabel>Mostrar favoritos</FavoriteLabel>
          <FavoriteIcon />
        </FavoriteFilter>
        <Pager />
      </CharacteresHeader>
      <CharactersList />
    </>
  );
};

export default Characters;
