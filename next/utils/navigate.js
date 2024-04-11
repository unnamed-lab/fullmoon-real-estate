"use strict";

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
