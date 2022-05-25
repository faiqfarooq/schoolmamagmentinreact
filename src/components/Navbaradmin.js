import React from 'react';
import logoimg from '../images/logo/logo.png';
import operatorimg from '../images/icons/operator.png';
import { Link } from 'react-router-dom';
const Navbaradmin = () => {
    return ( 
        <div>
             <header id="header-part">
    <div className='header-logo-support pt-30 pb-30'>
   
    {/* header top */}
    <div className="header-logo-support pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <div className="logo">
              <Link to="dashboard">
                <img src={logoimg} className="logo_img_size" alt="logo" />
              </Link>
            </div>
          </div>

          <div className="col-lg-5 mx-auto col-md-5 ">
            <div className='row flex'>
              <div className='col-lg-6 col-md-6'>
              <div className="support-button float-right d-none d-md-block">
              <div className="support float-left">
                <div className="icon">
                  <img src={operatorimg} alt="icon" />
                </div>
                <div className="cont">
                  <p>Need Help? call us free</p>
                  <span>0335 7678820</span>
                </div>
              </div>
              </div>
              </div>
              <div className='col-lg-6 col-md-6'>
             
              </div>
            </div>
            
          </div>

          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* header logo support */}
    <div className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-9 col-8">
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto list-unstyled">
                  <li className="nav-item">
                    <Link className="active nav-link " to="/dashboard">
                      Dashboard
                    </Link>
                   
                  </li>
                  <li className="nav-item">
                    <Link to="/registrstudent" className=" nav-link ">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link
                     to="/showregstudent" className=" nav-link " >Show</Link>
                  </li>
                
                  <li className="nav-item">
                    <a href="teachers.html" className=" nav-link ">Our teachers</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="teachers.html"className=" nav-link ">teachers</a>
                      </li>
                      <li>
                        <a href="teachers-singel.html"className=" nav-link ">teacher Singel</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="blog.html"className=" nav-link ">Blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog.html"className=" nav-link ">Blog</a>
                      </li>
                      <li>
                        <a href="blog-singel.html" className=" nav-link ">Blog Singel</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/Event-creation" className=" nav-link ">Event Creation</Link>
                   
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className=" nav-link ">Contact</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="contact.html" className=" nav-link ">Contact Us</a>
                      </li>
                      <li>
                        <a href="contact-2.html"className=" nav-link ">Contact Us 2</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>{" "}
            {/* nav */}
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3 col-4">
            <div className="right-icon text-right">
              <ul>
                <li>
                  <a href="#" id="search">
                    <i className="fa fa-search" />
                  </a>
                </li>
               
              </ul>
            </div>{" "}
            {/* right icon */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>
  </header>
        </div>
     );
}
 
export default Navbaradmin;