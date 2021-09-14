import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { store } from "../store/store";
import { Provider } from "react-redux";

// Components
import Background from "../components/Background";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Background>
        <Component {...pageProps} />{" "}
      </Background>
    </Provider>
  );
};

const GlobalStyle = createGlobalStyle`
body {
  margin: 0px;
}

div {
  font-family: 'Roboto', sans-serif;
}
`;
export default MyApp;
