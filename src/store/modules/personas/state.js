import { date } from "quasar";
export default function() {
  return {
    agregarPersona: false,
    detallesPersona: false,
    modificarPersona: false,
    nombre: "",
    apellido: "",
    cedula: null,
    telefono: null,
    fechaNacimiento: date.formatDate(Date.now(), "YYYY/MM/DD"),
    datosPersonalesInvalidos: true,
    tipoPersona: null,
    nombreNucleo: "",
    direccion: "",
    datosNucleoInvalidos: true,
    nucleos: [],
    nucleo: {},
    nucleoSel: []
  };
}
