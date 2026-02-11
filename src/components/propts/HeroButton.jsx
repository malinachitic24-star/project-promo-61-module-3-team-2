

import { Link } from "react-router-dom";

function HeroButton({ text, to }) {
  return (
    <Link to={to} className="hero__btn">
      {text}
    </Link>
  );
}

export default HeroButton;