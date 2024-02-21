import "../../styles/css/section/footer.css";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import FooterIcon from "./FooterIcon";

function Footer() {
  const yr = new Date().getFullYear();
  const social = [
    { name: "Facebook", icon: <FooterIcon type={"facebook"} />, url: "/" },
    { name: "Twitter", icon: <FooterIcon type={"twitter"} />, url: "/" },
    { name: "Instagram", icon: <FooterIcon type={"instagram"} />, url: "/" },
    { name: "YouTube", icon: <FooterIcon type={"youtube"} />, url: "/" },
  ];
  const others = [
    { name: "Privacy Policy", url: "/" },
    { name: "Terms and Conditions", url: "/" },
  ];
  return (
    <footer className="footer">
      <ul className="list_menu">
        {social?.map((el, index) => {
          return (
            <li key={index}>
              <Link to={el.url}>
                <span>{el.icon}</span>
                {el.name}
              </Link>
            </li>
          );
        })}
      </ul>
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
      <ul className="list_menu">
        {others?.map((el, index) => {
          return (
            <li key={index}>
              <Link to={el.url}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="credit">
        &copy; {yr} Fullmoon Real Estate - All right reserved.
      </div>
    </footer>
  );
}

export default Footer;
