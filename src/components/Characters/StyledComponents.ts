import styled from "styled-components";
import { P } from "../commons/html";

const CharacteresHeader = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FavoriteLabel = styled(P)`
  margin-right: 10px;
`;

const FavoriteFilter = styled.div`
  display: flex;
  align-items: center;
`;

export { CharacteresHeader, FavoriteFilter, FavoriteLabel };
