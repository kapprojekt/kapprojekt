import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PagesLayout;
