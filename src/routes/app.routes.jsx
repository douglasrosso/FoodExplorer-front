import { Routes, Route } from "react-router-dom";
import { CreateNewDish } from "../pages/CreateNewDish";
import { EditDish } from "../pages/EditDish";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createdish" element={<CreateNewDish />} />
      <Route path="/editdish/:id" element={<EditDish />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
