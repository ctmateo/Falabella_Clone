import styled from "styled-components";

const Sales = (props) => {
  return (
    <Container>
      <Title>
        <span class="title">Ofertas Especiales</span>
      </Title>
      <Content>
        <WrapLeft>
          <FirstImage>
            <a href="/">
              <img src="./images/speakersales.jpeg" alt="speakers" />
            </a>
          </FirstImage>
          <Double>
            <FirstImage>
              <a href="/">
                <img src="./images/fridgesales.jpeg" alt="fridge" />
              </a>
            </FirstImage>
            <SecondImage>
              <a href="/">
                <img src="./images/washingsales.jpeg" alt="washing" />
              </a>
            </SecondImage>
          </Double>
          <FirstImage>
            <a href="/">
              <img src="./images/cosmeticsales.jpeg" alt="cosmetic" />
            </a>
          </FirstImage>
          <Double>
            <FirstImage>
              <a href="/">
                <img src="./images/bedsales.jpeg" alt="bed" />{" "}
              </a>
            </FirstImage>
            <SecondImage>
              <a href="/">
                <img src="./images/chairsales.jpeg" alt="chair" />{" "}
              </a>
            </SecondImage>
          </Double>
        </WrapLeft>

        <WrapRight>
          <Double>
            <FirstImage>
              <a href="/">
                <img src="./images/camerasales.jpeg" alt="camera" />
              </a>
            </FirstImage>
            <SecondImage>
              <a href="/">
                <img src="./images/microphonesales.jpeg" alt="microphone" />
              </a>
            </SecondImage>
          </Double>
          <FirstImage>
            <a href="/">
              <img src="./images/electronicsales.jpeg" alt="electronic" />
            </a>
          </FirstImage>
          <Double>
            <FirstImage>
              <a href="/">
                <img src="./images/truesales.jpeg" alt="true" />
              </a>
            </FirstImage>
            <SecondImage>
              <a href="/">
                <img src="./images/celebrasales.jpeg" alt="celebra" />
              </a>
            </SecondImage>
          </Double>
          <FirstImage>
            <a href="/">
              <img src="./images/sportssales.jpeg" alt="sport" />
            </a>
          </FirstImage>
        </WrapRight>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 40px;
`;

const Title = styled.div`
  display: flex;

  .title {
    color: #949494;
    font-family: silka medium;
    margin-left: 10px;
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const WrapRight = styled.div``;

const WrapLeft = styled.div``;

const Double = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const FirstImage = styled.div`
  margin: 0 auto;
  padding-bottom: 10px;

  img {
    border-radius: 5px;
    display: block;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease-out;

    &:hover {
      transform: scale(0.98);
    }
  }
`;

const SecondImage = styled.div`
  padding-bottom: 10px;

  img {
    border-radius: 5px;
    display: block;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease-out;

    &:hover {
      transform: scale(0.98);
    }
  }
`;

export default Sales;
