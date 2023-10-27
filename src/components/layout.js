import NavBar from "../shared/NavBar.tsx";
import Footer from "../shared/Footer.tsx";

const Layout = ({ children }) => {
  return (
    <div className="">
      <div>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
