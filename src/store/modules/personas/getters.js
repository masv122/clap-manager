export function agregarPersona(state) {
  return state.agregarPersona;
}
export function detallesPersona(state) {
  return state.detallesPersona;
}
export function modificarPersona(state) {
  return state.modificarPersona;
}
export function cargandoPersonas(state) {
  return state.cargandoPersonas;
}
export function nombre(state) {
  return state.nombre;
}
export function apellido(state) {
  return state.apellido;
}
export function cedula(state) {
  return state.cedula;
}
export function telefono(state) {
  return state.telefono;
}
export function fechaNacimiento(state) {
  return state.fechaNacimiento;
}
export function datosPersonalesInvalidos(state) {
  return state.datosPersonalesInvalidos;
}
export function datosTipoPersonaInvalidos(state) {
  return state.datosTipoPersonaInvalidos;
}
export function tipoPersona(state) {
  return state.tipoPersona;
}
export function nombreNucleo(state) {
  return state.nombreNucleo;
}
export function direccion(state) {
  return state.direccion;
}
export function nucleos(state) {
  return state.nucleos;
}
export function nucleo(state) {
  return state.nucleo;
}
export function jefes(state) {
  return state.jefes;
}
export function jefe(state) {
  return state.jefe;
}
export function jefeSector(state) {
  return state.jefeSector;
}
export function codigo(state) {
  return state.codigo;
}
export const buscarIndiceNucleo = state => id => {
  return state.nucleos.findIndex(e => e.id === id);
};
export const nucleosSector = state => sector => {
  return state.nucleos.filter(e => e.sector === sector);
};
export const integrantesNucleo = state => nucleo => {
  return state.integrantes.filter(e => e.nucleo === nucleo);
};
export const buscarNucleo = state => id => {
  return state.nucleos.find(e => e.id === id);
};
export function integrantes(state) {
  return state.integrantes;
}
export function integrante(state) {
  return state.integrante;
}
export const buscarIntegrante = state => id => {
  return state.integrantes.find(integrante => integrante.id === id);
};
export const buscarIndiceIntegrante = state => id => {
  return state.integrantes.findIndex(e => e.id === id);
};
export const buscarJefe = state => id => {
  return state.jefes.find(e => e.id === id);
};
export const buscarIndiceJefe = state => id => {
  return state.jefes.findIndex(e => e.id === id);
};
export const esJefeFamiliar = state => cedula =>{
  return state.nucleos.findIndex(nucleo => nucleo.cedula === cedula);
}
