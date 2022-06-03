import styled from "styled-components";

const Offers = (props) => {
  return (
    <Container>
      <WrapperContent>
        <Content>
          <Wrap>
            <span>
              Compra tu SOAT <br />
              <a href="/">Conoce más</a>
            </span>
          </Wrap>

          <Wrap>
            <span>
              Cambios y devoluciones <br />
              <a href="/">Conoce más</a>
            </span>
          </Wrap>

          <Wrap>
            <span>
              Cupones de descuento <br />
              <a href="/">Conoce más</a>
            </span>
          </Wrap>

          <Wrap>
            <span>
              Genera ingresos extra <br />
              <a href="/">Conoce más</a>
            </span>
          </Wrap>
        </Content>
      </WrapperContent>

      <Title>
        <span>Ofertas de tiempo limitado</span>
      </Title>

      <ContentBottom>
        <WrapOffers>
          <img src="./images/tvoffer.png" alt="offertv" />
        </WrapOffers>
        <WrapOffers>
          <img src="./images/pc'soffer.png" alt="pc" />
        </WrapOffers>
        <WrapOffers>
          <img src="./images/celloffer.png" alt="cellphone" />
        </WrapOffers>
        <WrapOffers>
          <img src="./images/speakeroffer.png" alt="speaker" />
        </WrapOffers>
      </ContentBottom>
    </Container>
  );
};

const Container = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 40px;
`;

const Title = styled.div`
  margin-top: 30px;

  span {
    color: #949494;
    font-family: silka medium;
    margin-left: 10px;
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContentBottom = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const WrapperContent = styled.div`
  background: #f9f9f8;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #e7e7e7;
`;

const Wrap = styled.div`
  padding: 10px;
  display: flex;

  img {
    display: flex;
    height: 35px;
    width: 35px;
    margin-right: 25px;
  }

  span {
    font-size: 12px;
    color: #4e4e4e;
  }

  a {
    margin-top: 1.5px;
    font-size: 12px;
    color: #aad500;
    display: block;
    
  

    &:hover {
      color: #98bf00;
      text-decoration: underline
    }
  }

  .soat {
    width: 38px;
    height: 38px;
  }
`;

const WrapOffers = styled.div`
  margin-top: 20px;
  background: #e2e2e2;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

export default Offers;
