import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2>Paradise Nursery</h2>

      <p>
        Paradise Nursery provides beautiful indoor
        and outdoor plants for homes and offices.
      </p>

      <p>
        Our mission is to make gardening simple,
        affordable, and enjoyable for everyone.
      </p>

      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default AboutUs;