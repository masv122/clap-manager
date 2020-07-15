import Integrante from "src/class/integrante";
import Nucleo from "src/class/nucleo";
import JefeCalle from "src/class/jefeCalle";

export function updateAgregarPersona(state) {
  state.agregarPersona = !state.agregarPersona;
}
export function updateDetallesPersona(state) {
  state.detallesPersona = !state.detallesPersona;
}
export function updateModificarPersona(state) {
  state.modificarPersona = !state.modificarPersona;
}
export function updateCargandoPersonas(state) {
  state.cargandoPersonas = !state.cargandoPersonas;
}
export function updateNombre(state, nombre) {
  state.nombre = nombre;
}
export function updateApellido(state, apellido) {
  state.apellido = apellido;
}
export function updateCedula(state, cedula) {
  state.cedula = cedula;
}
export function updateTelefono(state, telefono) {
  state.telefono = telefono;
}
export function updateFechaNacimiento(state, fechaNacimiento) {
  state.fechaNacimiento = fechaNacimiento;
}
export function updateDatosPersonalesInvalidos(
  state,
  datosPersonalesInvalidos
) {
  state.datosPersonalesInvalidos = datosPersonalesInvalidos;
}
export function updateDatosTipoPersonaInvalido(
  state,
  datosTipoPersonaInvalidos
) {
  state.datosTipoPersonaInvalidos = datosTipoPersonaInvalidos;
}
export function updateTipoPersona(state, tipoPersona) {
  state.tipoPersona = tipoPersona;
}
export function updateNombreNucleo(state, nombreNucleo) {
  state.nombreNucleo = nombreNucleo;
}
export function updateCodigo(state, codigo) {
  state.codigo = codigo;
}
export function updateDireccion(state, direccion) {
  state.direccion = direccion;
}
export function updateAgregar(state) {
  state.agregar = !state.agregar;
}
export function updateDetalles(state) {
  state.detalles = !state.detalles;
}
export function updateModificar(state) {
  state.modificar = !state.modificar;
}
export function insertarNucleo(state, data) {
  const nucleo = new Nucleo(
    data.cedula,
    data.nombre,
    data.direccion,
    data.sector,
    data.integrantes,
    data.id,
    data.rev
  );
  state.nucleos.push(nucleo);
}
export function cargarNucleos(state, nucleos) {
  state.nucleos = nucleos;
}
export function updateNucleo(state, nucleo) {
  state.nucleo = nucleo;
}
export function modificarNucleo(state, resultado) {
  state.nucleos[resultado.indice].direccion = resultado.objeto.direccion;
  state.nucleos[resultado.indice].sector = resultado.objeto.sector;
  state.nucleos[resultado.indice].rev = resultado.objeto.rev;
}
export function eliminarIntegrante(state, indice) {
  state.integrantes.splice(indice, 1);
}
export function insertarIntegrante(state, data) {
  const integrante = new Integrante(
    data.nombre,
    data.apellido,
    data.cedula,
    data.telefono,
    data.fechaNacimiento,
    data.nucleo,
    data.id,
    data.rev
  );
  state.integrantes.push(integrante);
}
export function cargarIntegrantes(state, integrantes) {
  state.integrantes = integrantes;
}
export function updateIntegrante(state, integrante) {
  state.integrante = integrante;
}
export function modificarIntegrante(state, resultado) {
  state.integrantes[resultado.indice].nombre = resultado.objeto.nombre;
  state.integrantes[resultado.indice].apellido = resultado.objeto.apellido;
  state.integrantes[resultado.indice].telefono = resultado.objeto.telefono;
  state.integrantes[resultado.indice].nucleo = resultado.objeto.nucleo;
  state.integrantes[resultado.indice].rev = resultado.objeto.rev;
}
export function eliminarJefe(state, indice) {
  state.jefes.splice(indice, 1);
}
export function insertarJefe(state, data) {
  const jefe = new JefeCalle(
    data.nombre,
    data.apellido,
    data.cedula,
    data.telefono,
    data.fechaNacimiento,
    data.codigo,
    data.direccion,
    data.sector,
    data.id,
    data.rev
  );
  state.jefes.push(jefe);
}
export function cargarJefes(state, jefes) {
  state.jefes = jefes;
}
export function updateJefe(state, jefe) {
  state.jefe = jefe;
}
export function updateJefeSector(state, jefe) {
  state.jefeSector = jefe;
}
export function modificarJefe(state, resultado) {
  state.jefes[resultado.indice].nombre = resultado.objeto.nombre;
  state.jefes[resultado.indice].apellido = resultado.objeto.apellido;
  state.jefes[resultado.indice].telefono = resultado.objeto.telefono;
  state.jefes[resultado.indice].fechaNacimiento =
    resultado.objeto.fechaNacimiento;
  state.jefes[resultado.indice].codigo = resultado.objeto.codigo;
  state.jefes[resultado.indice].direccion = resultado.objeto.direccion;
  state.jefes[resultado.indice].sector = resultado.objeto.sector;
  state.jefes[resultado.indice].rev = resultado.objeto.rev;
}
