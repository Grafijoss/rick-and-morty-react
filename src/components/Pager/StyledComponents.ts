import styled from "styled-components";
import { P } from "../commons/html";

const PagerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PagerButton = styled.button`
  background: var(--background-gray);
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  line-height: 30px;
  margin-left: 10px;
  padding: 0 10px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const PagerText = styled(P)`
  font-size: 14px;
  margin: 0 10px;
`;

export { PagerContainer, PagerButton, PagerText };
