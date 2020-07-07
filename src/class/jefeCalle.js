import Persona from "./persona";

export default class JefeCalle extends Persona {
  constructor(
    nombre,
    apellido,
    cedula,
    telefono,
    fechaNacimiento,
    codigo,
    direccion,
    id,
    rev
  ) {
    super(nombre, apellido, cedula, telefono, fechaNacimiento, id, rev);
    this.codigo = codigo;
    this.direccion = direccion;
  }
}
