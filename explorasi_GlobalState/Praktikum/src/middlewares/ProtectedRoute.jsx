import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const { auth } = useSelector((state) => state.auth);

  if (!auth.isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return children;
}
