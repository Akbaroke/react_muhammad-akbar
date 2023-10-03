import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children, auth }) {
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return children;
}
