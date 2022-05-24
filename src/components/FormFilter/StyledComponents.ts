import styled from "styled-components";
import { centerChildrenWintFlex } from "../commons/css";

const SearchForm = styled.form`
  align-items: center;
  background: #081f32;
  border: 2px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  height: 60px;
  max-width: 500px;
  padding: 0 10px;
  position: relative;
  z-index: 5;
  width: 100%;
`;

const SearchButton = styled.button`
  height: 40px;
  width: 40px;
  ${centerChildrenWintFlex}
`;

const SearchInput = styled.input`
  background: none;
  color: #cccccc;
  line-height: 40px;
  padding-left: 10px;
  width: calc(100% - 40px);
  &:focus {
    border: none;
    outline: none;
  }
`;

export { SearchForm, SearchButton, SearchInput };
