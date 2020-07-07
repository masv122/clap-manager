import Base from "./base";

export default class Nucleo extends Base{
  constructor(cedula, direccion, sector, id, rev) {
    super(id, rev);
    this.cedula = cedula;
    this.direccion = direccion;
    this.sector = sector;
  }
}
