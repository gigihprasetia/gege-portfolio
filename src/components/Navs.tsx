"use client";
import React from "react";
import { Button } from "./ui/button";

const Navs = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./cv_gigih_prasetia.pdf";
    link.setAttribute("download", "CV_GIGIH_PRASETIA.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="absolute bg-black w-full px-10 py-4 flex justify-between items-center ">
      <p className="text-3xl">GEGE</p>

      <Button onClick={handleDownload} className="border-white border-2">
        Download CV
      </Button>
    </div>
  );
};

export default Navs;
