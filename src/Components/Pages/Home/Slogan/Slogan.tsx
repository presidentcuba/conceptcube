import React from "react";

import { useTranslation } from "react-i18next";
import "./Slogan.scss";
import img1 from "../../../../Assets/Images/console-img-1.png";
import img2 from "../../../../Assets/Images/console-img-2.png";
import img3 from "../../../../Assets/Images/console-img-3.png";
import img4 from "../../../../Assets/Images/console-img-4.png";
import img5 from "../../../../Assets/Images/console-img-5.png";
import img6 from "../../../../Assets/Images/console-img-6.png";
import Slider from "react-slick";
interface Props {
  className: string;
}
const Slogan = ({ className }: Props) => {
  const { t } = useTranslation();
  const images = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
    { url: img6 },
  ];
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className={`panel slogan ${className}`}>
      <p className="slogan-text">
        Creative, Fun and- Enjoyable work Impressive
      </p>
      <div className="slogan-slick1">
        <div className="slider">
          <Slider {...settings}>
            {images.map((image, index: number) => (
              <div key={index}>
                <img src={image.url}></img>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
