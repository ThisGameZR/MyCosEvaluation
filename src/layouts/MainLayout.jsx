import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
    </>
  );
}
