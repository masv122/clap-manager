export function agregarPersona(state) {
  return state.agregarPersona;
}
export function detallesPersona(state) {
  return state.detallesPersona;
}
export function modificarPersona(state) {
  return state.modificarPersona;
}
export function nucleos(state) {
  return state.nucleos;
}
export function nucleo(state) {
  return state.nucleo;
}
export function nucleoSel(state) {
  return state.nucleoSel[0];
}
export const buscarIndice = state => id => {
  return state.nucleos.findIndex(e => e.id === id);
};