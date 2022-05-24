import { useSelector, shallowEqual } from "react-redux";
import CharacterCard from "../CharacterCard/CharacterCard";
import { CharacterListContainer } from "./StyledComponents";

const CharactersList = () => {
  const characters: CharactersState = useSelector(
    ({ charactersFilter }: InitialState) => charactersFilter,
    shallowEqual
  );

  return (
    <CharacterListContainer>
      {characters.map(
        ({ image, name, location, status, species, id }: Char) => (
          <CharacterCard
            status={status}
            name={name}
            image={image}
            location={location}
            species={species}
            key={id}
          />
        )
      )}
    </CharacterListContainer>
  );
};

export default CharactersList;
