import { css } from "styled-components";

const opaqueCover = css`
  &:before {
    background: rgba(0, 0, 0, 0.5);
    content: "";
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
`;

const centerChildrenWintFlex = css`
  display: flex;
  align-items: center; // vertical
  justify-content: center; // horizontal
`;

export { opaqueCover, centerChildrenWintFlex };
