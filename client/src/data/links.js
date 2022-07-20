import React from "react";
import { FiHome, FiBook } from "react-icons/fi";
import { FaFileInvoice } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";

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
        icon: <FaFileInvoice />,
      },
      {
        name: "billing",
        icon: <RiBillLine />,
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
        name: "home",
        icon: <FiHome />,
      },
       {
        name: "orders",
      },
      {
        name: "employees",
      },
      {
        name: "customers",
      },{
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
      },{
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
    ]
  }
];
