import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/errors/NotFound";
import PublicRoute from "./guards/PublicRoute";
import PrivateRoute from "./guards/PrivateRoute";

const Dashboard = lazy(() => import("../pages/private/Dashboard/Dashboard"));
const Login = lazy(() => import("../pages/public/Login/Login"));
const Landing = lazy(() => import("../pages/public/Landing/Landing"));
const Inicio = lazy(() => import("../pages/public/Landing/Components/Inicio"));
const Servicios = lazy(() => import("../pages/public/Landing/Components/Servicios"));
const Nosotros = lazy(() => import("../pages/public/Landing/Components/Nosotros"));
const Contactanos = lazy(() => import("../pages/public/Landing/Components/Contactanos"));

function RouteIndex() {
  return (
    <div>
      <Suspense fallback={<div className="p-6 text-center">Cargando...</div>}>
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
      </Suspense>
    </div>
  );
}

export default RouteIndex;
