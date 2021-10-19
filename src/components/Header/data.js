import React from "react";
import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiDumbbell, BiLogIn } from "react-icons/bi";

export const data = [
  {
    url: "/",
    link: "Home",
    icon: <AiOutlineHome className="me-1 text-success" />,
  },
  {
    url: "/about",
    link: "About",
    icon: <BiDumbbell className="me-1 text-danger" />,
  },
  {
    url: "/services",
    link: "Services",
    icon: <AiOutlineUnorderedList className="me-1 text-info" />,
  },
  {
    url: "/shop",
    link: "Shop",
    icon: <AiOutlineShoppingCart className="me-1 text-warning" />,
  },
];
