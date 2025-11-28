import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <main className="container my-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
