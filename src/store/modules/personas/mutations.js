export function updateAgregarPersona(state) {
  state.agregarPersona = !state.agregarPersona;
}
export function updateDetallesPersona(state) {
  state.detallesPersona = !state.detallesPersona;
}
export function updateModificarPersona(state) {
  state.modificarPersona = !state.modificarPersona;
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
  state.nucleos[resultado.indice].nombre = resultado.nucleo.nombre;
  state.nucleos[resultado.indice].estado = resultado.nucleo.estado;
  state.nucleos[resultado.indice].municipio = resultado.nucleo.municipio;
  state.nucleos[resultado.indice].parroquia = resultado.nucleo.parroquia;
  state.nucleos[resultado.indice].rev = resultado.nucleo.rev;
}
export function eliminarNucleo(state, indice) {
  state.nucleos.splice(indice, 1);
}
