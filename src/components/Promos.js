import styled from "styled-components";

const Promos = (props) => {
  return (
    <Container>
      <Content>
        <PromoTop>
          <a href="/"><img src="./images/PromoOffers.jpeg" alt="promotop" /></a>
        </PromoTop>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  margin-top: 20px;
`;

const Content = styled.div``;

const PromoTop = styled.div`
    margin-top: 20px;
    padding: 20px;
    transition: transform 0.3s ease-out;
  img {
    border-radius: 10px;
    display: block;
    width: 100%;
  }

  &:hover {
    transform: scale(0.98);

  }
`;

export default Promos;
