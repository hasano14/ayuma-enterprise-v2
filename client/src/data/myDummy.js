import React from "react";

const invoiceGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p
      style={{ background: props.Status === "Pending" ? "#FEC90F" : "#8BE78B" }}
      className="rounded-full h-3 w-3"
    />
    <p>{props.Status}</p>
  </div>
);

export const rawMaterialGrid = [
  { type: "checkbox", width: "50" },
  {
    field: "RawNumber",
    headerText: "Num",
    width: "80",
    textAlign: "center",
  },
  {
    field: "RawName",
    headerText: "Name",
    width: "120",
    textAlign: "center",
  },
  {
    field: "RawQuantity",
    headerText: "Quantity",
    width: "120",
    textAlign: "center",
  },
];

export const invoiceGrid = [
  { type: "checkbox", width: "50" },
  {
    field: "InvoiceID",
    headerText: "Invoice #",
    width: "80",
    textAlign: "Center",
  },
  {
    field: "InvoiceDate",
    headerText: "Date",
    width: "100",
    format: "yMd",
    textAlign: "Center",
  },
  {
    field: "Name",
    headerText: "Name",
    width: "120",
    textAlign: "center",
  },
  {
    field: "Status",
    headerText: "Status",
    width: "100",
    textAlign: "center",
    template: invoiceGridStatus,
  },
];

/* Exporting the data to be used in the grid. */
export const rawMaterialData = [
  { RawNumber: "1", RawName: "Minyak", RawQuantity: "12" },
  { RawNumber: "2", RawName: "Bawang", RawQuantity: "10" },
];

export const invoiceData = [
  {
    InvoiceID: "1",
    Name: "Choice Daily",
    InvoiceDate: "01/02/2020",
    Status: "Paid",
  },
  {
    InvoiceID: "2",
    Name: "Choice Daily",
    InvoiceDate: "01/03/2020",
    Status: "Paid",
  },
  {
    InvoiceID: "3",
    Name: "Choice Daily",
    InvoiceDate: "01/01/2023",
    Status: "Pending",
  },
  {
    InvoiceID: "4",
    Name: "Uncle Cat",
    InvoiceDate: "01/01/2020",
    Status: "Pending",
  },
];
