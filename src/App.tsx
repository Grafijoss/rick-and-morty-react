import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { setAllCharacters } from "./reducer/actions";
import { fetchAllCharacters as fetchAllChars } from "./services";
import { Dispatch } from "redux";
import "./styles.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import NavFilter from "./components/NavFilter/NavFilter";
import Characters from "./components/Characters/Characters";

const theme = {
  widthContainer: 1140
};

export default function App() {
  const dispatch: Dispatch<any> = useDispatch();

  const fetchAllCharacters = async () => {
    const payload = await fetchAllChars();
    dispatch(setAllCharacters(payload));
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <NavFilter />
        <Layout>
          <Characters />
        </Layout>
      </ThemeProvider>
    </div>
  );
}
