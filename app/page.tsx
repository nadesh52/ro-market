"use client";
import React from "react";
import ItemTable from "./components/ItemTable";
import HeaderMenu from "./components/header/HeaderMenu";
import TableFoot from "./components/TableFoot";

const Home = () => {
  return (
    <div className="relative">
      <HeaderMenu />
      <ItemTable />
      <TableFoot />
    </div>
  );
};

export default Home;
