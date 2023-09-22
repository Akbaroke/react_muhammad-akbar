import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import Register from './pages/Register';
import ProtectedRoute from './middlewares/ProtectedRoute';

const initialAuthState = {
  isAuth: false,
  user: {
    id: null,
    username: null,
    email: null,
  },
};

export default function App() {
  const [products, setProducts] = useState();
  const [accounts, setAccounts] = useState();
  const [auth, setAuth] = useState(initialAuthState);

  const logout = () => {
    setAuth(initialAuthState);
  };

  return (
    <div className="px-8">
      <Routes>
        <Route
          path="/login"
          element={<Login accounts={accounts} setAuth={setAuth} />}
        />
        <Route
          path="/register"
          element={<Register accounts={accounts} setAccounts={setAccounts} />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute auth={auth}>
              <Product
                products={products}
                setProducts={setProducts}
                onLogout={logout}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/:id"
          element={
            <ProtectedRoute auth={auth}>
              <EditProduct products={products} setProducts={setProducts} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute auth={auth}>
              <CreateProduct setProducts={setProducts} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
