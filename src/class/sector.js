import Base from "./base";
import JefeCalle from "src/class/jefeCalle";
import { db } from "boot/pouchdb/index";

export default class Sector extends Base {
  constructor(nombre, estado, municipio, parroquia, nucleos, jefe, id, rev) {
    super(id, rev);
    this.nombre = nombre;
    this.estado = estado;
    this.municipio = municipio;
    this.parroquia = parroquia;
    if (!!nucleos) this.nucleos = nucleos;
    else this.nucleos = [];
    if (!!jefe) this.jefe = jefe;
    else this.jefe = null;
  }
  getDirecion() {
    return this.estado + "," + this.municipio + "," + this.parroquia;
  }
  agregarNucleo(id) {
    this.nucleos.push(id);
  }
  async getJefe() {
    try {
      const resultado = await db.local.rel.find("jefe", this.jefe);
      if (!!resultado) {
        const jefe = new JefeCalle(
          resultado.jefes[0].nombre,
          resultado.jefes[0].apellido,
          resultado.jefes[0].cedula,
          resultado.jefes[0].telefono,
          resultado.jefes[0].fechaNacimiento,
          resultado.jefes[0].codigo,
          resultado.jefes[0].direccion,
          resultado.jefes[0].sector,
          resultado.jefes[0].id,
          resultado.jefes[0].rev
        );
        return jefe;
      } else return null;
    } catch (error) {
      alert("error al encontrar el jefe de calle: " + error);
      return null;
    }
  }
  async getIntegrantes() {
    const result = await db.local.rel.find("nucleo", this.nucleos);
    return result.integrantes;
  }
}
