import React from "react";
import { Switch, Route, Routes} from "react-router-dom";
import {Inicio} from "./Inicio";
import {ProductosLista} from "./Productos/index";

export const Paginas= () => {
  return (
    <section>
      <Routes>
      
        <Route path="/" exact component={<Inicio></Inicio>}> </Route>
        <Route path="/productos" exact component={ProductosLista}> </Route>
      
      </Routes>
    </section>

  )
}
