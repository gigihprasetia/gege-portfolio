"use client";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-screen w-full">{children}</div>;
};

export default MainLayout;
