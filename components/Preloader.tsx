import Image from "next/image";
import React from "react";

const Preloader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image src="/preloader.svg" alt="loader" width={64} height={64} />{" "}
    </div>
  );
};

export default Preloader;
