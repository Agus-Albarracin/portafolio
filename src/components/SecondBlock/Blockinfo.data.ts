import { blockinfo } from "./Blockinfo.type";

export const blockinfodata: blockinfo = [
  {
    id: 1,
    icon: "front",
    title: "Front End",
    description:"Manejo todos los hooks desde React v16 a v19: rutas, estados, efectos, memo, referencias y contexto. Uso styled-components para estilos y combino librerías según la necesidad del cliente."
  },
  {
    id: 2,
    icon: "back",
    title: "Back End",
    description:
      "Desarrollo APIs REST, gestiono rutas, middlewares y lógica de negocio con Express y MongoDB. Implemento estructuras limpias, control de errores y validación.",
  },
  {
    id: 3,
    icon: "ops",
    title: "Dev Ops",
    description:
      "Contenerizo apps con Docker asegurando portabilidad. Configuro Nginx como proxy inverso y balanceador. Automatizo procesos para mejorar despliegues y mantener entornos.",
  },
];
