import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import IniciarSesion from "./routes/IniciarSesion";
import AuxilioMecanico from "./routes/AuxilioMecanico";
import TallerMultimarca from "./routes/TallerMultimarca";
import Repuestos from "./pages/repuestos/Repuestos";
import Courier from "./routes/Courier";
import Taller from "./pages/taller/Taller";
import AgendamientoCitas from "./pages/agendamiento/AgendamientoCitas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/inicio_sesión" element={<IniciarSesion/>}/>
        <Route path="/auxilio mecánico" element={<AuxilioMecanico/>}/>
        <Route path="/taller" element={<Taller/>}/>
        <Route path="/courier" element={<Courier/>}/>
        <Route path="/repuestos" element={<Repuestos/>}/>
        <Route path="/agendamiento_citas" element={<AgendamientoCitas/>}/>
      </Routes>
    </BrowserRouter>
 
  </React.StrictMode>
);
reportWebVitals();
