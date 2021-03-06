import Base from "./base";

export default class Persona extends Base {
  constructor(nombre, apellido, telefono, fechaNacimiento, id, rev) {
    super(id, rev);
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.fechaNacimiento = fechaNacimiento;
  }
  nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }
}
