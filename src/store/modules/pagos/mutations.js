import Pago from "src/class/pago";
export function updateAgregarPago(state) {
  state.agregarPago = !state.agregarPago;
}
export function updateModificarPago(state) {
  state.modificarPago = !state.modificarPago;
}
export function updateDetallesPago(state) {
  state.detallesPago = !state.detallesPago;
}
export function updateMonto(state, value) {
  state.monto = value;
}
export function updateBanco(state, value) {
  state.banco = value;
}
export function updateEstado(state, value) {
  state.estado = value;
}
export function updateFecha(state, value) {
  state.fecha = value;
}
export function updateReferencia(state, value) {
  state.referencia = value;
}
export function updateDatosBasicosPagoInvalidos(state, value) {
  state.datosBasicosPagoInvalidos = value;
}
export function insertarPago(state, data) {
  const pago = new Pago(
    data.monto,
    data.banco,
    data.estado,
    data.fecha,
    data.nucleo,
    data.id,
    data.rev
  );
  state.pagos.push(pago);
}
export function cargarPagos(state, pagos) {
  state.pagos = pagos;
}
export function updatePago(state, pago) {
  state.pago = pago;
}
export function modificarPago(state, data) {
  state.pagos[data.indice].monto = data.objeto.monto;
  state.pagos[data.indice].banco = data.objeto.banco;
  state.pagos[data.indice].estado = data.objeto.estado;
  state.pagos[data.indice].fecha = data.objeto.fecha;
  state.pagos[data.indice].nucleo = data.objeto.nucleo;
  state.pagos[data.indice].id = data.objeto.id;
  state.pagos[data.indice].rev = data.objeto.rev;
}
export function eliminarPago(state, indice) {
  state.pagos.splice(indice, 1);
}
export function updateCargandoPagos(state) {
  state.cargandoPagos = state.cargandoPagos;
}
export function updateFormularioPagoInvalido(state, value) {
  state.formularioPagoInvalido = value;
}
export function updateFormularioModificarPagoInvalido(state, value) {
  state.formularioModificarPagoInvalido = value;
}