import React from "react";
import { FiHome, FiBook } from "react-icons/fi";
import { TbFileInvoice } from "react-icons/tb";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "home",
        icon: <FiHome />,
      },
      {
        name: "summary",
        icon: <FiBook />,
      },
    ],
  },
  {
    title: "Pages",
    links: [
      {
        name: "invoice",
        icon: <TbFileInvoice />,
      },
      {
        name: "billing",
        icon: <RiBillLine />,
      },
      {
        name: "inventory",
        icon: <MdOutlineInventory2 />,
      },
    ],
  },
  {
    title: "Example Pages",
    links: [
      {
        name: "ecommerce",
      },
      {
        name: "orders",
      },
      {
        name: "employees",
      },
      {
        name: "customers",
      },
      {
        name: "calendar",
      },
      {
        name: "kanban",
      },
      {
        name: "editor",
      },
      {
        name: "color-picker",
      },
      {
        name: "line",
      },
      {
        name: "area",
      },

      {
        name: "bar",
      },
      {
        name: "pie",
      },
      {
        name: "financial",
      },
      {
        name: "color-mapping",
      },
      {
        name: "pyramid",
      },
      {
        name: "stacked",
      },
    ],
  },
];
