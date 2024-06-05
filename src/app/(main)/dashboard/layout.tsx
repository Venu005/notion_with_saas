import React from "react";

interface LayOutProps {
  children: React.ReactNode;
  params: any;
}

const LayOut: React.FC<LayOutProps> = ({ children, params }) => {
  return <main className="flex overflow-hidden h-screen">{children}</main>;
};

export default LayOut;
