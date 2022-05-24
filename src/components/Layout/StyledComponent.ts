import styled from "styled-components";
import { StyledProps } from "../../types";

const LayoutContainer = styled.main`
  margin: 0 auto;
  max-width: ${({ theme }: StyledProps) => `${theme.widthContainer}px`};
  padding: 46px 0 59px;
  width: 100%;
`;

export { LayoutContainer };
