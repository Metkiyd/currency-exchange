import Slider from "react-slick";
import React from 'react';
import {NextButton, PrevButton} from "../MyNavButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import exampleCurrency from "../../../assets/images/currencyExample.png";

const sliderData = [
  {
    id: '1',
    name: 'Slick Slide 1',
    img: exampleCurrency,
  },
  {
    id: '2',
    name: 'Slick Slide 2',
    img: exampleCurrency,
  },
  {
    id: '3',
    name: 'Slick Slide 3',
    img: exampleCurrency,
  },
  {
    id: '4',
    name: 'Slick Slide 4',
    img: exampleCurrency,
  },
  {
    id: '5',
    name: 'Slick Slide 5',
    img: exampleCurrency,
  },  {
    id: '6',
    name: 'Slick Slide 6',
    img: exampleCurrency,
  },
]

function SlickSlider1() {
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
    adaptiveHeight: true
  };

  return (
    <div>
      <div
        style={{width: '900px',
          // margin: "auto"
      }}
      >
        <Slider
          // style={{display: 'flex'}}
          {...settings}>
          {sliderData.map((slide, id) => {
            return (
              <div key={id}
                   className={"items"}
              >
                {/*<h1>{slide.name}</h1>*/}
                <img className="img-size" alt={slide.name}
                     width="224"
                     height="64"
                      src={slide.img} />
              </div>
            );
          })}

        </Slider>
      </div>
    </div>
  );
}

export default SlickSlider1;