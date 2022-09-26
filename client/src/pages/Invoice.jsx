import React from "react";
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

import { invoiceGrid, invoiceData } from "../data/myDummy";

import { Header } from "../components";

const Invoice = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Invoice" />
      <GridComponent
        id="gridcomp"
        dataSource={invoiceData}
        allowPaging
        allowSorting
        editSettings={{ allowDeleting: true, allowEditing: true }}
        toolbar={["Search", "Delete"]}
      >
        <ColumnsDirective>
          {invoiceGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
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
  );
};

export default Invoice;
