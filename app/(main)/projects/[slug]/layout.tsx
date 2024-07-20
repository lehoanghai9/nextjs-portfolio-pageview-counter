import React from "react";
import Transition from "@/app/components/transition";


const layout = ({ children }: { children: React.ReactNode }) => {
  return <Transition>{children}</Transition>;
};

export default layout;
