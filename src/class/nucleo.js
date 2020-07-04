export default class Nucleo {
  constructor(cedula, direccion, sector, id, rev) {
    this.cedula = cedula;
    this.direccion = direccion;
    this.sector = sector;
    if (!!id) this.id = id;
    if (!!rev) this.rev = rev;
  }
}
