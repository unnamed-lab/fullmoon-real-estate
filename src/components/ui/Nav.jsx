import "../../styles/css/section/navbar.css";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({ customColor }) {
  const [activeNav, setNav] = useState(false);
  const navMenu = [
    { title: "home", url: "/" },
    { title: "about", url: "/about" },
    { title: "buy", url: "/buy" },
    { title: "services", url: "/service" },
    { title: "contact", url: "/contact" },
  ];
  return (
    <header>
      <nav className="nav">
        <Link to={"/"} className="brand_logo">
          <img
            src={logo}
            width={"200px"}
            height={"200px"}
            alt="Fullmoon Real Estate"
            title="Fullmoon Real Estate"
            loading="lazy"
          />
        </Link>
        <button
          className="nav_toggle"
          onClick={() => {
            setNav(!activeNav);
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.25 6.5H22.75M3.25 13H22.75M3.25 19.5H22.75"
              stroke={customColor || "white"}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ul className={`nav_menu ${activeNav ? "show" : ""}`}>
          {navMenu?.map((el, index) => {
            return (
              <li key={index} className="nav_option">
                <Link to={el.url} style={{ color: customColor || "white" }}>
                  {el.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className={`nav_menu_backdrop ${activeNav ? "" : "hide"}`}
          onClick={() => setNav(!activeNav)}
        ></div>
      </nav>
    </header>
  );
}

export default Nav;
