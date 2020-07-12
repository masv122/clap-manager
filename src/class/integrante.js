import Persona from "./persona";
import { db } from "boot/pouchdb/index";
import Nucleo from "./nucleo";
export default class Integrante extends Persona {
  constructor(
    nombre,
    apellido,
    cedula,
    telefono,
    fechaNacimiento,
    nucleo,
    id,
    rev
  ) {
    super(nombre, apellido, cedula, telefono, fechaNacimiento, id, rev);
    if (!!nucleo) this.nucleo = nucleo;
  }
  async geNucleo() {
    try {
      const result = await db.local.rel.find("nucleo", this.nucleo);
      if (!!result) {
        const nucleo = new Nucleo(
          result.nucleos[0].cedula,
          result.nucleos[0].nombre,
          result.nucleos[0].direccion,
          result.nucleos[0].sector,
          result.nucleos[0].integrantes,
          result.nucleos[0].id,
          result.nucleos[0].rev
        );
        return nucleo;
      } else return null;
    } catch (error) {
      alert(error);
      return null;
    }
  }
}
