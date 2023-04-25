import React from "react";
import "./App.css";
import Dashboard from "./Views/Dashboard";
import Header from "./Components/Header";
import Oposicion from "./Components/Oposicion.jsx";

function App() {
  return (
    <>
      <Oposicion/>
      <Header/>
      <Dashboard/>
    </>
  );
}

export default App;
