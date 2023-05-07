import { Container, Content, Banner } from "./styles.js";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ThemeProvider } from "styled-components";
import { useFavorites } from "../../hooks/favorites";
import { Navigation } from "swiper";
import GlobalStyles from "../../styles/global";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import background from "../../assets/Mask group.png";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import theme from "../../styles/theme.js";
import "swiper/css/navigation";
import "swiper/css";

export const Home = () => {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const { favorites } = useFavorites();

  async function handleFavorites(favorite) {
    if (favorite.length === 0) {
      return;
    }
    setDishes(favorites);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }
    fetchDishes();
  }, [search, favorites.length === 0]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header
          search={setSearch}
          favoritesFilter={() => handleFavorites(favorites)}
        />
        <Content>
          <Banner>
            <img src={background} alt="Imagem de ingredientes" />
            <div className="banner">
              <div className="title">
                <h1>Sabores inigualáveis</h1>
                <span>
                  Sinta o cuidado do preparo com ingredientes selecionados
                </span>
              </div>
            </div>
          </Banner>
          <div className="cards">
            <p>Pratos principais</p>
            {dishes.filter((dish) => dish.category == "dishes").length > 0 && (
              <Swiper
                grabCursor={true}
                loop={true}
                loopFillGroupWithBlank={true}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  "@1.20": {
                    slidesPerView: 4,
                    spaceBetween: 160,
                  },
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {dishes
                  .filter((dish) => dish.category == "dishes")
                  .map((item, index) => (
                    <SwiperSlide key={String(index)}>
                      <Card data={item} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
            <p>Sobremesas</p>
            {dishes.filter((dish) => dish.category == "dessert").length > 0 && (
              <Swiper
                grabCursor={true}
                loop={true}
                loopFillGroupWithBlank={true}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  "@1.20": {
                    slidesPerView: 4,
                    spaceBetween: 160,
                  },
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {dishes
                  .filter((dish) => dish.category == "dessert")
                  .map((dish) => (
                    <SwiperSlide key={String(dish.id)}>
                      <Card data={dish} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
            <p>Bebidas</p>
            {dishes.filter((dish) => dish.category == "drinks").length > 0 && (
              <Swiper
                grabCursor={true}
                loop={true}
                loopFillGroupWithBlank={true}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  "@1.20": {
                    slidesPerView: 4,
                    spaceBetween: 160,
                  },
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {dishes
                  .filter((dish) => dish.category == "drinks")
                  .map((dish) => (
                    <SwiperSlide key={String(dish.id)}>
                      <Card data={dish} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </div>
        </Content>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
