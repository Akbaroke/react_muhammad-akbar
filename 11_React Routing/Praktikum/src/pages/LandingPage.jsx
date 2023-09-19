import HERO from '../assets/hero-img.png';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <header>
        <h1>Simple Header</h1>
        <div id="btn-navigate-createProduct">
          <Link to="/product">Create Product</Link>
        </div>
      </header>
      <section id="hero" className="container-custom">
        <div className="wrapper">
          <div className="title">
            <h1>Better Solutions For Your Business</h1>
            <h3>We are team of talented designers making websites with Bootstrap</h3>
          </div>
          <div className="buttons">
            <button>Get Started</button>
            <button>Watch Video</button>
          </div>
        </div>
        <img src={HERO} alt="Hero Image" className="hero-image" />
      </section>
      <section id="join" className="container-custom">
        <div className="wrapper">
          <h1>Join Our Newsletter</h1>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <form>
            <input type="email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
      <footer>
        <div className="detail container-custom">
          <div className="tab">
            <h1>ARSHA</h1>
            <p>
              A108 Adam Street <br /> New York, NY 535022 United States
            </p>
            <div>
              <p>
                <b>Phone:</b> +1 5589 55488 55
              </p>
              <p>
                <b>Email:</b> info@example.com
              </p>
            </div>
          </div>
          <div className="tab">
            <h1>Useful Links</h1>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="tab">
            <h1>Our Services</h1>
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="tab">
            <h1>Our Social Networks</h1>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div>
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className="copyright container-custom">
          <p>
            © Copyright <b>Arsha</b>. All Rights Reserved
          </p>
          <p>
            Designed by <i>BootstrapMade</i>
          </p>
        </div>
      </footer>
    </>
  );
}
