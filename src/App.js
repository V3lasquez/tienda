import React from "react";
import 'boxicons';
import {Header} from "./componentes/Header";
import {BrowserRouter as Router } from 'react-router-dom';
import {Paginas} from "./componentes/Paginas";
import { ProductosLista } from './componentes/Productos';
import {DataProvider} from "./context/Dataprovider"
import {Carrito} from "./componentes/Carrito"

function App() {
  return (
    <DataProvider>
      <div className="App">
      <Router>
        <Header/>
        <Carrito></Carrito>
        <Paginas></Paginas>
        <ProductosLista></ProductosLista>
      </Router> 
    </div>
    </DataProvider>
  );
}

export default App
