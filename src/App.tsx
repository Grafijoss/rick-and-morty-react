import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import "./styles.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import NavFilter from "./components/NavFilter/NavFilter";
import Characters from "./components/Characters/Characters";
import { fetchCharacters } from './Slices/characters'

const theme = {
  widthContainer: 1140
};

export default function App() {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

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
