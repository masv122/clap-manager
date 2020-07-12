export function agregarPersona(state) {
  return state.agregarPersona;
}
export function detallesPersona(state) {
  return state.detallesPersona;
}
export function modificarPersona(state) {
  return state.modificarPersona;
}
export function cargandoNucleos(state) {
  return state.cargandoNucleos;
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
export function nucleoSel(state) {
  return state.nucleoSel;
}
export function jefes(state) {
  return state.jefes;
}
export function jefe(state) {
  return state.jefe;
}
export function jefeSel(state) {
  return state.jefeSel;
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
export function integranteSel(state) {
  return state.integranteSel[0];
}
export const buscarIndiceIntegrante = state => id => {
  return state.integrantes.findIndex(e => e.id === id);
};
