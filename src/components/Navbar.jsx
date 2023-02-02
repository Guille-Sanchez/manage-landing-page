import React from "react";

function Navbar() {
  //-z-10 translate-x-16 -translate-y-32 origin-top-right
  return (
    <>
      <div className="relative flex w-screen justify-between p-7">
        <header>
          <h1 className="invisible h-0 w-0">Manage Inc.</h1>
          <img src="/logo.svg" alt="Logo Manage" />
        </header>
        <nav className="relative  hidden  bg-black sm:block ">
          <div className="absolute -z-10 translate-x-10 -translate-y-24 bg-[url('/bg-tablet-pattern.svg')] bg-cover bg-scroll bg-no-repeat p-44"></div>

          <ul className="flex">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>
        <div className="relative  bg-black sm:hidden">
          <button
            onClick={() => {
              console.log("hola");
            }}
          >
            <img src="/icon-hamburger.svg" alt="Menu Icon" />
          </button>

          <div className="absolute -z-10 -translate-x-60 -translate-y-28 bg-[url('/bg-tablet-pattern.svg')] bg-cover bg-scroll bg-no-repeat p-44"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
