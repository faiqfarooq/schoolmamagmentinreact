import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Navbar';
import Publication from '../homepage/Publication';
import background_img1 from '../../images/background/banner1.jpg';
import background_img2 from '../../images/background/banner2.jpg';
import background_img3 from '../../images/background/banner3.jpg';
import background_img4 from '../../images/background/bg-1.png';

import news1 from '../../images/news/n-1.jpg';
import news2 from '../../images/news/ns-1.jpg';
import news3 from '../../images/news/ns-2.jpg';
import news4 from '../../images/news/ns-3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer';


class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                

                {/* <div className="preloader">
        <div className="loader rubix-cube">
          <div className="layer layer-1" />
          <div className="layer layer-2" />
          <div className="layer layer-3 color-1" />
          <div className="layer layer-4" />
          <div className="layer layer-5" />
          <div className="layer layer-6" />
          <div className="layer layer-7" />
          <div className="layer layer-8" />
        </div>
        </div> */}

 
  {/*====== PRELOADER PART START ======*/}
 

<Navbar />
































  {/*====== HEADER PART ENDS ======*/}
  {/*====== SEARCH BOX PART START ======*/}
  <div className="search-box">
    <div className="serach-form">
      <div className="closebtn">
        <span />
        <span />
      </div>
      <form action="#">
        <input type="text" placeholder="Search by keyword" />
        <button>
          <i className="fa fa-search" />
        </button>
      </form>
    </div>{" "}
    {/* serach form */}
  </div>

<section>
  <div >



  <Carousel>
  <Carousel.Item fade interval={3000}>
    <img
      className="d-block w-100 backgrounf_img_gradient"
      src={background_img1}
      alt="First slide"
      
    />
    <Carousel.Caption>
    <div className="slider-cont">
    <h1 data-animation="bounceInLeft" className="black_shadow_head" data-delay="1s">
              Premier University of Pakistan
              </h1>
              <p className='black_shadow' data-animation="fadeInUp" data-delay="1.3s">
              Five modern Campuses in Major Cities Across Country
Renowned for quality and impact of its students in the development of local software and other industries
Provide world class educational environment and recreational facilities
              </p>
              <ul>
                <li>
                <a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#" > Read More </a>
                </li>
                <li>
                  <a data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" href="#">Get Started</a>
                </li>
              </ul>
            </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={background_img2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <div className="slider-cont">
    <h1 data-animation="bounceInLeft" className="black_shadow_head" data-delay="1s">
              Premier University of Pakistan
              </h1>
              <p className='black_shadow' data-animation="fadeInUp" data-delay="1.3s">
              Five modern Campuses in Major Cities Across Country
Renowned for quality and impact of its students in the development of local software and other industries
Provide world class educational environment and recreational facilities
              </p>
              <ul>
                <li>
                <a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#" > Read More </a>
                </li>
                <li>
                  <a data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" href="#">Get Started</a>
                </li>
              </ul>
            </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={background_img3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <div className="slider-cont">
    <h1 data-animation="bounceInLeft" className="black_shadow_head" data-delay="1s">
              Premier University of Pakistan
              </h1>
              <p className='black_shadow' data-animation="fadeInUp" data-delay="1.3s">
              Five modern Campuses in Major Cities Across Country
Renowned for quality and impact of its students in the development of local software and other industries
Provide world class educational environment and recreational facilities
              </p>
              <ul>
                <li>
                <a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#" > Read More </a>
                </li>
                <li>
                  <a data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" href="#">Get Started</a>
                </li>
              </ul>
            </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  

  </div>
</section>
  

















































  
  
  {/*====== CATEGORY PART ENDS ======*/}
  {/*====== ABOUT PART START ======*/}
  <section id="about-part" className="pt-65">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-5">
          <div className="section-title mt-50">
            <h5>About us</h5>
            <h2>Welcome to Faiq Farooq University </h2>
          </div>{" "}
          {/* section title */}
          <div className="about-cont">
            <p>
              Hi There, I’m Faiq Farooq and i am Front-End Web Developer. It's been 1 years, I’m working as web developer.I have developed many website and also provided my services to college students by getting their projects ready ASAP as a freelancer I have been part of some very good web design projects.<br />

I have done my graduation in Computer Engineering.<br />

My Skill Set : 
<br />
<br />
HTML5<br />
CSS3<br />
JavaScript<br />
Bootstrap<br />
React js<br />
<br />

I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.<br /><br />
              
            </p>
            <a href="#" className="main-btn mt-55">
              Learn More
            </a>
          </div>
        </div>{" "}
        {/* about cont */}
        <div className="col-lg-6 offset-lg-1">
          <div className="about-event mt-50">
            <div className="event-title">
              <h3>Upcoming events</h3>
            </div>{" "}
            {/* event title */}
            <ul>
              <li>
                <div className="singel-event">
                  <span>
                    <i className="fa fa-calendar" /> 24 June 2022
                  </span>
                  <a href="events-singel.html">
                    <h4>Submission of FYP</h4>
                  </a>
                  <span>
                    <i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm
                  </span>
                  <span>
                    <i className="fa fa-map-marker" /> B-Block CUI,LHR
                  </span>
                </div>
              </li>
              <li>
                <div className="singel-event">
                  <span>
                    <i className="fa fa-calendar" /> 27 June 2022
                  </span>
                  <a href="events-singel.html">
                    <h4>Web workshop</h4>
                  </a>
                  <span>
                    <i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm
                  </span>
                  <span>
                    <i className="fa fa-map-marker" /> A- Block CUI-LHR
                  </span>
                </div>
              </li>
              <li>
                <div className="singel-event">
                  <span>
                    <i className="fa fa-calendar" /> 2 December 2022
                  </span>
                  <a href="events-singel.html">
                    <h4>Enviroement conference</h4>
                  </a>
                  <span>
                    <i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm
                  </span>
                  <span>
                    <i className="fa fa-map-marker" /> C-Block CUI-LHR
                  </span>
                </div>
              </li>
            </ul>
          </div>{" "}
          {/* about event */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
    <div className="about-bg">
      <img src={background_img4} alt="About" />
    </div>
  </section>
  {/*====== ABOUT PART ENDS ======*/}



  {/*====== APPLY PART START ======*/}
  <section id="apply-aprt" className="pb-120">
    <div className="container">
      <div className="apply">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div className="apply-cont apply-color-1">
              <h3>Apply for fall 2019</h3>
              <p>
                Gravida nibh vel velit auctor aliquetn sollicitudirem sem
                quibibendum auci elit cons equat ipsutis sem nibh id elituis sed
                odio sit amet nibh vulputate cursus equat ipsutis.
              </p>
              <a href="#" className="main-btn">
                Apply Now
              </a>
            </div>{" "}
            {/* apply cont */}
          </div>
          <div className="col-lg-6">
            <div className="apply-cont apply-color-2">
              <h3>Apply for scholarship</h3>
              <p>
                Gravida nibh vel velit auctor aliquetn sollicitudirem sem
                quibibendum auci elit cons equat ipsutis sem nibh id elituis sed
                odio sit amet nibh vulputate cursus equat ipsutis.
              </p>
              <a href="#" className="main-btn">
                Apply Now
              </a>
            </div>{" "}
            {/* apply cont */}
          </div>
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== APPLY PART ENDS ======*/}


  

  {/*====== PUBLICATION PART START ======*/}
 <Publication/>
  {/*====== PUBLICATION PART ENDS ======*/}
  
  
  {/*====== NEWS PART START ======*/}
  <section id="news-part" className="pt-115 pb-110">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title pb-50">
            <h5>Latest News</h5>
            <h2>From the news</h2>
          </div>{" "}
          {/* section title */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row">
        <div className="col-lg-6">
          <div className="singel-news mt-30">
            <div className="news-thum pb-25">
              <img src={news1} alt="News" />
            </div>
            <div className="news-cont">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-calendar" />2 December 2018{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span>By</span> Adam linn
                  </a>
                </li>
              </ul>
              <a href="blog-singel.html">
                <h3>Tips to grade high cgpa in university life</h3>
              </a>
              <p>
                Lorem ipsum gravida nibh vel velit auctor aliquetn
                sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh
                id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
                mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                tincidunt .
              </p>
            </div>
          </div>{" "}
          {/* singel news */}
        </div>
        <div className="col-lg-6">
          <div className="singel-news news-list">
            <div className="row">
              <div className="col-sm-4">
                <div className="news-thum mt-30">
                  <img src={news2} alt="News" />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="news-cont mt-30">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" />2 December 2018{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>By</span> Adam linn
                      </a>
                    </li>
                  </ul>
                  <a href="blog-singel.html">
                    <h3>Intellectual communication</h3>
                  </a>
                  <p>
                    Gravida nibh vel velit auctor aliquetn sollicitudirem
                    quibibendum auci elit cons vel.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* singel news */}
          <div className="singel-news news-list">
            <div className="row">
              <div className="col-sm-4">
                <div className="news-thum mt-30">
                  <img src={news3} alt="News" />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="news-cont mt-30">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" />2 December 2018{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>By</span> Adam linn
                      </a>
                    </li>
                  </ul>
                  <a href="blog-singel.html">
                    <h3>Study makes you perfect</h3>
                  </a>
                  <p>
                    Gravida nibh vel velit auctor aliquetn sollicitudirem
                    quibibendum auci elit cons vel.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* singel news */}
          <div className="singel-news news-list">
            <div className="row">
              <div className="col-sm-4">
                <div className="news-thum mt-30">
                  <img src={news4} alt="News" />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="news-cont mt-30">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" />2 December 2018{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>By</span> Adam linn
                      </a>
                    </li>
                  </ul>
                  <a href="blog-singel.html">
                    <h3>Technology edcution is now....</h3>
                  </a>
                  <p>
                    Gravida nibh vel velit auctor aliquetn sollicitudirem
                    quibibendum auci elit cons vel.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* singel news */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== NEWS PART ENDS ======*/}

 
  {/*====== FOOTER PART START ======*/}
  <Footer/>
  {/*====== FOOTER PART ENDS ======*/}
  {/*====== BACK TO TP PART START ======*/}
  <a href="#" className="back-to-top">
    <i className="fa fa-angle-up" />
  </a>
  {/*====== BACK TO TP PART ENDS ======*/}





            </div>
        );
    }
}
 
export default Home;