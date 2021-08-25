import React from "react";
import logo from "../images/content/logo.png"
const Splash = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full md:w-4/12 text-center">
            <img src={logo} className="mx-auto mb-8" />
            <p className="mb-16 px-4" >
                Kami menyediakan jasa furniture berkelas yang membuat ruangan anda terasa homey
            </p>
          </div>
      </div>
    </div>
  );
};

export default Splash;
