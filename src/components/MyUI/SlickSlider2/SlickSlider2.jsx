import Slider from "react-slick";
// import './style.css'
import React from 'react';
import {NextButton, PrevButton} from "../MyNavButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickSlider2() {
  function NextArrow(props) {
    const {onClick} = props;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <NextButton onClick={onClick}/>
      </div>
    );
  }

  function PrevArrow(props) {
    const {onClick} = props;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <PrevButton onClick={onClick}/>
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    centerPadding: '20px',
    // adaptiveHeight: true
  };

  return (
    <div>
      <div style={{width: '500px', margin: "auto"}}>
        <Slider
          style={{display: 'flex'}} {...settings}>
          <div>
            <h3>Slick Slide 1</h3>
          </div>
          <div>
            <h3>Slick Slide 2</h3>
          </div>
          <div>
            <h3>Slick Slide 3</h3>
          </div>
          <div>
            <h3>Slick Slide 4</h3>
          </div>
          <div>
            <h3>Slick Slide 5</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SlickSlider2;


