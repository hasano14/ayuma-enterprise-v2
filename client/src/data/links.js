import React from "react";
import { FiHome, FiBook } from "react-icons/fi";
import { TbFileInvoice } from "react-icons/tb";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";
import { BiPackage } from "react-icons/bi";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "home",
        icon: <FiHome />,
      },
      // {
      //   name: "summary",
      //   icon: <FiBook />,
      // },
    ],
  },
  {
    title: "Cash Flow",
    links: [
      {
        name: "invoice",
        icon: <TbFileInvoice />,
      },
      // {
      //   name: "billing",
      //   icon: <RiBillLine />,
      // },
    ],
  },
  {
    title: "Inventory",
    links: [
      { name: "Raw-Materials", icon: <MdOutlineInventory2 /> },
      { name: "packaging", icon: <BiPackage /> },
    ],
  },
  // {
  //   title: "Example Pages",
  //   links: [
  //     {
  //       name: "ecommerce",
  //     },
  //     {
  //       name: "orders",
  //     },
  //     {
  //       name: "employees",
  //     },
  //     {
  //       name: "customers",
  //     },
  //     {
  //       name: "calendar",
  //     },
  //     {
  //       name: "kanban",
  //     },
  //     {
  //       name: "editor",
  //     },
  //     {
  //       name: "color-picker",
  //     },
  //     {
  //       name: "line",
  //     },
  //     {
  //       name: "area",
  //     },
  //     {
  //       name: "bar",
  //     },
  //     {
  //       name: "pie",
  //     },
  //     {
  //       name: "financial",
  //     },
  //     {
  //       name: "color-mapping",
  //     },
  //     {
  //       name: "pyramid",
  //     },
  //     {
  //       name: "stacked",
  //     },
  //   ],
  // },
];
