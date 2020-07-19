import Persona from "./persona";
import { db } from "boot/pouchdb/index";
import Nucleo from "./nucleo";
export default class Integrante extends Persona {
  constructor(nombre, apellido, telefono, fechaNacimiento, nucleo, id, rev) {
    super(nombre, apellido, telefono, fechaNacimiento, id, rev);
    if (!!nucleo) this.nucleo = nucleo;
    else this.nucleo = null;
  }
  async geNucleo() {
    try {
      const result = await db.local.rel.find("nucleo", this.nucleo);
      const indice = result.nucleos.findIndex(
        nucleo => (nucleo.id = this.nucleo)
      );
      if (indice >= 0) {
        const nucleo = new Nucleo(
          result.nucleos[indice].cedula,
          result.nucleos[indice].nombre,
          result.nucleos[indice].direccion,
          result.nucleos[indice].sector,
          result.nucleos[indice].integrantes,
          result.nucleos[indice].id,
          result.nucleos[indice].rev
        );
        return nucleo;
      } else return null;
    } catch (error) {
      alert("error al obtener el nucleo 101: " + error);
      return null;
    }
  }
}
