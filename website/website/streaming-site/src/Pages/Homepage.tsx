import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Image1 from "../assets/img/post-slide-1.jpg";
import Image2 from "../assets/img/post-landscape-1.jpg";
import Carousel from "react-bootstrap/Carousel";

function Homepage() {
  return (
    <React.Fragment>
      <main id="main">
        hello
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Image1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Image1} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Image1} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <section id="posts" className="posts">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-12">
                <div className="row g-5">
                  <div className="col-lg-4 border-start custom-border">
                    <div className="post-entry-1">
                      <a href="single-post.html">
                        <img src={Image2} alt="" className="img-fluid" />
                      </a>
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span>
                      </div>
                      <h2>
                        <a href="single-post.html">Let’s Get Back to Work, New York</a>
                      </h2>
                    </div>
                    <div className="post-entry-1">
                      <a href="single-post.html">
                        <img src={Image2} alt="" className="img-fluid" />
                      </a>
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span> <span>Jul 17th '22</span>
                      </div>
                      <h2>
                        <a href="single-post.html">
                          How to Avoid Distraction and Stay Focused During Video Calls?
                        </a>
                      </h2>
                    </div>
                    <div className="post-entry-1">
                      <a href="single-post.html">
                        <img src={Image2} alt="" className="img-fluid" />
                      </a>
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span> <span>Mar 15th '22</span>
                      </div>
                      <h2>
                        <a href="single-post.html">
                          Why Craigslist Tampa Is One of The Most Interesting Places On the Web?
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 border-start custom-border">
                    <div className="post-entry-1">
                      <a href="single-post.html">
                        <img src={Image2} alt="" className="img-fluid" />
                      </a>
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span>
                      </div>
                      <h2>
                        <a href="single-post.html">
                          6 Easy Steps To Create Your Own Cute Merch For Instagram
                        </a>
                      </h2>
                    </div>
                    <div className="post-entry-1">
                      <a href="single-post.html">
                        <img src={Image2} alt="" className="img-fluid" />
                      </a>
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span> <span>Mar 1st '22</span>
                      </div>
                      <h2>
                        <a href="single-post.html">
                          10 Life-Changing Hacks Every Working Mom Should Know
                        </a>
                      </h2>
                    </div>
                    <div className="post-entry-1">
                      <a href="single-post.html">
                        <img src={Image2} alt="" className="img-fluid" />
                      </a>
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span>
                      </div>
                      <h2>
                        <a href="single-post.html">5 Great Startup Tips for Female Founders</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Homepage;
