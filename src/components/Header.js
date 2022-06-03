import styled from "styled-components";

const Header = (props) => {
  return (
    <Nav>
      <WrapperBottom>
        <NavMenuBottom>
          <Search>
            <SearchContainer>
              <Category>
                <BoxHamburguer>
                  <span class="firstline"></span>
                  <span class="secondline"></span>
                  <span class="thirdline"></span>
                </BoxHamburguer>
                <span>Categorías</span>
              </Category>
              <InputContainer>
                <input type="text" placeholder="¿Qué buscas?" />
              </InputContainer>

              <NavActions>
                <img
                  src="./images/searcher-glass.svg"
                  alt="searcher"
                  class="search-glass"
                />
                <Login>
                  <img src="./images/login.svg" alt="login" class="loginico" />
                  <span>
                    Iniciar Sesión <br /> Mi Cuenta
                  </span>
                </Login>
                <BoxMain>
                  <BoxGive>
                    <img
                      src="./images/pedido.svg"
                      alt="ticket"
                      class="ticketico"
                    />
                    <span>Mis pedidos</span>
                  </BoxGive>
                  <BoxBag>
                    <img src="./images/bolsa.svg" alt="bag" class="bagico" />
                    <span>Bolsa</span>
                  </BoxBag>
                </BoxMain>
              </NavActions>
            </SearchContainer>
          </Search>
        </NavMenuBottom>
      </WrapperBottom>

      <Logo>
        <img src=".\images\falabella-logo.svg" alt="falabella" />
      </Logo>

      <NavMenuLeft>
        <a href="/">Venta telefónica 587 8008 O 018000 958787</a>
        <a href="/">Servicio al cliente</a>
      </NavMenuLeft>

      <NavMenuRight>
        <a href="/">Banco</a>
        <a href="/">Seguros</a>
        <a href="/">Sodimac</a>
        <a href="/">Linio</a>
      </NavMenuRight>
    </Nav>
  );
};

const Nav = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  display: block;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: #333;
  height: 35px;
  max-width: 100vw;
  border-top: 3px solid #aad500;
  z-index: 3;
`;

const WrapperBottom = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
  height: 65px;
  margin-top: 30px;
  display: block;
`;

const NavMenuBottom = styled.div`
  margin-left: 120px;
`;

const Search = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
`;

const SearchContainer = styled.div`
  height: 64px;
  display: flex;

  .search-glass {
    cursor: pointer;
    background: #333;
    border-left: 1px solid #333;
    margin-top: 13px;
    width: 50px;
    height: 40px;
    padding: 8px;
    border-radius: 0 5px 5px 0;
    margin-right: 20px;

    &:hover {
      background: #9fc700;
      border-left: 1px solid #9fc700;
      padding: 10px;
    }
  }
`;

const Category = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  display: flex;
  cursor: pointer;

  span {
    font-family: silka regular;
    margin-top: 10px;
    color: #949494;
    font-size: 13px;
  }
`;

const BoxHamburguer = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid #949494;
  border-radius: 5px;
  margin-right: 10px;
  padding-top: 6px;

  span {
    justify-content: center;
    align-items: center;
    margin: 4px auto;
    opacity: 1;
    background-color: #949494;
    display: block;
    width: 18px;
    height: 1px;
  }
`;

const InputContainer = styled.div`
  margin-top: 13px;
  margin-left: 52px;
  width: 595px;
  display: block;
  color: #949494;

  input {
    color: #949494;
    font-family: silka regular;
    padding-left: 15px;
    width: 100%;
    height: 78%;
    outline: none;
    border-radius: 5px 0 0 5px;
    border: 1px solid #e0e0e0;
    border-right: none;
  }
`;

const NavActions = styled.div`
  display: flex;

  img {
    width: 25px;
    height: 25px;
  }
  a {
    font-size: 11px;
  }
`;
const Login = styled.div`
  width: 120px;
  display: flex;
  margin-top: 20px;
  margin-right: 30px;
  cursor: pointer;
  color: #949494;

  .loginicon {
    display: flex;
  }

  span {
    margin-left: 10px;
    font-size: 11px;
  }

  &:hover {
    color: #585858;
  }
`;

const BoxMain = styled.div`
  display: flex;
  color: #949494;
`;

const BoxGive = styled.div`
  width: 100px;
  padding: 10px;
  border-left: 1px solid #e0e0e0;
  cursor: pointer;

  .ticketico {
    margin: 0 auto;
  }

  img {
    display: block;
  }
  span {
    margin-left: 8.5px;
    font-size: 10px;
    font-family: silka regular;
  }

  &:hover {
    border-bottom: 2px solid #aad500;
  }
`;

const BoxBag = styled.div`
  width: 100px;
  padding: 10px;
  border-left: 1px solid #e0e0e0;
  cursor: pointer;

  .bagico {
    margin: 0 auto;
  }

  img {
    display: block;
  }
  span {
    margin-left: 24.5px;
    font-size: 11px;
    font-family: silka regular;
  }

  &:hover {
    border-bottom: 2px solid #aad500;
  }
`;

const Logo = styled.a`
  margin-left: 22px;
  justify-content: center;
  align-items: center;

  img {
    display: inline-block;
    padding: 8px;
    width: 68px;
    height: 95px;
    position: relative;
    background: #aad500;
    cursor: pointer;
  }
`;

const NavMenuLeft = styled.a`
  position: absolute;
  margin-top: 6px;
  margin-left: 20px;

  a {
    color: #e7e7e7;
    font-size: 11px;
    justify-content: space-between;
    margin-left: 22px;

    &:hover {
      color: white;
      border-bottom: 1px solid white;
    }
  }
`;

const NavMenuRight = styled.a`
  position: absolute;
  margin-top: 6px;
  margin-right: 10px;
  right: 0;

  a {
    color: #e7e7e7;
    font-size: 11px;
    justify-content: space-between;
    margin-left: 22px;

    &:hover {
      color: white;
    }
  }
`;

export default Header;
