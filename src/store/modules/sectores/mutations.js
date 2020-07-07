export function updateAgregar(state) {
  state.agregar = !state.agregar;
}
export function updateDetalles(state) {
  state.detalles = !state.detalles;
}
export function updateModificar(state) {
  state.modificar = !state.modificar;
}
export function insertarSector(state, sector) {
  state.sectores.push(sector);
}
export function cargarSectores(state, sectores) {
  state.sectores = sectores;
}
export function updateSector(state, sector) {
  state.sector = sector;
}
export function updateSectorSel(state, sector) {
  state.sectorSel = sector;
}
export function modificarSector(state, resultado) {
  state.sectores[resultado.indice].nombre = resultado.objeto.nombre;
  state.sectores[resultado.indice].estado = resultado.objeto.estado;
  state.sectores[resultado.indice].municipio = resultado.objeto.municipio;
  state.sectores[resultado.indice].parroquia = resultado.objeto.parroquia;
  state.sectores[resultado.indice].rev = resultado.objeto.rev;
}
export function eliminarSector(state, indice) {
  state.sectores.splice(indice, 1);
}
export function updateCargandoSectores(state) {
  state.cargandoSectores = state.cargandoSectores;
}
