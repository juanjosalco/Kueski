import React from "react";
import "./App.css";
import Dashboard from "./Views/Dashboard";
import Header from "./Components/Header";
import DropdownFilter from "./Components/DropdownFilter";

function App() {
  return (
    <>
      <Header/>
      {/* <DropdownFilter/> */}
      <Dashboard/>
    </>
  );
}

export default App;
