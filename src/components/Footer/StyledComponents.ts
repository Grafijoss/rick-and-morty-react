import styled from "styled-components";
import { opaqueCover } from "../commons/css";
import { StyledProps } from "../../types";

const FooterContainer = styled.footer`
  ${opaqueCover}
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("images/bg-footer.png");
  height: 142px;
  margin: 0 auto;
  max-width: ${({ theme }: StyledProps) => `${theme.widthContainer}px`};
  position: relative;
  width: 100%;
`;

export { FooterContainer };
