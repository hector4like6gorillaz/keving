import React from "react";
import NavBar from "../navbar/NavBar";

const LayoutHOC = ({
  showFooter = true,
  children,
}: {
  showFooter?: boolean;
  children: JSX.Element;
}) => {
  return (
    <div>
      <NavBar />

      {children}
      {showFooter && <NavBar />}
    </div>
  );
};

export default LayoutHOC;
