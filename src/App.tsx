import { BrowserRouter } from "react-router-dom";
import RouteIndex from "./Routes/Routes";
import FloatButton from "./components/FloatButton";
import SEO from "./components/SEO";

function App() {


  return (
    <div>
      <SEO
        title="Mantglo SAS | Mantenimiento Industrial y Servicios de Grúas"
        description="Mantglo SAS ofrece mantenimiento industrial, grúas y soluciones técnicas en Barranquilla y toda Colombia."
      />
      <BrowserRouter>
        <FloatButton/>
        <RouteIndex/>
      </BrowserRouter>
    </div>
  )
}

export default App