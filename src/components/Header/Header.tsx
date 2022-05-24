import { HeaderContainer, LogoContainer } from "./StyledComponents";
import FormFilter from "../FormFilter/FormFilter";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="images/logo.png" alt="logo rick and morty" />
      </LogoContainer>
      <FormFilter />
    </HeaderContainer>
  );
};

export default Header;
