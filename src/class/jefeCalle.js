import Persona from "./persona";
import { db } from "boot/pouchdb/index";
import Sector from "./sector";

export default class JefeCalle extends Persona {
  constructor(
    nombre,
    apellido,
    telefono,
    fechaNacimiento,
    codigo,
    direccion,
    sector,
    id,
    rev
  ) {
    super(nombre, apellido, telefono, fechaNacimiento, id, rev);
    this.codigo = codigo;
    this.direccion = direccion;
    if (!!sector) this.sector = sector;
    else this.sector = null;
  }
  async getSector() {
    try {
      const resultado = await db.local.rel.find("sector", this.sector);
      const indice = resultado.sectores.findIndex(
        sector => sector.id === this.sector
      );
      if (indice >= 0) {
        const sector = new Sector(
          resultado.sectores[indice].nombre,
          resultado.sectores[indice].estado,
          resultado.sectores[indice].municipio,
          resultado.sectores[indice].parroquia,
          resultado.sectores[indice].nucleos,
          resultado.sectores[indice].jefe,
          resultado.sectores[indice].id,
          resultado.sectores[indice].rev
        );
        return sector;
      } else return null;
    } catch (error) {
      alert("error al encontrar el sector: " + error);
      return null;
    }
  }
}
