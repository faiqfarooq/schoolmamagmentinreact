import React from 'react';
import { Link } from 'react-router-dom';
import '../About/About.css';
import Footer  from '../Footer';
import Faiqimg from '../../images/About/faiq.jpg';
import Presedinent from '../../images/About/Presedinent.jpg';
import faiqimg1 from '../../images/About/mali.jpg';
import faiqimg2 from '../../images/About/t-7.jpg';
import aboutimg from '../../images/About/about3.jpg';
import Navbar from '../Navbar';
const About = () => {
    return ( 
        <div>
          <Navbar/>
              <section id="page-banner" className="pt-105 pb-130 bg_cover" data-overlay={8} 
             style={{ backgroundImage:` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${require("../../images/About/about.jpg")})` }}
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
      <section id="about-page" className="pt-70 py-5 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title mt-50">
                <h5>About us</h5>
                <h2>Welcome to Faiq University </h2>
              </div> {/* section title */}
              <div className="about-cont">
                <p>FAIQ FAROOQ university is the first multi-campus university of Pakistan with their headquarters located in Islamabad and campuses at Karachi, Lahore, Islamabad, Peshawar and Faisalabad is one of the leading technical universities in Pakistan.<br/>Established in 1980, the sponsoring body of FAIQ FAROOQ university was registered by Government of Pakistan as a charitable institution. FAIQ FAROOQ University was a pioneer in Pakistan's IT sector development by offering the country's first undergraduate computer science curriculum, with its headquarters at Islamabad.</p>
              </div>
            </div> {/* about cont */}
            <div className="col-lg-7">
              <div className="about-image mt-50">
                <img src={aboutimg} alt="About" />
              </div>  {/* about imag */}
            </div> 
          </div> {/* row */}
          <div className="about-items py-5 pt-60">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <span>01</span>
                  <h4>Why Choose us</h4>
                  <p>Founded as a Federally Chartered University in July 2000, the National University of Computer and Emerging Sciences is a premiere University of Pakistan, renowned for quality and impact of its students in the development of local software and other industries.</p>
                </div> {/* about singel */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <span>02</span>
                  <h4>Our Mission</h4>
                  <p>Founded as a Federally Chartered University in July 2000, the National University of Computer and Emerging Sciences is a premiere University of Pakistan, renowned for quality and impact of its students in the development of local software and other industries.</p>
                </div> {/* about singel */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <span>03</span>
                  <h4>Our vission</h4>
                  <p>To be recognized among the top five universities offering Electrical Engineering in Pakistan, producing next generation of engineers who are motivated in applying engineering concepts to solve real life problems in an ethically, socially and economically responsible way.</p>
                </div> {/* about singel */}
              </div>
            </div> {/* row */}
          </div> {/* about items */}
        </div> {/* container */}
      </section>
      
 

      <div  className="bg_cover pt-65 image-size-adjust pb-110"  style={{backgroundImage:` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${require("../../images/About/about2.jpg")})`}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="singel-counter text-center mt-40">
                <span><span className="counter">1,500</span>+</span>
                <p>Students enrolled</p>
              </div> {/* singel counter */}
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="singel-counter text-center mt-40">
                <span><span className="counter">2</span>+</span>
                <p>Programs offered</p>
              </div> {/* singel counter */}
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="singel-counter text-center mt-40">
                <span><span className="counter">900</span>+</span>
                <p>People certifie</p>
              </div> {/* singel counter */}
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="singel-counter text-center mt-40">
                <span><span className="counter">250</span>+</span>
                <p>Teachers</p>
              </div> {/* singel counter */}
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </div>






      <section id="teachers-part" className="pt-65 py-3 pb-120">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title  mt-50 pb-35">
                <h5 >Featured Faculty</h5>
                <h2>Meet Our Team</h2>
              </div> {/* section title */}
            </div>
          </div> {/* row */}
          <div className='row'>
            <div>
              
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-3 py-3 col-sm-6">
              <div className="singel-teachers mt-30 text-center">
                <div className="image">
                  <img src={Presedinent} className="imagesizeabout" alt="Teachers" />
                </div>
                <div className="cont">
                  <a href="teachers-singel.html"><h6>Arif Alivi</h6></a>
                  <span>Chencelor</span>
                </div>
              </div> {/* singel teachers */}
            </div>
            <div className="col-lg-3 py-3 col-sm-6">
              <div className="singel-teachers mt-30 text-center">
                <div className="image">
                  <img src={Faiqimg} className="imagesizeabout" alt="Teachers" />
                </div>
                <div className="cont">
                  <a href="teachers-singel.html"><h6>Malik Faiq Farooq</h6></a>
                  <span>Vice chencelor</span>
                </div>
              </div> {/* singel teachers */}
            </div>
            <div className="col-lg-3 py-3  col-sm-6">
              <div className="singel-teachers mt-30 text-center">
                <div className="image">
                  <img src={faiqimg2} className="imagesizeabout" alt="Teachers" />
                </div>
                <div className="cont">
                  <a href="teachers-singel.html"><h6>James Bond</h6></a>
                  <span>Program Director</span>
                </div>
              </div> {/* singel teachers */}
            </div>
            <div className="col-lg-3 py-3 col-sm-6">
              <div className="singel-teachers mt-30 text-center">
                <div className="image">
                  <img src={faiqimg1} className="imagesizeabout" alt="Teachers" />
                </div>
                <div className="cont">
                  <a href="https://lahore.comsats.edu.pk/Employees/877"><h6>Muhammad Ali</h6></a>
                  <span>HOD of CS</span>
                </div>
              </div> {/* singel teachers */}
            </div>
         
           
           
          
          </div> {/* row */}
        </div> {/* container */}
      </section>





 <Footer/>


        </div>
     );
}
 
export default About;