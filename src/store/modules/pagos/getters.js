export function agregarPago(state) {
  return state.agregarPago;
}
export function modificarPago(state) {
  return state.modificarPago;
}
export function detallesPago(state) {
  return state.detallesPago;
}
export function pagos(state) {
  return state.pagos;
}
export function pago(state) {
  return state.pago;
}
export function monto(state) {
  return state.monto;
}
export function banco(state) {
  return state.banco;
}
export function estado(state) {
  return state.estado;
}
export function fecha(state) {
  return state.fecha;
}
export function nucleo(state) {
  return state.nucleo;
}
export function referencia(state) {
  return state.referencia;
}
export function estadoMod(state) {
  return state.estadoMod;
}
export function datosBasicosPagoInvalidos(state) {
  return state.datosBasicosPagoInvalidos;
}
export const buscarIndice = state => id => {
  return state.pagos.findIndex(e => e.id === id);
}
export const buscarPago = state => id => {
  return state.pagos.find(e => e.id === id);
}
export function cargandoPagos(state) {
  return state.cargandoPagos;
}
export function formularioPagoInvalido(state) {
  return state.formularioPagoInvalido;
}
export function formularioModificarPagoInvalido(state) {
  return state.formularioModificarPagoInvalido;
}
