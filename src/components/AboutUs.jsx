import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <h1>Paradise Nursery</h1>

      <p>
        Paradise Nursery offers beautiful indoor and outdoor
        plants for your home and office.
      </p>

      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default AboutUs;