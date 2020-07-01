export default class Pago {
  constructor(monto, referencia, banco, estado, fecha, nucleo) {
    this.monto = monto;
    this.referencia = referencia;
    this.banco = banco;
    this.estado = estado;
    this.fecha = fecha;
    this.nucleo = nucleo;
  }
}
