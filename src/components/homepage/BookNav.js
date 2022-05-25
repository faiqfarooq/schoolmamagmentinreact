import React from "react";
import Navbar from "../Navbar";
import cartimg from '../../images/icons/cart.png';

const Bookbar = ({ setShow, size }) => {
  return (
    <nav>
      <Navbar/>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow()}>
       
        </span>
        <div className="cart" onClick={() => setShow()}>
        <i className="fa fa-shopping-cart" />
          <span className="">{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Bookbar;
