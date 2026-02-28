import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteIndex from "./Routes/Routes";
import SEO from "./components/SEO";
import Analytics from "./components/Analytics";
import heroImage from "./assets/image 3.webp";

const FloatButton = lazy(() => import("./components/FloatButton"));

function App() {
  return (
    <div>
      <SEO
        title="Mantglo SAS | Mecánica Diésel y Mantenimiento Industrial en Colombia"
        description="Mantglo SAS brinda mecánica diésel, mantenimiento industrial, reparación de maquinaria y asistencia técnica 24/7 en Barranquilla y toda Colombia."
        preloadImage={heroImage}
      />
      <Analytics />
      <BrowserRouter>
        <Suspense fallback={null}>
          <FloatButton />
        </Suspense>
        <RouteIndex />
      </BrowserRouter>
    </div>
  );
}

export default App;
