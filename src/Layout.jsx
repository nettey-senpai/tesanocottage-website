import { Footer, Navbar } from "./components";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navbar />

    <main>
      <Outlet />
    </main>

    <Footer />
  </>
);

export default Layout;
