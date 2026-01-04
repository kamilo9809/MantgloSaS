import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/errors/NotFound";
import Dashboard from "../pages/private/Dashboard/Dashboard";
import Login from "../pages/public/Login/Login";
import PublicRoute from "./guards/PublicRoute";
import PrivateRoute from "./guards/PrivateRoute";
import Landing from "../pages/public/Landing/Landing";
import Inicio from "../pages/public/Landing/Components/Inicio";
import Servicios from "../pages/public/Landing/Components/Servicios";
import Nosotros from "../pages/public/Landing/Components/Nosotros";
import Contactanos from "../pages/public/Landing/Components/Contactanos";

function RouteIndex() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        {/*public routes*/}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Landing />}>
            <Route index element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contactanos" element={<Contactanos />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Route>
        {/*private routes*/}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RouteIndex;
