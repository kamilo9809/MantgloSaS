import { servicios } from "../../../../utils/services";

function Servicios() {
  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <h2 className="relative text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-10 sm:mb-16 px-4">
        <span className="relative z-10 px-4 sm:px-6 py-2 bg-white">
          Nuestros <span className="text-yellow-500">Servicios</span>
        </span>
        {/* Línea izquierda */}
        <span className="absolute top-1/2 left-0 w-1/5 sm:w-1/4 h-1 bg-yellow-400"></span>
        {/* Línea derecha */}
        <span className="absolute top-1/2 right-0 w-1/5 sm:w-1/4 h-1 bg-yellow-400"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-4 sm:px-6 lg:px-12">
        {servicios.map((srv, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-md sm:shadow-lg group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-yellow-400"
          >
            {/* Imagen */}
            <div
              className="h-48 sm:h-60 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${srv.bg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-yellow-600/50 group-hover:via-yellow-400/20 group-hover:to-transparent transition-colors flex items-center justify-center">
                <div className="flex items-center gap-2 sm:gap-3 text-white drop-shadow-lg px-2 text-center">
                  {<srv.icon />}
                  <h3 className="text-lg sm:text-xl font-bold">
                    {srv.categoria}
                  </h3>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="bg-white p-4 sm:p-6 space-y-2 sm:space-y-3">
              {srv.items.map((item, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 text-sm sm:text-base border-l-4 border-yellow-400 pl-2"
                >
                  {item}
                </p>
              ))}
              <button
                onClick={() => {
                  const phone = "573135843579";
                  const url = `https://wa.me/${phone}?text=${encodeURIComponent(
                    srv.message
                  )}`;
                  window.open(url, "_blank");
                }}
                className="mt-3 sm:mt-4 w-full bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm sm:text-base"
              >
                Solicitar servicio
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
