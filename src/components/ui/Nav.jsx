import "../../styles/css/section/navbar.css";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";

function Nav() {
  const navMenu = [
    { title: "home", url: "/" },
    { title: "about", url: "/about" },
    { title: "buy", url: "/" },
    { title: "services", url: "/service" },
    { title: "contact", url: "/contact" },
  ];
  return (
    <header>
      <nav className="nav">
        <Link to={"/"} className="brand_logo">
          <img src={logo} alt="Fullmoon Real Estate" />
        </Link>
        <ul className="nav_menu">
          {navMenu?.map((el, index) => {
            return (
              <li key={index} className="nav_option">
                <Link to={el.url}>{el.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
