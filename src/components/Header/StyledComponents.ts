import styled from "styled-components";
import { StyledProps } from "../../types";
import { opaqueCover, centerChildrenWintFlex } from "../commons/css";

const HeaderContainer = styled.header`
  ${opaqueCover}
  ${centerChildrenWintFlex}
  background-image: url("images/bg-hero.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  height: 455px;
  margin: 0 auto;
  max-width: ${({ theme }: StyledProps) => `${theme.widthContainer}px`};
  position: relative;
  width: 100%;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 347px;
  z-index: 5;

  img {
    width: 100%;
  }
`;

export { HeaderContainer, LogoContainer };
