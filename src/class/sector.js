export default class Sector {
  constructor(nombre, estado, municipio, parroquia, id, rev) {
    this.nombre = nombre;
    this.estado = estado;
    this.municipio = municipio;
    this.parroquia = parroquia;
    if(!!id) this.id = id;
    if(!!rev) this.rev = rev;
  }
}
