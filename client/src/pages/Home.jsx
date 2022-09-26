import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Search,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { earningData } from "../data/dummy";
import { invoiceGrid, invoiceData } from "../data/myDummy";

const Home = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-96 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Something</p>
              <p className="text-2xl">Something</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download Report"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:flex md:flex-wrap justify-center">
        <div className="bg-white m-3 p-4 rounded-2xl lg:w-fit">
          <p className="font-semibold text-xl m-3">Invoice Updates</p>
          <GridComponent
            id="gridcomp"
            dataSource={invoiceData}
            allowPaging
            allowSorting
            toolbar={["Search"]}
            width="auto"
          >
            <ColumnsDirective>
              {invoiceGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Page, Search, Toolbar, Sort]} />
          </GridComponent>
        </div>
      </div>
    </div>
  );
};

export default Home;
