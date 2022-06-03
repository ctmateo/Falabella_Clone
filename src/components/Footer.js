import styled from "styled-components";

const Footer = (props) => {
  return (
    <Container>
      <Content>
        <Title>
          <span>
            Encuentralo en <span class="name">Falabella.com</span>
          </span>
        </Title>
        <Grid>
          <Wrap>
            <span class="title">Fat Pandora y Falabella</span>
            <span>
              Una colección de ropa pensada en las mujeres, la colección Fat
              Pandora ha sido pensada para romper todas las reglas de cómo se
              deberían vestir los cuerpos. Súmate a Falabella y Fat Pandora
              subiendo tus fotos con el hashtag #FatPandoraXFalabella y las
              redes de mujer rompiendo mitos. Encuentra opciones increíbles en
              ropa para mujer sin preocuparte por la talla. Podrás elegir entre
              vestidos, pantalones, blusas y muchas opciones más para elegir tu
              nuevo estilo y en la talla que deseas.
            </span>
          </Wrap>

          <Wrap>
            <span class="title">Muebles y decoración - Tendencia natural</span>
            <span>
              Descubre en Falabella.com una nueva opción para que escojas tus
              muebles y decoración, tendencia natural. Una tendencia donde
              predominan los muebles con un diseño sobrio, de acabados con un
              estilo natural y en materiales como madera, tejidos naturales y
              piedra que te invitan a un ambiente de tranquilidad y elegancia.
              Podrás encontrar increíbles opciones para muebles de sala,
              comedor, dormitorio e inclusive terraza, escoge desde mesas y
              sillas, decoración, ropa de cama y muchas opciones para darle un
              nuevo aire a tus espacios favoritos.
            </span>
          </Wrap>

          <Wrap>
            <span class="title">Rebajas Falabella</span>
            <span>
              Si estás pensando en renovar tu closet, con Rebajas en Falabella
              tendrás una gran oportunidad que no puedes desaprovechar para
              estrenar ropa para hombre y mujer, con ofertas increíbles. Anímate
              a estrenar todas tus prendas preferidas: chaquetas, jeans,
              vestidos, camisas y camisetas y muchas opciones más para que
              renueves tu look a precios imperdibles.
            </span>
          </Wrap>

          <Wrap>
            <span class="title">Festival de tecnología</span>
            <span>
              Si eres un fanático y un apasionado por la tecnología en Falabella
              podrás descubrir pronto nuestro festival de tecnología, un
              especial pensado para todos los que quieren mantenerse
              actualizados y equiparse con los mejores gadgets y dispositivos.
              Encuentra en nuestro especial tus categorías preferidas en
              tecnología: celulares, computadores, televisores, audio y muchas
              más donde descubre todas las novedades de tus marcas favoritas y
              tendrás también la oportunidad de aprovechar ofertas imperdibles
              en tus marcas favoritas.
            </span>
          </Wrap>
        </Grid>
      </Content>
      <FooterBottom>
        <Wrapper>
          <Grid>
            <Wrap>
              <span class="titlebottom">SUSCRÍBETE A NUESTRO NEWSLETTER</span>
              <span class="bottom">
                Infórmate de lo último de Falabella. Nuestras ofertas y
                novedades directamente en tu e-mail.
              </span>
              <a href="/" class="subs">
                Suscríbete y entérate primero de los mejores productos y ofertas
              </a>
            </Wrap>
            <Wrap>
              <span class="titlebottom">SERVICIO AL CLIENTE</span>
              <a href="/">Mi Cuentas</a>
              <a href="/">Seguimiento de mi orden</a>
              <a href="/">Nuestras Tiendas</a>
              <a href="/">Medios de Pago</a>
              <a href="/">Métodos de entrega</a>
              <a href="/">Nuestros productos</a>
              <a href="/">Preguntas Frecuentes</a>
              <a href="/">Términos y condiciones</a>
              <a href="/">Política de tratamiento de datos personales</a>
              <a href="/">Derecho de Retracto</a>
              <a href="/">Comunicaciones Falabella</a>
              <a href="/">Cambios y devoluciones</a>
              <a href="/">Reversión del pago</a>
              <a href="/">¿Cómo redimir tu GiftCard?</a>
            </Wrap>
            <Wrap>
              <span class="titlebottom">MÁS FALABELLA</span>
              <a href="/">Nuestra empresa</a>
              <a href="/">Proveedores</a>
              <a href="/">Ventas empresa</a>
              <a href="/">Inversionistas</a>
              <a href="/">Red Verde</a>
              <a href="/">Canal de integridad</a>
              <a href="/">Club Deco</a>
              <a href="/">Club Novios</a>
              <a href="/">Club Bebes</a>
            </Wrap>
            <Wrap>
              <span class="titlebottom">EMPRESAS FALABELLA</span>
              <a href="/">Banco Falabella</a>
              <a href="/">Seguros Falabella</a>
              <a href="/">Sodimac</a>
              <a href="/">Linio</a>
            </Wrap>
          </Grid>
        </Wrapper>
      </FooterBottom>
      <FooterBehind>
        <Wrapper>
          <DoubleGrid>
            <Wrap>
              <span class="copyright">
                © TODOS LOS DERECHOS RESERVADOSFalabella de Colombia S.A. Calle
                99 11A-32 Bogotá Colombia NIT: 900.017.447-8 Teléfono: Bogotá
                5878002 Mail: servicioalcliente@falabella.com.co
              </span>
            </Wrap>
            <Wrap>
              <span class="seguro">COMPRA 100% SEGURA</span>
            </Wrap>
          </DoubleGrid>
        </Wrapper>
      </FooterBehind>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
`;

const Content = styled.div`
  background: #f9f9f8;
  padding: 50px;
`;

const Title = styled.div`
  margin-left: 37%;
  margin-bottom: 30px;
  span {
    font-family: silka medium;
    font-size: 18px;
    color: #4e4e4e;
  }

  .name {
    color: #aad500;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1,1fr)
  }
`;

const Wrap = styled.div`
  align-items: center;

  .title {
    display: block;
    font-size: 13px;
    font-family: silka medium;
    margin-bottom: 10px;
  }

  span {
    color: #4e4e4e;
    font-size: 10px;
  }
  .titlebottom {
    display: block;
    color: #d6d6d6;
    font-size: 13px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .bottom {
    margin-top: 50px;
    color: #d6d6d6;
    font-size: 13px;
  }
  a {
    color: #d6d6d6;
    display: block;
    font-family: silka regular;
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 20px;

    &:hover {
      text-decoration: underline;
    }
  }
  .subs {
    color: #aad500;
  }

  .seguro {
    position: absolute;
    margin-top: 15px;
    margin-right: 10px;
    right: 0;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const FooterBottom = styled.div`
  background: #2d2d2d;
  border-top: 3px solid #aad500;
  padding-bottom: 30px;
`;

const FooterBehind = styled.div`
  background: #1f1f1f;
  border-top: 1px solid #323232;
`;

const DoubleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default Footer;
