import React from 'react';
import Footer from '../Footer';
import '../Contact/Contact.css';
import '../homepage/Home.css';
import Navbar from '../Navbar';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Link } from 'react-router-dom';
const Contact = () => {
    return ( 
        <div>
            <Navbar/>
             <section id="page-banner" className="pt-105 pb-130 bg_cover" data-overlay={8} 
             style={{ backgroundImage:` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${require("../../images/contact/contact.jpg")})` }}
            //  style={{backgroundImage: 'url(../../images/contact/contact.jpg)'}}
            >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-banner-cont">
                <h2>Contact</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item "><Link to='/' className='non-underline-link'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                  </ol>
                </nav>
              </div>  {/* page banner cont */}
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </section>
      <section id="contact-page" className="pt-90 pb-120 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="contact-from mt-30">
                <div className="section-title">
                  <h5>Contact Us</h5>
                  <h2>Keep in touch</h2>
                </div> {/* section title */}
                <div className="main-form pt-45">
                  <form id="contact-form" action="#" method="post" data-toggle="validator">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="singel-form form-group">
                          <input name="name" type="text" placeholder="Your name" data-error="Name is required." required="required" />
                          <div className="help-block with-errors" />
                        </div> {/* singel form */}
                      </div>
                      <div className="col-md-6">
                        <div className="singel-form form-group">
                          <input name="email" type="email" placeholder="Email" data-error="Valid email is required." required="required" />
                          <div className="help-block with-errors" />
                        </div> {/* singel form */}
                      </div>
                      <div className="col-md-6">
                        <div className="singel-form form-group">
                          <input name="subject" type="text" placeholder="Subject" data-error="Subject is required." required="required" />
                          <div className="help-block with-errors" />
                        </div> {/* singel form */} 
                      </div>
                      <div className="col-md-6">
                        <div className="singel-form form-group">
                          <input name="phone" type="text" placeholder="Phone" data-error="Phone is required." required="required" />
                          <div className="help-block with-errors" />
                        </div> {/* singel form */}
                      </div>
                      <div className="col-md-12">
                        <div className="singel-form form-group">
                          <textarea name="messege" placeholder="Messege" data-error="Please,leave us a message." required="required" defaultValue={""} />
                          <div className="help-block with-errors" />
                        </div> {/* singel form */}
                      </div>
                      <p className="form-message" />
                      <div className="col-md-12">
                        <div className="singel-form">
                          <button type="submit" className="main-btn">Send</button>
                        </div> {/* singel form */}
                      </div> 
                    </div> {/* row */}
                  </form>
                </div> {/* main form */}
              </div> {/*  contact from */}
            </div>
            <div className="col-lg-5">
              <div className="contact-address mt-30">
                <ul>
                  <li>
                    <div className="singel-address">
                      <div className="icon">
                        <i className="fa fa-home" />
                      </div>
                      <div className="cont">
                        <p>Faiq Farooq Shaheed road,LDA Avenue,Lahore</p>
                      </div>
                    </div> {/* singel address */}
                  </li>
                  <li>
                    <div className="singel-address">
                      <div className="icon">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="cont">
                        <p>+92335 7678820</p>
                        <p>+92335 7678820</p>
                      </div>
                    </div> {/* singel address */}
                  </li>
                  <li>
                    <div className="singel-address">
                      <div className="icon">
                        <i className="fa fa-envelope-o" />
                      </div>
                      <div className="cont">
                        <p>faiqfarooq777@gmail.com</p>
                        <p>mffn777@gmail.com</p>
                      </div>
                    </div> {/* singel address */}
                  </li>
                </ul>
              </div> {/* contact address */}
              <div className="map mt-30">
                <div id="contact-map" />
                
              </div> {/* map */}
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </section>
      <Footer/>
        </div>
     );
}
 
export default Contact;