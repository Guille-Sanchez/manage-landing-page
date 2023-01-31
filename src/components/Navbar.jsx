import React from "react";

function Navbar() {
  return (
    <div className="flex w-screen justify-between p-7">
      <header>
        <h1 className="invisible h-0 w-0">Manage Inc.</h1>
        <img src="/logo.svg" alt="Logo Manage" />
      </header>
      <nav className="hidden sm:block ">
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
      <button
        className="sm:hidden"
        onClick={() => {
          console.log("hola");
        }}
      >
        <img src="/icon-hamburger.svg" alt="Menu Icon" />
      </button>
    </div>
  );
}

export default Navbar;
