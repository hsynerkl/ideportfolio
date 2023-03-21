import { FC, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="ml-10 sm:ml-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
