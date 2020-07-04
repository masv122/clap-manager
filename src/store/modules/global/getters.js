export function confirmacionEliminacion(state) {
  return state.confirmacionEliminacion;
}
export function leftDrawer(state) {
  return state.leftDrawer;
}
export function rightDrawer(state) {
  return state.rightDrawer;
}
export function estados(state) {
  return state.estados;
}
export function municipios(state) {
  return state.municipios;
}
export const municipiosEnEstado = (state) => (id) => {
  return state.municipios.filter(v => v.id_estado === id);
}
export function parroquias(state) {
  return state.parroquias;
}
export const parroquiasEnMunicipio = (state) => (id) => {
  return state.parroquias.filter(v => v.id_municipio === id);
}
export function bancos(state) {
  return state.bancos;
}
export const estadoPorNombre = (state) => (nombre) => {
  return state.estados.find( e => e.nombre === nombre);
}
export const municipioPorNombre = (state) => (nombre) => {
  return state.municipios.find( e => e.nombre === nombre);
}
export const parroquiasPorNombre = (state) => (nombre) => {
  return state.parroquias.find( e => e.nombre === nombre);
}