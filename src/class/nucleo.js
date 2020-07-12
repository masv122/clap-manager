import Base from "./base";
import { db } from "boot/pouchdb/index";
import Sector from "src/class/sector";

export default class Nucleo extends Base {
  constructor(cedula, nombre, direccion, sector, integrantes, id, rev) {
    super(id, rev);
    this.cedula = cedula;
    this.nombre = nombre;
    this.direccion = direccion;
    this.sector = sector;
    if (!!integrantes) this.integrantes = integrantes;
    else this.integrantes = [];
  }
  agregarIntegrante(id) {
    this.integrantes.push(id);
  }
  async getSector() {
    try {
      const resultado = await db.local.rel.find("sector", this.sector);
      console.log(this.sector);
      console.log(resultado);
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
