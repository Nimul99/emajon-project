import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className=" bg-primary text-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-24 w-24" src={logo} alt="Workflow" />
          </div>

          <div className="ml-10 flex items-baseline space-x-4">
            <a
              href="#"
              className=" text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Order
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Order Review
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Manage Inventory
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
