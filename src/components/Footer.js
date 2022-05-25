import React from 'react';
import { Link } from 'react-router-dom';
import '../components/homepage/Home.css';
const Footer = () => {
    return ( 
        <div>
            <footer id="footer-part">
    <div className="footer-top pt-40 py-5  pb-70">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 col-md-6">
            <div className="footer-about mt-40">
              <div className="logo">
                <Link to="/" className='text-decoration-none'>
                  <h1 className='text-warning '>Faiq Fraooq <br /> University</h1>
                </Link>
              </div>
              <p>
                Gravida nibh vel velit auctor aliquetn quibibendum auci elit
                cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh
                vulputate.
              </p>
              <ul className="mt-20 ">
                <li >
                  <a href="#">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* footer about */}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-link mt-40">
              <div className="footer-title pb-25">
                <h6>Sitemap</h6>
              </div>
              <ul>
                <li>
                  <Link to="/" className='text-decoration-none'>
                    <i className="fa fa-angle-right " />
                    Home
                  </Link>
                </li>
                <li>
                  <a href="about.html" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    About us
                  </a>
                </li>
                <li>
                  <a href="courses.html" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    Courses
                  </a>
                </li>
                <li>
                  <a href="blog.html" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    News
                  </a>
                </li>
                <li>
                  <a href="events.html" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    Event
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="shop.html" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    Shop
                  </a>
                </li>
                <li>
                  <a href="teachers.html" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    Teachers
                  </a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none'> 
                    <i className="fa fa-angle-right" />
                    Support
                  </a>
                </li>
                <li>
                  <a href="contact.html" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* footer link */}
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-link support mt-40">
              <div className="footer-title pb-25">
                <h6>Support</h6>
              </div>
              <ul>
                <li>
                  <a href="#" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    FAQS
                  </a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    Policy
                  </a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none'>
                    <i className="fa fa-angle-right" />
                    Documentation
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* support */}
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-address mt-40">
              <div className="footer-title pb-25">
                <h6>Contact Us</h6>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fa fa-home" />
                  </div>
                  <div className="cont">
                    <p>Opposite Faiq Farooq,J-Block, LDA Avenue, Lahore</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="cont">
                    <p>+92335 7678820</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-envelope-o" />
                  </div>
                  <div className="cont">
                    <p>faiqfarooq777@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>{" "}
            {/* footer address */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* footer top */}
    <div className="footer-copyright pt-10 pb-25">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="copyright text-md-left text-center pt-15">
              <p>
                <a target="_blank" href="#">
                  Faiq Farooq
                </a>{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="copyright text-md-right text-center pt-15"></div>
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* footer copyright */}
  </footer>
        </div>
     );
}
 
export default Footer;