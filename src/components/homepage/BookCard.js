import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
<div className=" py-3 row justify-content-center">
<div className="col-9">
                  <div className="singel-publication mt-30">
                    <div className="image">
                      <img src={img} alt="Publication" />
                      <div className="add-cart">
                        <ul>
                          <li><Link to="/cart"><i className="fa fa-shopping-cart" /></Link></li>
                          {/* <li><a href="#"><i className="fa fa-heart-o" /></a></li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="cont">
                      <div className="name">
                        <a href="shop-singel.html"><h6>{title} </h6></a>
                        <span>${price}</span>
                      </div>
                      <div className=" py-3 button text-right">
                        <button onClick={() => handleClick(item)} className="main-btn">Buy Now</button>
                      </div>
                    </div>
                  </div> {/* singel publication */}
                </div>
                </div>




    // <div className="col-lg-3 col-md-6 col-sm-8">
    //   <div className="singel-publication mt-30">
    //     <img className="image" src={img} alt="" />
    //   </div>
    //   <div className="details">
    //     <p>{title}</p>
    //     <p className="cont">{author}</p>
    //     <p className="name" >Price - {price}Rs</p>
    //     <button className="main-btn button text-right" onClick={() => handleClick(item)}>Add to Cart</button>
    //   </div>
    // </div>
  );
};

export default BookCard;

// id, title, autor, price, img
