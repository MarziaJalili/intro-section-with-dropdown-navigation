import { useLayoutEffect } from "react";
import Features from "./Features";
import Company from "./Company";

const navbarData = [
  {
    id: 1,
    name: "Features",
    button: {
      src: "./images/icon-arrow-down.svg",
      alt: "icon-arrow-down"
    },
    details: <Features />
  },
  {
    id: 2,
    name: "Company",
    button: {
      src: "./images/icon-arrow-down.svg",
      alt: "icon-arrow-down"
    },
    details: <Company />
  },
  {
    id: 2,
    name: "Careers",
  },
  {
    id: 3,
    name: "About",
  }
];


export default navbarData;