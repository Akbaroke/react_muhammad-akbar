import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PrivateRoute({ isLogin, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  return children;
}
