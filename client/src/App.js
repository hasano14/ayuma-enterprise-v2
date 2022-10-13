import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Home,
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Line,
  Editor,
  ColorPicker,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";
import Invoice from "./pages/Invoice";
import Billing from "./pages/Billing";
import RawMaterial from "./pages/RawMaterial";
import Packaging from "./pages/Packaging";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" syle={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72 " : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Dashboard */}
                {/* <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

                {/* Pages */}
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/billing" element={<Billing />} />
                <Route path="/Raw-Materials" element={<RawMaterial />} />
                <Route path="/packaging" element={<Packaging />} />
                {/* <Route path="/summary" element={<Summary />} */}

                {/* Sample Pages */}
                {/* <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} /> */}

                {/* Apps */}
                {/* <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} /> */}

                {/* Charts */}
                {/* <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
