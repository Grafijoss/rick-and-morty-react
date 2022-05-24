import { LayoutContainer } from "./StyledComponent";
import Footer from "../Footer/Footer";

interface Props {
  children: JSX.Element | String;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <LayoutContainer>{children}</LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;
