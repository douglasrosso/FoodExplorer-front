import { FavoritesProvider } from "./hooks/favorites";
import { AuthProvider } from "./hooks/auth";
import { CartProvider } from "./hooks/cart";
import { Routes } from "./routes";
import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <Routes />
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
