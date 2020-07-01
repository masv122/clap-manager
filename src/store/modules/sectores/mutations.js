export function updateAgregarSector(state) {
  state.agregarSector = !state.agregarSector;
}
export function updateDetallesSector(state) {
  state.detallesSector = !state.detallesSector;
}
export function updateModificarSector(state) {
  state.modificarSector = !state.modificarSector;
}
export function guardarSector(state, sector) {
  state.sectores.push(sector);
}
export function cargarSectores(state, sectores){
  state.sectores = sectores;
}
export function updateSector(state, sector) {
  state.sector = sector;
}