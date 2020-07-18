import Persona from "./persona";
import { db } from "boot/pouchdb/index";
import Sector from "./sector";

export default class JefeCalle extends Persona {
  constructor(
    nombre,
    apellido,
    cedula,
    telefono,
    fechaNacimiento,
    codigo,
    direccion,
    sector,
    id,
    rev
  ) {
    super(nombre, apellido, cedula, telefono, fechaNacimiento, id, rev);
    this.codigo = codigo;
    this.direccion = direccion;
    if (!!sector) this.sector = sector;
  }
  async getSector() {
    try {
      const resultado = await db.local.rel.find("sector", this.sector);
      if (!!resultado) {
        const sector = new Sector(
          resultado.sectores[0].nombre,
          resultado.sectores[0].estado,
          resultado.sectores[0].municipio,
          resultado.sectores[0].parroquia,
          resultado.sectores[0].nucleos,
          resultado.sectores[0].jefe,
          resultado.sectores[0].id,
          resultado.sectores[0].rev
        );
        return sector;
      } else return null;
    } catch (error) {
      alert("error al encontrar el sector: " + error);
      return null;
    }
  }
}
