import { useTabs } from "context/Tabs";
import { FC, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const { vscodeIsOpen } = useTabs();

  return (
    <>
      {!vscodeIsOpen ? (
        <main className="select-none">{children}</main>
      ) : (
        <>
          <Header />
          <Sidebar />
          <main className="ml-10 sm:ml-16 select-none">{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
