"use client";
import { useState } from "react";

function Accordion({ header, content }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className="accordion"
      onClick={() => {
        setActive(!active);
      }}
    >
      <div className={"header"}>
        <p>{header}</p>
        <span className={active ? "active" : ""}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3625 6.37842C13.8938 6.37842 14.3625 6.84717 14.3625 7.37842V8.37842C14.3625 8.94092 13.8938 9.37842 13.3625 9.37842H8.8625V13.8784C8.8625 14.4409 8.39375 14.8784 7.8625 14.8784H6.8625C6.3 14.8784 5.8625 14.4409 5.8625 13.8784V9.37842H1.3625C0.8 9.37842 0.3625 8.94092 0.3625 8.37842V7.37842C0.3625 6.84717 0.8 6.37842 1.3625 6.37842H5.8625V1.87842C5.8625 1.34717 6.3 0.878418 6.8625 0.878418H7.8625C8.39375 0.878418 8.8625 1.34717 8.8625 1.87842V6.37842H13.3625Z"
              fill="#7A7A7A"
            />
          </svg>
        </span>
      </div>
      <div className={`content ${active ? "show" : ""}`}>{content}</div>
    </div>
  );
}

export default Accordion;
