import { date } from "quasar";
export default function() {
  return {
    agregarPersona: false,
    detallesPersona: false,
    modificarPersona: false,
    cargandoPersonas: false,
    nombre: "",
    apellido: "",
    cedula: null,
    telefono: null,
    fechaNacimiento: date.formatDate(Date.now(), "YYYY/MM/DD"),
    datosPersonalesInvalidos: true,
    tipoPersona: null,
    nombreNucleo: "",
    direccion: "",
    codigo: "",
    datosTipoPersonaInvalidos: true,
    integrantes: [],
    integrante: {},
    nucleos: [],
    nucleo: null,
    jefes: [],
    jefeSector: [],
    jefe: null,
  };
}
