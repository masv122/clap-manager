import Persona from "./persona";

export default class JefeDeCalle extends Persona {
  constructor(nombre, apellido, cedula, telefono, codigo, direccion) {
    super(nombre, apellido, cedula, telefono);
    this.codigo = codigo;
    this.direccion = direccion;
  }
}
