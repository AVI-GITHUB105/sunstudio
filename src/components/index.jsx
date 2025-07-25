import React, { useRef, useState, useEffect } from 'react';
import { hoverEffect, fullscr, loaderani } from './index.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import useLocomotive from '../hooks/useLocomotive';

import 'swiper/css';
import 'swiper/css/pagination';


const Index = () => {
  useLocomotive();

  useEffect(() => {
    loaderani();
    setTimeout(() => {
      hoverEffect();
      fullscr();
      // loaderani();
    },100);
  }, []);
  return (
    <div className="mainc">
      <div className="loader">
        <h1>ENVIRONMENT</h1>
        <h1>EXPERIENCES</h1>
        <h1>CONTENT</h1>
      </div>
      <div className="main" data-scroll-container >
      <div className="fullscr" >
        <div className="white">
          {/* <div className='whitemenu'>
            <img src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="" />
            <h3>Menu</h3>
          </div> */}
        </div>
      </div>
        <div className="page1" >
          <nav>
            <img src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="" />
            <div className="navpart2">
              <h4><a href="#">Work</a></h4>
              <h4><a href="#">Studio</a></h4>
              <h4><a href="#">Contact</a></h4>
            </div>
            <h3>Menu</h3>
          </nav>
          <div className='center' >
            <div className="left">
              <h3>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</h3>
            </div>
            <div className="right">
              <h1>SPACES <br />
                THAT <br />
                INSPIRE <br />
              </h1>
            </div>
          </div>
          <div className="heroshape">
            <div className="hero1"></div>
            <div className="hero2"></div>
            <div className="hero3"></div>
          </div>

          <video autoPlay loop muted src="public/video.mp4"></video>
        </div>
        <div id="page2">
          <div id="moving-text">
            <div className="con">
              <h1>EXPERIENCES</h1>
              <div className="gola"></div>
              <h1>CONTENT</h1>
              <div className="gola"></div>
              <h1>ENVIRONMENTS</h1>
              <div className="gola"></div>
            </div>
            <div className="con">
              <h1>EXPERIENCES</h1>
              <div className="gola"></div>
              <h1>CONTENT</h1>
              <div className="gola"></div>
              <h1>ENVIRONMENTS</h1>
              <div className="gola"></div>
            </div>
            <div className="con">
              <h1>EXPERIENCES</h1>
              <div className="gola"></div>
              <h1>CONTENT</h1>
              <div className="gola"></div>
              <h1>ENVIRONMENTS</h1>
              <div className="gola"></div>
            </div>
            <div className="con">
              <h1>EXPERIENCES</h1>
              <div className="gola"></div>
              <h1>CONTENT</h1>
              <div className="gola"></div>
              <h1>ENVIRONMENTS</h1>
              <div className="gola"></div>
            </div>
            <div className="con">
              <h1>EXPERIENCES</h1>
              <div className="gola"></div>
              <h1>CONTENT</h1>
              <div className="gola"></div>
              <h1>ENVIRONMENTS</h1>
              <div className="gola"></div>
            </div>
            <div className="con">
              <h1>EXPERIENCES</h1>
              <div className="gola"></div>
              <h1>CONTENT</h1>
              <div className="gola"></div>
              <h1>ENVIRONMENTS</h1>
              <div className="gola"></div>
            </div>
          </div>
          <div className="page2bottom">
            <h1>We are a group of design-  driven, goal-focused creators,  producers, and designers  who believe that the details  make all the difference.</h1>
            <div className="bottompart2">
              <img src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg" alt="" />
              <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
            </div>
          </div>
          <div className="gooey">
          </div>
        </div>
        <div className="page3">
        <div className="fixed-image"></div>
          <div className="elemcontainer">
            <div className="elem" id="elem1" data-image="https://images.unsplash.com/photo-1701001308648-7b731a52b8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D">
              <div className="overlay"></div>
              <h1>Makers Studio HOI</h1>
            </div>
            <div className="elem" data-image="https://images.unsplash.com/photo-1700975928909-da4a46227a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8">
              <div className="overlay"></div>
              <h1>50th Anniversary</h1>
            </div>
            <div className="elem" data-image="https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D">
              <div className="overlay"></div>
              <h1>
                NYFW Popup</h1>
            </div>
            <div className="elem" data-image="https://images.unsplash.com/photo-1701014159309-4a8b84faadfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D">
              <div className="overlay"></div>
              <h1>Air Force 1 2021</h1>
            </div>
            <div className="elem" data-image="https://images.unsplash.com/photo-1700924546093-f914fd5b8814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D">
              <div className="overlay"></div>
              <h1>SOHO NYC</h1>
            </div>
            <div className="elem" data-image="https://images.unsplash.com/photo-1700601437860-e66da79cf6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D">
              <div className="overlay"></div>
              <h1>SOHO 2023</h1>
            </div>
            <div className="elem" data-image="https://images.unsplash.com/photo-1700769025506-6c3dcb9ec9b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D">
              <div className="overlay"></div>
              <h1>Play New Kidvision</h1>
            </div>
          </div>
        </div>
        <div className="page4">
          <div className="page4card">
            <div className="page4left">
              <div className="page4lefttop">
                <div className="line">
                  <div className="lcon"></div>
                </div>
                <h1>Design <br /> <span>Project</span>  <br /> <span>Execution</span> </h1>
              </div>
              <div className="h4">
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur autem ea ipsa asperiores ut impedit, magnam vel aperiam placeat ullam!</h4>
              </div>
            </div>
            <div className="page4right">
              <img src="https://images.unsplash.com/photo-1700769025506-6c3dcb9ec9b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>
        </div>
        <div className="page5">
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={40}
            // pagination={{
            //   clickable: true,
            // }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
          </Swiper>
        </div>
        <div className="page6"></div>

      </div>
      <div className="footer">
        <div className="footertop">
          <div className="fl"></div>
          <div className="fr"></div>
        </div>
        <h1>Sundown</h1>
        <div className="footerbottom"></div>
      </div>

    </div>

  )
}

export default Index