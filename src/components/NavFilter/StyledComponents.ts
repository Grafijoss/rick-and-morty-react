import styled from "styled-components";
import { StyledProps } from "../../types";

interface Props extends StyledProps {
  active: string;
}

const NavFilterContainer = styled.nav`
  background: #f2f2f2;
  border-bottom: solid 3px #cccccc;
  height: 80px;
  margin: 0 auto;
  max-width: ${({ theme }: Props) => `${theme.widthContainer}px`};
  width: 100%;
`;

const NavFilterList = styled.ul`
  display: flex;
  justify-content: center;
`;

const NavFilterBUtton = styled.li`
  cursor: pointer;
  text-align: center;
  line-height: 80px;
  position: relative;
  width: 12.28%;

  ${({ active }: Props) =>
    active &&
    `
      &:before {
        background: var(--background-active);
        bottom: 0;
        content: "";
        height: 3px;
        left: 0;
        position: absolute;
        width: 100%;
      }
  `}
`;

export { NavFilterContainer, NavFilterList, NavFilterBUtton };
