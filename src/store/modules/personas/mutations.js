export function updateAgregarPersona(state) {
  state.agregarPersona = !state.agregarPersona;
}
export function updateDetallesPersona(state) {
  state.detallesPersona = !state.detallesPersona;
}
export function updateModificarPersona(state) {
  state.modificarPersona = !state.modificarPersona;
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
export function updateDatosNucleoInvalidos(
  state,
  datosNucleoInvalidos
) {
  state.datosNucleoInvalidos = datosNucleoInvalidos;
}
export function updateTipoPersona(state, tipoPersona) {
  state.tipoPersona = tipoPersona;
}
export function updateNombreNucleo(state, nombreNucleo) {
  state.nombreNucleo = nombreNucleo;
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
export function insertarNucleo(state, nucleo) {
  state.nucleos.push(nucleo);
}
export function cargarNucleos(state, nucleos) {
  state.nucleos = nucleos;
}
export function updateNucleo(state, nucleo) {
  state.nucleo = nucleo;
}
export function updateNucleoSel(state, nucleo) {
  state.nucleoSel = nucleo;
}
export function modificarNucleo(state, resultado) {
  state.nucleos[resultado.indice].direccion = resultado.objeto.direccion;
  state.nucleos[resultado.indice].sector = resultado.objeto.sector;
  state.nucleos[resultado.indice].rev = resultado.objeto.rev;
}
export function eliminarIntegrante(state, indice) {
  state.integrantes.splice(indice, 1);
}
export function insertarIntegrante(state, integrante) {
  state.integrantes.push(integrante);
}
export function cargarIntegrantes(state, integrantes) {
  state.integrantes = integrantes;
}
export function updateIntegrante(state, integrante) {
  state.integrante = integrante;
}
export function updateIntegranteSel(state, integrante) {
  state.integranteSel = integrante;
}
export function modificarIntegrante(state, resultado) {
  state.integrantes[resultado.indice].nombre = resultado.objeto.nombre;
  state.integrantes[resultado.indice].apellido = resultado.objeto.apellido;
  state.integrantes[resultado.indice].telefono = resultado.objeto.telefono;
  state.integrantes[resultado.indice].nucleo = resultado.objeto.nucleo;
  state.integrantes[resultado.indice].rev = resultado.objeto.rev;
}
