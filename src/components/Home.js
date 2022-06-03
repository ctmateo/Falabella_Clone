import styled from "styled-components";
import Informative from "./Informative";
import SliderMain from "./SliderMain";
import Offers from "./Offers";
import Promos from "./Promos";
import Sales from "./Sales";
import ThinkNoMore from "./ThinkNoMore";
import Footer from "./Footer";

const Home = (props) => {
  return (
    <Container>
      <Informative />
      <SliderMain />
      <Offers />
      <Promos />
      <Sales />
      <ThinkNoMore />
      <Footer />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  display: block;
  top: 98px;
  right: 0;
  left: 0;
`;

export default Home;
