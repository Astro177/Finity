import { ThemeProvider } from "@material-tailwind/react";
import "../styles/globals.css";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
