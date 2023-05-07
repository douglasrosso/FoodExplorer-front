import { Container, Content } from "./styles.js";
import { ThemeProvider } from "styled-components";
import { OrderCard } from "../../components/OrderCard";
import GlobalStyles from "../../styles/global";
import { useCart } from "../../hooks/cart";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import theme from "../../styles/theme.js";

export const Cart = () => {
  const { cart, total } = useCart();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Content>
          <div className="card-wrapper">
            <div className="order-wrapper">
              <h2>Meu pedido</h2>
              <div className="details">
                {cart &&
                  cart.map((item) => (
                    <OrderCard key={String(item.id)} data={item} />
                  ))}
              </div>
              <div className="total">
                <p>
                  Total: R$<span>{total}</span>
                </p>
              </div>
            </div>
          </div>
        </Content>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
