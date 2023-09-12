export default function Header({ brandText, buttons }) {
  return (
    <nav className="navbar bg-body-tertiary sticky-top bg-white">
      <div className="container-fluid">
        <a className="navbar-brand fw-semibold text-black" href="">
          {brandText}
        </a>
        <div>
          {buttons.map((button, index) => (
            <button key={index} type="button" className={`btn ${button.type}`}>
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
