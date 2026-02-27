import { BrowserRouter } from "react-router-dom";
import RouteIndex from "./Routes/Routes";
import FloatButton from "./components/FloatButton";
import SEO from "./components/SEO";

function App() {


  return (
    <div>
      <SEO
        title="Mantglo SAS | Mecánica Diésel y Mantenimiento Industrial en Colombia"
        description="Mantglo SAS brinda mecánica diésel, mantenimiento industrial, reparación de maquinaria y asistencia técnica 24/7 en Barranquilla y toda Colombia."
      />
      <BrowserRouter>
        <FloatButton/>
        <RouteIndex/>
      </BrowserRouter>
    </div>
  )
}

export default App
