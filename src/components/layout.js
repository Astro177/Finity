import NavBar from "../shared/NavBar.tsx";
import Footer from "../shared/Footer.tsx";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div className="">
      <div>
        <NavBar />
        <Toaster />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
