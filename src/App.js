import React from "react";
import Navbar from "./Components/Navbar";
import Agregar from "./HOC/Agregar";


export default function App() {

  return (
    <>
      {/* PRUEBA HOC SOLO POR SI QUIEREN JUGAR CON EL CONCEPTO
      <Agregar>
        <Navbar />
      </Agregar> */}

      <Navbar />
    </>
  );
}