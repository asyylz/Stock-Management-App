import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import BrandsPage from "../pages/Brands";
import Sales from "../pages/Sales";
import Purchases from "../pages/Purchases";
import Firms from "../pages/Firms";
import Products from "../pages/Products";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          {/* Nested routes within the 'stock' route */}
          <Route path="/" element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="/stock/brands" element={<BrandsPage />} />
          <Route path="/stock/sales" element={<Sales />} />
          <Route path="/stock/purchases" element={<Purchases />} />
          <Route path="/stock/firms" element={<Firms />} />
          <Route path="/stock/products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
