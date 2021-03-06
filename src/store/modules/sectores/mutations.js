import Sector from "src/class/sector";

export function updateAgregar(state) {
  state.agregar = !state.agregar;
}
export function updateDetalles(state) {
  state.detalles = !state.detalles;
}
export function updateModificar(state) {
  state.modificar = !state.modificar;
}
export function updateEstado(state, value) {
  state.estado = value;
}
export function updateMunicipio(state, value) {
  state.municipio = value;
}
export function updateParroquia(state, value) {
  state.parroquia = value;
}
export function updateNombre(state, value) {
  state.nombre = value;
}
export function updateDatosBasicosSectorInvalidos(state, value) {
  state.datosBasicosSectorInvalidos = value;
}
export function updateEstadoMod(state, value) {
  state.estadoMod = value;
}
export function updateMunicipioMod(state, value) {
  state.municipioMod = value;
}
export function updateParroquiaMod(state, value) {
  state.parroquiaMod = value;
}
export function updateNombreMod(state, value) {
  state.nombreMod = value;
}
export function insertarSector(state, data) {
  const sector = new Sector(
    data.nombre,
    data.estado,
    data.municipio,
    data.parroquia,
    data.nucleos,
    data.jefe,
    data.id,
    data.rev
  );
  state.sectores.push(sector);
}
export function cargarSectores(state, sectores) {
  state.sectores = sectores;
}
export function updateSector(state, sector) {
  state.sector = sector;
}
export function modificarSector(state, data) {
  state.sectores[data.indice].nombre = data.objeto.nombre;
  state.sectores[data.indice].estado = data.objeto.estado;
  state.sectores[data.indice].municipio = data.objeto.municipio;
  state.sectores[data.indice].parroquia = data.objeto.parroquia;
  state.sectores[data.indice].nucleos = data.objeto.nucleos;
  state.sectores[data.indice].jefe = data.objeto.jefe;
  state.sectores[data.indice].rev = data.objeto.rev;
}
export function eliminarSector(state, indice) {
  state.sectores.splice(indice, 1);
}
export function updateCargandoSectores(state) {
  state.cargandoSectores = state.cargandoSectores;
}
