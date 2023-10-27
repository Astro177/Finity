import { ThemeProvider } from "@material-tailwind/react";
import "../styles/globals.css";
import Layout from "../components/layout";
import AuthProvider from "../Provider/AuthProvider.jsx";

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
