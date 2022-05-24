import styled from "styled-components";

const CharacterListContainer = styled.div`
  margin-top: 22px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

export { CharacterListContainer };
