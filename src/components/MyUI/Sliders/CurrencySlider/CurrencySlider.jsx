import Slider from "react-slick";
import React from 'react';
import {NextButton, PrevButton} from "../../MyNavButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import styles from "../../../../pages/ExchangeRatePage/styles.module.scss";
import {ReactComponent as PositiveArrowIcon} from '../../../../assets/icons/positiveArrowIcon.svg';


function CurrencySlider(props) {

  console.log('===>props', props.allValutes)

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
    // <div>

      <div
        style={{
          width: '900px',
          // margin: "auto"
        }}
      >
        <Slider
          // style={{display: 'flex'}}
          {...settings}>

          {props.allValutes.map(
            ({
               name,
               rate,
               changePerc,
               change,
             }) => {
              return (
                <div key={name} className={styles.card}>
                  <div className={styles.resCur}>
                    <div className={styles.result__num_percent}>
                      <PositiveArrowIcon/>
                    </div>
                    <div className={styles.column}>
                    <span className={styles.one}>
                      {name} / RUB
                    </span>
                      <span className={styles.two}>
                        {rate}
                    </span>
                    </div>
                  </div>
                  <div className={styles.column}>
                  <span className={styles.three}>
                    {changePerc}%
                  </span>
                    <span className={styles.four}>
                      {change}
                  </span>
                  </div>
                </div>
              )}
          )}
        </Slider>
      </div>
    // </div>
  );
}

export default CurrencySlider;