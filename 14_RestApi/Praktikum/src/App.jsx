import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import ProtectedRoute from './middlewares/ProtectedRoute';

export default function App() {
  const [auth, setAuth] = useState(false);

  const logout = () => {
    setAuth(false);
  };

  return (
    <div className="px-8">
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route
          path="/"
          element={
            <ProtectedRoute auth={auth}>
              <Product onLogout={logout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/:id"
          element={
            <ProtectedRoute auth={auth}>
              <EditProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute auth={auth}>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
