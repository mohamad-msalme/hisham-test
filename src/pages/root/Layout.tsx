import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@src/components/Header";

/**
 * The `Root` function is a React functional component that renders a layout with a header and a
 * content area wrapped in a container with specific styling.
 * @returns A functional component named Root is being returned. It contains a div element with the
 * class "flex flex-col space-y-4", which includes a Header component and another div element with the
 * class "overflow-y-auto min-h-[85vh] shadow-lg ring-2 ring-gray-100 rounded-md p-8 w-[90%] m-auto"
 * that wraps around the Outlet component.
 */
const Root: React.FC = () => {
  return (
    <div className=" flex flex-col space-y-4">
      <Header />
      <div className=" overflow-y-auto min-h-[85vh] shadow-lg ring-2 ring-gray-100 rounded-md p-8 w-[90%] m-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
