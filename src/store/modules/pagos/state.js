export default function() {
  return {
    agregarPago: false,
    modificarPago: false,
    detallesPago: false,
    pagos: [],
    pago: null,
    monto: 0,
    banco: null,
    estado: "pendiente",
    fecha: "",
    referencia: "",
    datosBasicosPagoInvalidos: true,
    cargandoPagos: false,
    formularioPagoInvalido: true,
    formularioModificarPagoInvalido: true,
  };
}
