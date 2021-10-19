import React from "react";
import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiDumbbell } from "react-icons/bi";

export const data = [
  {
    url: "/",
    link: "Home",
    icon: <AiOutlineHome className="me-1 text-success" />,
  },
  {
    url: "/programs",
    link: "Programs",
    icon: <BiDumbbell className="me-1 text-danger" />,
  },

  {
    url: "/shop",
    link: "Cart",
    icon: <AiOutlineShoppingCart className="me-1 text-warning" />,
  },
];
