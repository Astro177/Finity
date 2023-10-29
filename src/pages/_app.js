import { ThemeProvider } from "@material-tailwind/react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import AuthProvider from "../Provider/AuthProvider";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
