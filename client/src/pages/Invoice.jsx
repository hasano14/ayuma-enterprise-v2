// Todo: Make the date able to be put in the database
import React, { useState, useEffect } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Moment from "moment";
import { BsTrash } from "react-icons/bs";

import { useStateContext } from "../contexts/ContextProvider";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  Search,
  Selection,
  ContextMenu,
  Filter,
  Page,
  Edit,
  Inject,
  ExcelExport,
  PdfExport,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

// import { invoiceGrid, invoiceData } from "../data/myDummy";

import { Header } from "../components";

const Invoice = () => {
  const { currentColor } = useStateContext();

  const [records, setRecords] = useState([]);
  const [invoiceData, setInvoiceData] = useState([]);

  const [invoiceForm, setInvoiceForm] = useState([
    {
      InvoiceNumber: "Something",
      Name: "",
      InvoiceDate: "",
      Status: "",
    },
  ]);

  const [hideDialog, setHideDialog] = useState(false);

  /**
   * This function takes in a prop called Status and returns a div with a background color of #FEC90F
   * if the Status prop is equal to Pending, otherwise it returns a background color of #8BE78B.
   */
  const invoiceGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
      <p
        style={{
          background: props.Status === "Pending" ? "#FEC90F" : "#8BE78B",
        }}
        className="rounded-full h-3 w-3"
      />
      <p>{props.Status}</p>
    </div>
  );

  //Getting Invoice Data
  useEffect(() => {
    async function getInvoiceData() {
      const response = await fetch(`http://localhost:5000/invoiceData/`);
      if (!response.ok) {
        const message = `An error occurred (B): ${response.statusText}`;
        window.alert(message);
        return;
      }
      const invoiceData = await response.json();
      setInvoiceData(invoiceData);
    }
    getInvoiceData();
  }, [invoiceData.length]);

  //Updating Invoice Data
  function updateInvoice(value) {
    return setInvoiceForm((prev) => {
      return { ...prev, ...value };
    });
  }

  /* Sending a POST request to the server. */
  async function onSubmitInvoice(e) {
    e.preventDefault();
    const newInvoice = { ...invoiceForm };
    const response = await fetch("http://localhost:5000/invoiceData/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInvoice),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    if (response.status === 200) {
      window.alert("Record Added");
      setHideDialog(false);
    } else {
      window.alert("Failed");
    }
  }

  const dataManager = new DataManager({
    adaptor: new UrlAdaptor(),
    // removeUrl: `http://localhost:5000/${id}`,
    url: "http://localhost:5000/invoiceData/",
  });
  async function deleteRecord(id) {
    console.log(id);
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  const testing = (props) => {
    console.log("Testing", props);
  };
  const deleteInvoice = (props) => {
    const deleteID = props._id;
    return (
      <button onClick={testing(deleteID)}>
        <BsTrash onClick={testing(deleteID)} />
      </button>
    );
  };
  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Cash Flow" title="Invoice" />
        {hideDialog ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none transition-all duration-200">
              {/* Content */}
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/* Header */}
                  <div className="flex items-start justify-between p-5">
                    <h3 className="text-4xl font-semibold">Add Invoice</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setHideDialog(false)}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                      </span>
                    </button>
                  </div>
                  {/* Body */}
                  <div id="formComponents" className="relative p-6 flex-auto">
                    <form
                      id="formid"
                      className="w-full max-w-sm"
                      onSubmit={onSubmitInvoice}
                    >
                      {/* Invoice Number */}
                      <div className="md:flex md:items-center mb-7">
                        <div className="md:w-2/3">
                          <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Invoice Number
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white transition-colors"
                            id="invoiceNumber"
                            type="text"
                            onChange={(e) =>
                              updateInvoice({ InvoiceNumber: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      {/* Invoice Date */}
                      <div className="md:flex md:items-center mb-7">
                        <div className="md:w-2/3">
                          <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Invoice Date
                          </label>
                        </div>
                        <Calendar
                          onChange={(e) => {
                            Moment.locale("en");
                            const dt = e;
                            updateInvoice({
                              InvoiceDate: Moment(dt).format("DD/MM/YYYY"),
                            });
                          }}
                        />
                      </div>
                      {/* Company Name */}
                      <div className="md:flex md:items-center mb-7">
                        <div className="md:w-2/3">
                          <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Company Name
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white transition-colors"
                            id="companyName"
                            type="text"
                            onChange={(e) =>
                              updateInvoice({ Name: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      {/* Status */}
                      <div className="md:flex md:items-center mb-7">
                        <div className="md:w-2/3">
                          <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Status
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <select
                            className="bg-gray-200 w-full p-2 text-gray-700 border rounded-md shadow-sm outline-none focus:outline-none focus:bg-white transition-colors"
                            id="InvoiceStatus"
                            defaultValue="Select status"
                            onChange={(e) =>
                              updateInvoice({ Status: e.target.value })
                            }
                          >
                            <option disabled>Select status</option>
                            <option value="Paid">Paid</option>
                            <option value="Pending">Pending</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-6 rounded-sm">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setHideDialog(false)}
                        >
                          Close
                        </button>
                        <input
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                          value="Add Invoice"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        ) : null}
        <div id="dialog-target" className="App">
          <button
            type="button"
            style={{
              backgroundColor: currentColor,
              color: "white",
              borderRadius: "8px",
            }}
            className="text-md p-3 hover:drop-shadow-md my-2 uppercase font-medium"
            onClick={() => setHideDialog(!hideDialog)}
          >
            Add Invoice
          </button>
        </div>

        <GridComponent
          dataSource={invoiceData}
          id="gridcomp"
          allowPaging
          allowSorting
          editSettings={{
            allowDeleting: true,
            allowEditing: true,
          }}
          toolbar={["Search", "Delete"]}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="_id"
              headerText=""
              width="0"
            ></ColumnDirective>
            <ColumnDirective
              field="InvoiceNumber"
              headerText="Invoice Number"
              textAlign="Left"
            ></ColumnDirective>
            <ColumnDirective
              field="InvoiceDate"
              headerText="Date"
              textAlign="Center"
            ></ColumnDirective>
            <ColumnDirective
              field="Name"
              headerText="Name"
              textAlign="Center"
            ></ColumnDirective>
            <ColumnDirective
              field="Status"
              headerText="Status"
              textAlign="Center"
              template={invoiceGridStatus}
            ></ColumnDirective>
            <ColumnDirective
              field="Delete"
              headerText=""
              allowSorting={false}
              allowEditing={false}
              template={deleteInvoice}
            ></ColumnDirective>
          </ColumnsDirective>
          <Inject
            services={[
              Selection,
              Resize,
              Search,
              Toolbar,
              Sort,
              ContextMenu,
              Filter,
              Page,
              ExcelExport,
              PdfExport,
              Edit,
            ]}
          />
        </GridComponent>
      </div>
    </>
  );
};

export default Invoice;
