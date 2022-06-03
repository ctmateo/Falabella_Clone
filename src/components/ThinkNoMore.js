import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ThinkNoMore = (props) => {
  let settings = {
    dots: true,
    infinity: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  let postsettings = {
    slidesToShow: 1,
    SlidesToScroll: 2,
    arrows: false,
  };

  return (
    <Container>
      <Title>
        <span class="title">¡No lo pienses más!</span>
      </Title>
      <Content>
        <Carousel {...settings}>
          <Wrap>
            <img src="./images/cell1.jpg" alt="cell1" />
            <span class="title">VIVO</span>
            <span class="descripcion">Celular vivo Y51 128GB</span>
            <Price>
              <span class="firstprice">$749.900</span>
              <span>$ 797.900 (Precio final)</span>
              <span>$ 1.079.900</span>
              <button>Ver producto</button>
            </Price>
          </Wrap>

          <Wrap>
            <img src="./images/cell3.jpg" alt="cell3" />
            <span class="title">XIAOMI</span>
            <span class="descripcion">Celular Xiaomi Redmi Note 8 128GB</span>
            <Price>
              <span class="firstprice">$752.900</span>
              <span>$ 752.900 (Precio final)</span>
              <span>$ 1.399.900</span>
              <button>Ver producto</button>
            </Price>
          </Wrap>

          <Wrap>
            <img src="./images/cell4.jpg" alt="cell4" />
            <span class="title">VIVO</span>
            <span class="descripcion">Celular vivo Y20s 4GB + 128GB</span>
            <Price>
              <span class="firstprice">$649.900</span>
              <span>$ 679.900 (Precio final)</span>
              <span>$ 1.099.900</span>
              <button>Ver producto</button>
            </Price>
          </Wrap>

          <Wrap>
            <img src="./images/cell6.jpg" alt="cell6" />
            <span class="title">VIVO</span>
            <span class="descripcion">Celular vivo Y20s 4GB + 128GB</span>
            <Price>
              <span class="firstprice">$658.900</span>
              <span>$ 658.900 (Precio final)</span>
              <span>$ 1.099.000</span>
              <button>Ver producto</button>
            </Price>
          </Wrap>

          <Wrap>
            <img src="./images/cell7.jpg" alt="cell7" />
            <span class="title">MOTOROLA</span>
            <span class="descripcion">Celular Motorola Moto G9 Plus 128GB</span>
            <Price>
              <span class="firstprice">$779.900</span>
              <span>$ 999.900 (Precio final)</span>
              <span>$ 1.599.900</span>
              <button>Ver producto</button>
            </Price>
          </Wrap>
        </Carousel>

        <CarouselTwo {...postsettings}>
          <Wrap>
            <img src="./images/cell1.jpg" alt="cell1post" />
            <span class="title">VIVO</span>
            <span class="descripcion">Celular vivo Y51 128GB</span>
            <Price>
              <span class="firstprice">$749.900</span>
              <span>$ 797.900 (Precio final)</span>
              <span>$ 1.079.900</span>
              <button>Ver producto</button>
            </Price>
          </Wrap>

          <Wrap>
            <img src="./images/cell3.jpg" alt="cell3post" />
            <span class="title">XIAOMI</span>
            <span class="descripcion">Celular Xiaomi Redmi Note 8 128GB</span>
            <Price>
              <span class="firstprice">$752.900</span>
              <span>$ 752.900 (Precio final)</span>
              <span>$ 1.399.900</span>
              <button>Ver producto</button>
            </Price>
          </Wrap>

          <Wrap>
            <img src="./images/cell4.jpg" alt="cell4post" />
            <span class="title">VIVO</span>
            <span class="descripcion">Celular vivo Y20s 4GB + 128GB</span>
            <Price>
              <span class="firstprice">$649.900</span>
              <span>$ 679.900 (Precio final)</span>
              <span>$ 1.099.900</span>
              <button>Ver producto</button>
            </Price>
          </Wrap>

          <Wrap>
            <img src="./images/cell6.jpg" alt="cell6post" />
            <span class="title">VIVO</span>
            <span class="descripcion">Celular vivo Y20s 4GB + 128GB</span>
            <Price>
              <span class="firstprice">$658.900</span>
              <span>$ 658.900 (Precio final)</span>
              <span>$ 1.099.000</span>
              <button>Ver producto</button>
            </Price>
          </Wrap>

          <Wrap>
            <img src="./images/cell7.jpg" alt="cell7post" />
            <span class="title">MOTOROLA</span>
            <span class="descripcion">Celular Motorola Moto G9 Plus 128GB</span>
            <Price>
              <span class="firstprice">$779.900</span>
              <span>$ 999.900 (Precio final)</span>
              <span>$ 1.599.900</span>
              <button>Ver producto</button>
            </Price>
          </Wrap>
        </CarouselTwo>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  margin-left: 10px;
  margin-bottom: 20px;

  .title {
    color: #949494;
    font-family: silka medium;
    font-size: 15px;
  }
`;

const Content = styled.div`
  background: #fff;
`;

const Carousel = styled(Slider)`
  outline: none;
  padding: 5px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const CarouselTwo = styled(Slider)`
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
  button {
    padding: 0;
    opacity: 1 !important;
  }
`;

const Price = styled.div`
  margin-top: 30px;
  padding: 0;

  span {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .firstprice {
    color: #60bb00;
    font-size: 17px;
    margin-bottom: 5px;
  }
`;

const Wrap = styled.div`
  align-items: center;
  justify-content: center;
  background: #fff;
  cursor: pointer;
  outline: none;
  padding: 20px;

  img {
    width: 50%;
    margin-bottom: 20px;
    padding: 5px;
    margin-left: 70px;

    @media (max-width: 1000px) {
      width: 240px;
      margin-left: 267px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
  }

  span {
    display: block;
    font-size: 15px;
  }
  .title {
    font-size: 12px;
  }

  .descripcion {
    font-family: silka medium;
  }

  button {
    display: block;
    color: white;
    margin-top: 10px;
    border-radius: 5px;
    font-family: silka regular;
    align-items: center;
    width: 100%;
    padding: 10px;
    opacity: 0;
    outline: none;
    text-decoration: none;
    border: none;
    background: #1a1a1a;
    cursor: pointer;
  }

  &:hover {
    button {
      opacity: 1;
      &:hover {
        background: #2d2d2d;
      }
    }
  }
`;

export default ThinkNoMore;
