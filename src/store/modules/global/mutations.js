export function updateConfirmacionEliminacion(state) {
  state.confirmacionEliminacion = !state.confirmacionEliminacion;
}
export function updateLeftDrawer(state) {
  state.leftDrawer = !state.leftDrawer;
}
export function updateRightDrawer(state) {
  state.rightDrawer = !state.rightDrawer;
}
export function updateEstados(state, value) {
  state.estados = value;
}
export function updateMunicipios(state, value) {
  state.municipios = value;
}
export function updateParroquias(state, value) {
  state.parroquias = value;
}
export function updateBancos(state, value) {
  state.bancos = value;
}
