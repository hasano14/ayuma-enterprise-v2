import React, { useState, useEffect } from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

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

import { Header } from "../components";

const RawMaterial = () => {
  const { currentColor } = useStateContext();
  const [rawMaterialData, setRawMaterialData] = useState([]);

  const [hideDialog, setHideDialog] = useState(false);
  // let dateValue = new Date();

  useEffect(() => {
    async function getRawMaterialData() {
      const response = await fetch(`http://localhost:5000/rawMaterialData/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const rawMaterialData = await response.json();
      setRawMaterialData(rawMaterialData);
    }
    getRawMaterialData();
  }, [rawMaterialData.length]);

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Inventory" title="Raw Materials" />
        {hideDialog ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none transition-all duration-200">
              {/* Content */}
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/* Header */}
                  <div className="flex items-start justify-between p-5">
                    <h3 className="text-4xl font-semibold">Add Material</h3>
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
                    <form id="formid" className="w-full max-w-sm">
                      {/* Name */}
                      <div className="md:flex md:items-center mb-7">
                        <div className="md:w-2/3">
                          <label class="text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Name
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white transition-colors"
                            id="materialName"
                            type="text"
                          />
                        </div>
                      </div>
                      {/* Added Date */}
                      {/* <div className="md:flex md:items-center mb-7">
                        <div className="md:w-2/3">
                          <label class="text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Bought Date
                          </label>
                        </div>
                        <div className="md:w-2/3 border-2 border-gray-200 rounded w-full bg-gray-200 pt-1 pl-2">
                          <DatePickerComponent
                            value={dateValue}
                            format="dd-MMM-yy"
                          ></DatePickerComponent>
                        </div>
                      </div> */}
                      {/* Quantity */}
                      <div className="md:flex md:items-center mb-7">
                        <div className="md:w-2/3">
                          <label class="text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Quantity
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white transition-colors"
                            id="materialQuantity"
                            type="text"
                          />
                        </div>
                      </div>
                      {/* Status */}
                      {/* <div className="md:flex md:items-center mb-7">
                        <div className="md:w-2/3">
                          <label class="text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Status
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <select className="bg-gray-200 w-full p-2 text-gray-700 border rounded-md shadow-sm outline-none focus:outline-none focus:bg-white transition-colors">
                            <option>Paid</option>
                            <option>Pending</option>
                          </select>
                        </div>
                      </div> */}
                    </form>
                  </div>
                  <div className="flex items-center justify-end p-6 rounded-sm">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setHideDialog(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setHideDialog(false)}
                    >
                      Save Changes
                    </button>
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
            className="text-md font-medium p-3 hover:drop-shadow-md my-2 uppercase"
            onClick={() => setHideDialog(!hideDialog)}
          >
            Add Material
          </button>
        </div>
        <GridComponent
          dataSource={rawMaterialData}
          id="gridcomp"
          allowPaging
          allowSorting
          editSettings={{ allowDeleting: true, allowEditing: true }}
          toolbar={["Search", "Delete"]}
        >
          <ColumnsDirective>
            <ColumnDirective type="checkbox" width="60"></ColumnDirective>
            <ColumnDirective field="name" headerText="Name"></ColumnDirective>
            <ColumnDirective
              field="quantityNumber"
              headerText="Quantity"
            ></ColumnDirective>
            <ColumnDirective field="unit" headerText="Unit"></ColumnDirective>
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

export default RawMaterial;
