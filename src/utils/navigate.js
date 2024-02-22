"use strict";

export function getURLPath() {
  const path = window.location.pathname;
  return path;
}

export function getURLSource() {
  const path = window.location.href;
  return path;
}
export function getURLOrigin() {
  const path = window.location.origin;
  return path;
}

export function getTheme(type = "primary") {
  switch (type) {
    case "primary":
      return "#409fff";
    case "secondary":
      return "#dd3333";
    case "accent":
      return "#00335a";
  }
}