import { useNavigate } from 'react-router-dom';

export default function Header({ brandText, buttons }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-body-tertiary sticky-top bg-white">
      <div className="container-fluid">
        <a className="navbar-brand fw-semibold text-black" href="">
          {brandText}
        </a>
        <div>
          {buttons.map((button, index) => (
            <button key={index} type="button" className={`btn ${button.type}`} onClick={() => (button.text == 'Home' ? navigate('/') : null)}>
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
