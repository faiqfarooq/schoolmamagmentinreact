import React from 'react';
import Navbar from '../Navbar';
import bookimg1 from '../../images/Book/p-1.jpg';
import bookimg2 from '../../images/Book/p-2.jpg';
import bookimg3 from '../../images/Book/p-3.jpg';
import bookimg4 from '../../images/Book/p-4.jpg';
import bookimg5 from '../../images/Book/p-5.jpg';
import bookimg6 from '../../images/Book/p-6.jpg';
import bookimg7 from '../../images/Book/p-7.jpg';
import bookimg8 from '../../images/Book/p-8.jpg';
import { Link } from 'react-router-dom';

const Booksshow = () => {
    return ( 
<div>
  <Navbar/>
  <section id="page-banner" className="pt-105 pb-130 bg_cover" data-overlay={8} 
             style={{ backgroundImage:` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${require("../../images/Book/page-banner-2.jpg")})` }}
            //  style={{backgroundImage: 'url(../../images/contact/contact.jpg)'}}
            >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-banner-cont">
                <h2>About Us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item "><Link to='/' className='non-underline-link'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                  </ol>
                </nav>
              </div>  {/* page banner cont */}
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </section>
        <section id="shop-page" className="pt-120 pb-120 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop-top-search">
                {/* <div className="shop-bar">
                  <ul className="nav" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="active" id="shop-grid-tab" data-toggle="tab" href="#shop-grid" role="tab" aria-controls="shop-grid" aria-selected="true"><i className="fa fa-th-large" /></a>
                    </li>
                    <li className="nav-item">
                      <a id="shop-list-tab" data-toggle="tab" href="#shop-list" role="tab" aria-controls="shop-list" aria-selected="false"><i className="fa fa-th-list" /></a>
                    </li>
                    <li className="nav-item">Showning 4 0f 24 Results</li>
                  </ul>
                 
                </div> */}
                {/* shop bar */}
                {/* <div className="shop-select">
                  <select>
                    <option value={1}>Sort by</option>
                    <option value={1}>Sort by 01</option>
                    <option value={2}>Sort by 02</option>
                    <option value={3}>Sort by 03</option>
                    <option value={4}>Sort by 04</option>
                    <option value={5}>Sort by 05</option>
                  </select>
                </div>  */}
              </div> {/* shop top search */}
            </div>
          </div> {/* row */}
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="shop-grid" role="tabpanel" aria-labelledby="shop-grid-tab">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-8">
                  <div className="singel-publication mt-30">
                    <div className="image">
                      <img src={bookimg1} alt="Publication" />
                      <div className="add-cart">
                        <ul>
                          <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                          <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cont">
                      <div className="name">
                        <a href="shop-singel.html"><h6>Magazine</h6></a>
                        <span>$50.00</span>
                      </div>
                      <div className="button text-right">
                        <a href="#" className="main-btn">Buy Now</a>
                      </div>
                    </div>
                  </div> {/* singel publication */}
                </div>


                
                <div className="col-lg-3 col-md-6 col-sm-8">
                  <div className="singel-publication mt-30">
                    <div className="image">
                      <img src={bookimg2} alt="Publication" />
                      <div className="add-cart">
                        <ul>
                          <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                          <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cont">
                      <div className="name">
                        <a href="shop-singel.html"><h6>Notebook </h6></a>
                        <span>$50.00</span>
                      </div>
                      <div className="button text-right">
                        <a href="#" className="main-btn">Buy Now</a>
                      </div>
                    </div>
                  </div> {/* singel publication */}
                </div>


                <div className="col-lg-3 col-md-6 col-sm-8">
                  <div className="singel-publication mt-30">
                    <div className="image">
                      <img src={bookimg3} alt="Publication" />
                      <div className="add-cart">
                        <ul>
                          <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                          <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cont">
                      <div className="name">
                        <a href="shop-singel.html"><h6>Staionary set </h6></a>
                        <span>$50.00</span>
                      </div>
                      <div className="button text-right">
                        <a href="#" className="main-btn">Buy Now</a>
                      </div>
                    </div>
                  </div> {/* singel publication */}
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8">
                  <div className="singel-publication mt-30">
                    <div className="image">
                      <img src={bookimg4} alt="Publication" />
                      <div className="add-cart">
                        <ul>
                          <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                          <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cont">
                      <div className="name">
                        <a href="shop-singel.html"><h6>Set for life </h6></a>
                        <span>$50.00</span>
                      </div>
                      <div className="button text-right">
                        <a href="#" className="main-btn">Buy Now</a>
                      </div>
                    </div>
                  </div> {/* singel publication */}
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8">
                  <div className="singel-publication mt-30">
                    <div className="image">
                      <img src={bookimg5} alt="Publication" />
                      <div className="add-cart">
                        <ul>
                          <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                          <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cont">
                      <div className="name">
                        <a href="shop-singel.html"><h6>Set for life </h6></a>
                        <span>$50.00</span>
                      </div>
                      <div className="button text-right">
                        <a href="#" className="main-btn">Buy Now</a>
                      </div>
                    </div>
                  </div> {/* singel publication */}
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8">
                  <div className="singel-publication mt-30">
                    <div className="image">
                      <img src={bookimg6} alt="Publication" />
                      <div className="add-cart">
                        <ul>
                          <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                          <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cont">
                      <div className="name">
                        <a href="shop-singel.html"><h6>Set for life </h6></a>
                        <span>$50.00</span>
                      </div>
                      <div className="button text-right">
                        <a href="#" className="main-btn">Buy Now</a>
                      </div>
                    </div>
                  </div> {/* singel publication */}
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8">
                  <div className="singel-publication mt-30">
                    <div className="image">
                      <img src={bookimg7} alt="Publication" />
                      <div className="add-cart">
                        <ul>
                          <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                          <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cont">
                      <div className="name">
                        <a href="shop-singel.html"><h6>Magazine </h6></a>
                        <span>$50.00</span>
                      </div>
                      <div className="button text-right">
                        <a href="#" className="main-btn">Buy Now</a>
                      </div>
                    </div>
                  </div> {/* singel publication */}
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8">
                  <div className="singel-publication mt-30">
                    <div className="image">
                      <img src={bookimg8} alt="Publication" />
                      <div className="add-cart">
                        <ul>
                          <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                          <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cont">
                      <div className="name">
                        <a href="shop-singel.html"><h6>Set for life </h6></a>
                        <span>$50.00</span>
                      </div>
                      <div className="button text-right">
                        <a href="#" className="main-btn">Buy Now</a>
                      </div>
                    </div>
                  </div> {/* singel publication */}
                </div>
              </div> {/* row */}
            </div>
            <div className="tab-pane fade" id="shop-list" role="tabpanel" aria-labelledby="shop-list-tab">
              <div className="row">
                <div className="col-lg-6">
                  <div className="singel-publication mt-30">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="image">
                          <img src="images/publication/p-1.jpg" alt="Publication" />
                          <div className="add-cart">
                            <ul>
                              <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                              <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="cont">
                          <div className="name">
                            <a href="shop-singel.html"><h6>Set for life </h6></a>
                            <span>$50.00</span>
                          </div>
                          <div className="description pt-10">
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                          </div>
                          <div className="button">
                            <a href="#" className="main-btn">Buy Now</a>
                          </div>
                        </div>
                      </div>
                    </div> {/* row */}
                  </div> {/* singel publication */}
                </div>
                <div className="col-lg-6">
                  <div className="singel-publication mt-30">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="image">
                          <img src="images/publication/p-2.jpg" alt="Publication" />
                          <div className="add-cart">
                            <ul>
                              <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                              <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="cont">
                          <div className="name">
                            <a href="shop-singel.html"><h6>Set for life </h6></a>
                            <span>$50.00</span>
                          </div>
                          <div className="description pt-10">
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                          </div>
                          <div className="button">
                            <a href="#" className="main-btn">Buy Now</a>
                          </div>
                        </div>
                      </div>
                    </div> {/* row */}
                  </div> {/* singel publication */}
                </div>
                <div className="col-lg-6">
                  <div className="singel-publication mt-30">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="image">
                          <img src="images/publication/p-3.jpg" alt="Publication" />
                          <div className="add-cart">
                            <ul>
                              <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                              <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="cont">
                          <div className="name">
                            <a href="shop-singel.html"><h6>Set for life </h6></a>
                            <span>$50.00</span>
                          </div>
                          <div className="description pt-10">
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                          </div>
                          <div className="button">
                            <a href="#" className="main-btn">Buy Now</a>
                          </div>
                        </div>
                      </div>
                    </div> {/* row */}
                  </div> {/* singel publication */}
                </div>
                <div className="col-lg-6">
                  <div className="singel-publication mt-30">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="image">
                          <img src="images/publication/p-4.jpg" alt="Publication" />
                          <div className="add-cart">
                            <ul>
                              <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                              <li><a href="#"><i className="fa fa-heart-o" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="cont">
                          <div className="name">
                            <a href="shop-singel.html"><h6>Set for life </h6></a>
                            <span>$50.00</span>
                          </div>
                          <div className="description pt-10">
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                          </div>
                          <div className="button">
                            <a href="#" className="main-btn">Buy Now</a>
                          </div>
                        </div>
                      </div>
                    </div> {/* row */}
                  </div> {/* singel publication */}
                </div>
              </div> {/* row */}
            </div>
          </div> {/* tab content */}
          {/* <div className="row">
            <div className="col-lg-12">
              <nav className="courses-pagination mt-50">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a href="#" aria-label="Previous">
                      <i className="fa fa-angle-left" />
                    </a>
                  </li>
                  <li className="page-item"><a className="active" href="#">1</a></li>
                  <li className="page-item"><a href="#">2</a></li>
                  <li className="page-item"><a href="#">3</a></li>
                  <li className="page-item">
                    <a href="#" aria-label="Next">
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </nav>  
            </div>
          </div>   */}
        </div> {/* container */}
      </section>
      </div>
     );
}
 
export default Booksshow;