import Base from "./base";
import { db } from "boot/pouchdb/index";
import Nucleo from "./nucleo";

export default class Pago extends Base{
  constructor(monto, banco, estado, fecha, nucleo, id, rev) {
    super(id, rev)
    this.monto = monto;
    this.banco = banco;
    this.estado = estado;
    this.fecha = fecha;
    this.nucleo = nucleo;
  }
  async getNucleo() {
    try {
      const resultado = await db.local.rel.find("nucleo");
      const indice = resultado.nucleos.findIndex(
        nucleo => nucleo.id === this.nucleo
      );
      if (indice >= 0) {
        const nucleo = new Nucleo(
          resultado.nucleos[indice].cedula,
          resultado.nucleos[indice].nombre,
          resultado.nucleos[indice].direccion,
          resultado.nucleos[indice].sector,
          resultado.nucleos[indice].integrantes,
          resultado.nucleos[indice].pagos,
          resultado.nucleos[indice].id,
          resultado.nucleos[indice].rev
        );
        return nucleo;
      } else return null;
    } catch (error) {
      alert("error al obtener el nucleo 101: " + error);
      return null;
    }
  }
}
