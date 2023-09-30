import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import Register from './pages/Register';
import ProtectedRoute from './middlewares/ProtectedRoute';

export default function App() {
  return (
    <div className="px-8">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path="/:id"
          element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
