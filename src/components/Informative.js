import styled from "styled-components";

const Informative = (props) => {
  return (
    <Container>
      <Options>
        <a href="/">Horario de tiendas</a>
        <a href="/">Club novios</a>
        <a href="/">CMR puntos</a>
        <a href="/">Solicita aquí tu CMR</a>
        <a href="/">Falabella sostenible</a>
      </Options>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f8f8f8;
  padding: 10px;
`;

const Options = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-right: auto;
  margin-right: 20px;

  a {
    align-items: center;
    color: #9e9e9e;
    font-size: 11px;
    justify-content: space-between;
    padding-left: 40px;

    &:hover {
      
      color: #8fca00;
    }
  }
`;

export default Informative;
