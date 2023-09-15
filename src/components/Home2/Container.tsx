import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div style={{ padding: "100px" }}>{children}</div>;
};

export default Container;
