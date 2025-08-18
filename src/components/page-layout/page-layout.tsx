import { Outlet } from "react-router-dom";

// Components
import Header from "components/header";
import ScrollIcon from "components/scroll-icon";

// Styles
import "./page-layout.scss";

const PageLayout = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
        <footer className="border-t border-gray-200 bg-gray-50 py-3 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Vince Marie Deguma. All rights
            reserved.
          </p>
        </footer>
      </main>
      <ScrollIcon />
    </>
  );
};

export default PageLayout;
