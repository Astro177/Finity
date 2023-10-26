import NavBar from "../shared/NavBar.tsx";
export default function Layout({ children }) {
  return (
    <div className="">
      <div>
        <NavBar />
        <main>{children}</main>
      </div>
    </div>
  );
}
