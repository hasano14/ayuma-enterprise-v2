import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  BarSeries,
  ColumnSeries,
  Category,
  DataLabel,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";

import {
  barCustomSeries,
  areaPrimaryYAxis,
  areaPrimaryXAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="Bar" title="Inflation Rate in Percentage" />
        <ChartComponent
          id="bar-chart"
          height="420px"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#FFFFFF"}
        >
          <Inject
            services={[
              BarSeries,
              DateTime,
              Legend,
              Tooltip,
              Category,
              DataLabel,
              ColumnSeries,
            ]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
