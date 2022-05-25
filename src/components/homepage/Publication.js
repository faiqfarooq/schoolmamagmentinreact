import React from 'react';
import publi1 from '../../images/publication/p-1.jpg';
import publi2 from '../../images/publication/p-2.jpg';
import publi3 from '../../images/publication/p-3.jpg';
import publi4 from '../../images/publication/p-4.jpg';
const Publication = () => {
    return (
        <div>
             <section id="publication-part" className="pt-115 pb-120 py-5 gray-bg">
    <div className="container">
      <div className="row align-items-end">
        <div className="col-lg-6 col-md-8 col-sm-7">
          <div className="section-title pb-60">
            <h5>Publications</h5>
            <h2>From Store </h2>
          </div>{" "}
          {/* section title */}
        </div>
        <div className="col-lg-6 col-md-4 col-sm-5">
          <div className="products-btn text-right pb-60">
            <a href="#" className="main-btn">
              All Products
            </a>
          </div>{" "}
          {/* products btn */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 col-sm-8">
          <div className="singel-publication mt-30">
            <div className="image">
              <img src={publi1} alt="Publication" />
              <div className="add-cart">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cont">
              <div className="name">
                <a href="shop-singel.html">
                  <h6>Set for life </h6>
                </a>
                <span>By Scott Trench</span>
              </div>
              <div className="button text-right">
                <a href="#" className="main-btn">
                  Buy Now ($50)
                </a>
              </div>
            </div>
          </div>{" "}
          {/* singel publication */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-8">
          <div className="singel-publication mt-30">
            <div className="image">
              <img src={publi2} alt="Publication" />
              <div className="add-cart">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cont">
              <div className="name">
                <a href="shop-singel.html">
                  <h6>A Daughters </h6>
                </a>
                <span>By Scott Trench</span>
              </div>
              <div className="button text-right">
                <a href="#" className="main-btn">
                  Buy Now ($30)
                </a>
              </div>
            </div>
          </div>{" "}
          {/* singel publication */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-8">
          <div className="singel-publication mt-30">
            <div className="image">
              <img src={publi3} alt="Publication" />
              <div className="add-cart">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cont">
              <div className="name">
                <a href="shop-singel.html">
                  <h6>A Magnet </h6>
                </a>
                <span>By Scott Trench</span>
              </div>
              <div className="button text-right">
                <a href="#" className="main-btn">
                  Buy Now ($20)
                </a>
              </div>
            </div>
          </div>{" "}
          {/* singel publication */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-8">
          <div className="singel-publication mt-30">
            <div className="image">
              <img src={publi4} alt="Publication" />
              <div className="add-cart">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cont">
              <div className="name">
                <a href="shop-singel.html">
                  <h6>Pices of light</h6>
                </a>
                <span>By Scott Trench</span>
              </div>
              <div className="button text-right">
                <a href="#" className="main-btn">
                  Buy Now ($75)
                </a>
              </div>
            </div>
          </div>{" "}
          {/* singel publication */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
        </div>
      );
}
 
export default Publication;