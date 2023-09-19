import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreateProduct from './pages/CreateProduct';
import DetailProduct from './pages/DetailProduct';
import PrivateRoute from './middlewares/PrivateRoute';
import Login from './pages/Login';

const initialValue = [
  {
    id: uuidv4(),
    product_name: 'Product 1',
    product_category: 'Food',
    product_freshness: 'Brand New',
    product_price: 10000,
  },
];

export default function App() {
  const [products, setProducts] = useState(initialValue);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route
          path="/product"
          element={
            <PrivateRoute isLogin={isLogin}>
              <CreateProduct products={products} setProducts={setProducts} />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PrivateRoute isLogin={isLogin}>
              <DetailProduct products={products} />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
