import { ThemeProvider } from "@material-tailwind/react";
import "../styles/globals.css";
import Layout from "../components/layout";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
