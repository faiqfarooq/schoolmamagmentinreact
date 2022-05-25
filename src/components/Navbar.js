import React from 'react';
import logoimg from '../images/logo/logo.png';
import locationimg from '../images/icons/location.png';
import mailimg from '../images/icons/mail.png';
import operatorimg from '../images/icons/operator.png';
import '../components/homepage/Home.css';
import { Link } from 'react-router-dom';
const Navbar = ({ setShow, size }) => {
  
    return ( 
        <div>
       
              <header id="header-part">
    <div className='header-logo-support pt-30 pb-30'>
    <div className="header-top d-none d-lg-block pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="header-contact text-lg-left text-center">
              <ul>
                <li>
                <img src={locationimg} className="topbar_icon_img" alt="location" />
                  <span>LDA avenue,Lahore</span>
                </li>
                <li>
                  <img src={mailimg} className="topbar_icon_img" alt="icon" />
                  <span>faiqfarooq777@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-opening-time text-lg-right text-center">
              <p>Opening Hours : Monday to Saturay - 8 Am to 5 Pm</p>
            </div>
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* header top */}
    <div className="header-logo-support pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <div className="logo">
              <Link to="/">
                <img src={logoimg} className="logo_img_size" alt="logo" />
              </Link>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 ">
            <div className='row flex py-2'>
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
             
              <div className="support-button float-right d-none d-md-block">
              <div className="button float-left">
                <Link to="/sign-form" className="main-btn">
                  Apply Now
                </Link>
              </div>
            </div></div>
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
                    <Link className="active nav-link " to="/">
                      Home
                    </Link>
                   
                  </li>
                  <li className="nav-item">
                    <Link to="/admin" className=" nav-link ">About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/*" className=" nav-link " >Courses</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/*" className=" nav-link ">Courses</Link>
                      </li>
                      <li>
                        <Link to="/*" className=" nav-link ">Course Singel</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/*" className=" nav-link ">Events</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/*" className=" nav-link ">Events</Link>
                      </li>
                      <li>
                        <Link to="/*" className=" nav-link ">Event Singel</Link>
                      </li>
                    </ul>
                  </li>
                 
                  <li className="nav-item">
                    <Link to="/Shop" className=" nav-link ">Books</Link>
                   
                  </li>
                  <li className="nav-item">
                    <Link to="" className=" nav-link ">Online Portal</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to='/studentlogin' className=" nav-link ">Student Portal</Link>
                      </li>
                      <li>
                        <Link to="/teacherlogin" className=" nav-link ">Teacher Portal</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to='/About-us' className=" nav-link ">About Us</Link>
                  
                  </li>
                  <li className="nav-item">
                    <Link to='/contact-us' className=" nav-link ">Contact</Link>
                  
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
                <li>
                <span className="my_shop" onClick={() => setShow()}></span>
                
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
 
export default Navbar;