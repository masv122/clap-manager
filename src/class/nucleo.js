import Base from "./base";
import { db } from "boot/pouchdb/index";
import Sector from "src/class/sector";

export default class Nucleo extends Base {
  constructor(cedula, nombre, direccion, sector, integrantes, pagos, id, rev) {
    super(id, rev);
    this.cedula = cedula;
    this.nombre = nombre;
    this.direccion = direccion;
    this.sector = sector;
    if (!!integrantes) this.integrantes = integrantes;
    else this.integrantes = [];
    if (!!pagos) this.pagos = pagos;
    else this.pagos = [];
  }
  agregarIntegrante(id) {
    this.integrantes.push(id);
  }
  eliminarIntegrante(id) {
    const indice = this.integrantes.indexOf(id);
    this.integrantes.splice(indice, 1);
  }
  agregarPago(id) {
    this.pagos.push(id);
  }
  eliminarPago(id) {
    const indice = this.pagos.indexOf(id);
    this.pagos.splice(indice, 1);
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
  async getRegistrosAsociados(){
    return await db.local.rel.find("nucleo", this.id);
  }
}
