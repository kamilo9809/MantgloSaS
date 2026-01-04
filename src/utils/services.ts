import {
  Droplets,
  Cog,
  Construction,
  Truck,
  Fuel,
  Battery,
} from "lucide-react";
import React from "react";
import maquinaria from "../assets/maquinariapesada.png";
import electricidad from "../assets/electricidadbaterias.png";

const servicios = [
  {
    categoria: "Hidráulica",
    icon: (props?: React.ComponentProps<'svg'>) =>
      React.createElement(Droplets, {
        ...props,
        className:
          "w-8 h-8 text-yellow-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300",
      }),
    bg: "https://cdn.pixabay.com/photo/2019/08/25/09/17/piling-rig-4429049_960_720.jpg",
    items: [
      "Diagnóstico hidráulico: inspección de fugas y presión",
      "Reparación de bombas de alto caudal",
      "Cambio de mangueras y cilindros",
      "Mantenimiento de filtros y válvulas",
    ],
    message: "Hola estoy interesado en cotizar un servicio con Hidráulica gracias",
  },
  {
    categoria: "Motores Diésel",
    icon: (props?: React.ComponentProps<'svg'>) =>
      React.createElement(Cog, {
        ...props,
        className:
          "w-8 h-8 text-yellow-400 group-hover:rotate-180 transition-transform duration-500",
      }),
    bg: "https://cdn.pixabay.com/photo/2018/01/27/21/29/motor-3112231_960_720.jpg",
    items: [
      "Diagnóstico computarizado",
      "Reparación integral de motores",
      "Sistemas de inyección y calibración",
      "Turbos y culatas",
    ],
    message: "Hola estoy interesado en cotizar un servicio con Motores Diésel gracias",
  },
  {
    categoria: "Maquinaria Pesada",
    icon: (props?: React.ComponentProps<'svg'>) =>
      React.createElement(Construction, {
        ...props,
        className:
          "w-8 h-8 text-yellow-400 group-hover:translate-y-1 group-hover:scale-110 transition-transform duration-300",
      }),
    bg: `${maquinaria}`,
    items: [
      "Grúas y telehandlers",
      "Bulldozers y retroexcavadoras",
      "Cargadores frontales",
      "Compactadores y rodillos",
    ],
    message: "Hola estoy interesado en cotizar un servicio con Maquinaria Pesada gracias",
  },
  {
    categoria: "Transporte Pesado",
    icon: (props?: React.ComponentProps<'svg'>) =>
      React.createElement(Truck, {
        ...props,
        className:
          "w-8 h-8 text-yellow-400 group-hover:translate-x-2 transition-transform duration-300",
      }),
    bg: "https://cdn.pixabay.com/photo/2020/10/30/15/33/truck-5698898_960_720.jpg",
    items: [
      "Mantenimiento de camiones y tractomulas",
      "Sistemas de freno de aire",
      "Revisión eléctrico y electrónico",
      "Reparación de transmisiones automáticas",
    ],
    message: "Hola estoy interesado en cotizar un servicio con Transporte Pesado gracias",
  },
  {
    categoria: "Combustible",
    icon: (props?: React.ComponentProps<'svg'>) =>
      React.createElement(Fuel, {
        ...props,
        className:
          "w-8 h-8 text-yellow-400 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300",
      }),
    bg: "https://cdn.pixabay.com/photo/2019/09/13/18/21/gasoline-canister-4474606_960_720.jpg",
    items: [
      "Limpieza de tanques",
      "Reparación de bombas de combustible",
      "Revisión de líneas de inyección",
    ],
    message: "Hola estoy interesado en cotizar un servicio con Combustible gracias",
  },
  {
    categoria: "Electricidad y Baterías",
    icon: (props?: React.ComponentProps<'svg'>) =>
      React.createElement(Battery, {
        ...props,
        className:
          "w-8 h-8 text-yellow-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300",
      }),
    bg: `${electricidad}`,
    items: [
      "Sistemas eléctricos completos",
      "Pruebas y reemplazo de baterías",
      "Luces y accesorios auxiliares",
    ],
    message: "Hola estoy interesado en cotizar un servicio con Electricidad y Baterías gracias",
  },
];

export { servicios };