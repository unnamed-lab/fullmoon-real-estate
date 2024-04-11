"use client";
import "../../styles/css/section/footer.css";
import logo from "../../assets/icons/logo.png";
import Link from "next/link";
import FooterIcon from "./FooterIcon";
import { company } from "../../utils/team";
import Image from "next/image";


function Footer() {
  const yr = new Date().getFullYear();
  const social = [
    {
      name: "Facebook",
      icon: <FooterIcon type={"facebook"} />,
      url: company.social.facebook,
    },
    {
      name: "Twitter",
      icon: <FooterIcon type={"twitter"} />,
      url: company.social.twitter,
    },
    {
      name: "Instagram",
      icon: <FooterIcon type={"instagram"} />,
      url: company.social.instagram,
    },
    // { name: "YouTube", icon: <FooterIcon type={"youtube"} />, url: "/" },
  ];
  // const others = [
  //   { name: "Privacy Policy", url: "/" },
  //   { name: "Terms and Conditions", url: "/" },
  // ];
  return (
    <footer className="footer">
      <ul className="list_menu">
        {social?.map((el, index) => {
          return (
            <li key={index}>
              <Link href={el.url}>
                <span>{el.icon}</span>
                {el.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href={"/"} className="brand_logo">
        <Image
          src={logo}
          width={"200px"}
          height={"200px"}
          alt="Fullmoon Real Estate"
          title="Fullmoon Real Estate"
          loading="lazy"
          fetchPriority="high"
        />
      </Link>
      {/* <ul className="list_menu">
        {others?.map((el, index) => {
          return (
            <li key={index}>
              <Link href={el.url}>{el.name}</Link>
            </li>
          );
        })}
      </ul> */}
      <div className="credit">
        &copy; {yr} Fullmoon Real Estate - All right reserved.
      </div>
    </footer>
  );
}

export default Footer;
