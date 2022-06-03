import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowRight from "../icons/arrowright.svg";
import ArrowLeft from "../icons/arrowleft.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="arrowright" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="arrowleft" />
    </div>
  );
}

const SliderMain = (props) => {
  let settings = {
    dots: false,
    infinity: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="/">
          <img src="./images/V_J11_Compu_desk.png" alt="pc" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="./images/V_J11_TV_desk.png" alt="desk" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="./images/V_J10_Tenis_Desk.png" alt="tenis" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="./images/sliderfo.png" alt="tenis" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="./images/sliderfi.png" alt="tenis" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="./images/slidersix.png" alt="tenis" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 0px;
  display: block;

  .slick-prev {
    z-index: 1;
    left: 0px;
    visibility: hidden;

    img {
      width: 20px;
      height: 20px;

      &:hover {
        width: 25px;
        height: 25px;
      }
    }
  }

  .slick-next {
    z-index: 1;
    right: 0;
    visibility: hidden;

    img {
      width: 20px;
      height: 20px;

      &:hover {
        width: 25px;
        height: 25px;
      }
    }
  }

  .slick-arrow.slick-prev {
    height: 20%;
    width: 3%;
    background: #333;
    border-radius: 0 8px 8px 0;
    &:hover {
      opacity: 1;
      width: 3.5%;
    }
  }

  .slick-arrow.slick-next {
    height: 20%;
    width: 3%;
    background: #333;
    border-radius: 8px 0 0 8px;
    &:hover {
      opacity: 1;
      width: 3.5%;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  &:hover {
    .slick-prev {
      visibility: visible;
    }

    .slick-next {
      visibility: visible;
    }
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default SliderMain;
