export function agregar(state) {
  return state.agregar;
}
export function detalles(state) {
  return state.detalles;
}
export function modificar(state) {
  return state.modificar;
}
export function sectores(state) {
  return state.sectores;
}
export function sector(state) {
  return state.sector;
}
export function sectorSel(state) {
  return state.sectorSel;
}
export const buscarIndice = (state) => (id) => {
  return state.sectores.findIndex(e => e.id === id);
}
export function cargandoSectores(state) {
  return state.cargandoSectores;
}