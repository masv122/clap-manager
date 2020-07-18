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
export function estado(state) {
  return state.estado;
}
export function municipio(state) {
  return state.municipio;
}
export function parroquia(state) {
  return state.parroquia;
}
export function nombre(state) {
  return state.nombre;
}
export function estadoMod(state) {
  return state.estadoMod;
}
export function municipioMod(state) {
  return state.municipioMod;
}
export function parroquiaMod(state) {
  return state.parroquiaMod;
}
export function nombreMod(state) {
  return state.nombreMod;
}
export function datosBasicosSectorInvalidos(state){
  return state.datosBasicosSectorInvalidos
}
export const buscarIndice = state => id => {
  return state.sectores.findIndex(e => e.id === id);
};
export const buscarSector = state => id => {
  return state.sectores.find(e => e.id === id);
};
export function cargandoSectores(state) {
  return state.cargandoSectores;
}
