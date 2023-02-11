import React from "react";
import Navbar from "react-bootstrap/Navbar";



const Header = () => {
  return (
    <>
      <Navbar className="bg-dark" style={{ width: "100%", height: "60px" }} fixed="top">
        <h2 className="mx-auto text-light fa-fade">
          <span className="text-light">PIXEL</span><i class="fa-solid fa-v fa-beat"></i>LOGS{" "}
        </h2>
      </Navbar>



    </>
  );
};

export default Header;
