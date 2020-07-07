import Base from "./base";

export default class Sector extends Base{
  constructor(nombre, estado, municipio, parroquia, id, rev) {
    super(id, rev);
    this.nombre = nombre;
    this.estado = estado;
    this.municipio = municipio;
    this.parroquia = parroquia;
  }
}
