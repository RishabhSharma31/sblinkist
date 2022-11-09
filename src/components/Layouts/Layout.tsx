import React, { Fragment } from "react";
import Topbar from "../Appbars/Topbar";
import Footer from "../Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Topbar />
      <Section cls="mt-20 lg:pl-14">{children}</Section>
      <Footer />
    </Fragment>
  );
};

export default Layout;

export const Section = ({ children, cls }: SectionProp) => (
  <div className={`max-w-screen-lg mx-auto px-5 lg:px-12 ${cls}`}>
    {children}
  </div>
);

interface SectionProp {
  children: React.ReactNode;
  cls?: string;
}
