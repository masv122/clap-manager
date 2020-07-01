import Persona from "./persona"

export default class Integrante extends Persona {
  constructor(nombre, apellido, cedula, telefono, nucleo) {
    super(nombre, apellido, cedula, telefono);
    this.nucleo = nucleo;
  }
} 