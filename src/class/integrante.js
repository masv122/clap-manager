import Persona from "./persona";

export default class Integrante extends Persona {
  constructor(
    nombre,
    apellido,
    cedula,
    telefono,
    nucleo,
    fechaNacimiento,
    id,
    rev
  ) {
    super(nombre, apellido, cedula, telefono, fechaNacimiento, id, rev);
    this.nucleo = nucleo;
  }
}
