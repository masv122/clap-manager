import { db } from "boot/pouchdb/index";
import Resultado from "../../../class/resultado";

export async function guardarNucleo({ commit, getters }, nucleo) {
  const INDICE = getters.buscarIndiceNucleo(nucleo.id);
  if (INDICE >= 0) {
    const RESULTADO = new Resultado(INDICE, nucleo);
    commit("modificarNucleo", RESULTADO);
  } else {
    commit("insertarNucleo", nucleo);
  }
}
export async function eliminarNucleo({ commit, getters }, id) {
  const INDICE = getters.buscarIndiceNucleo(id);
  if (INDICE >= 0) {
    commit("eliminarNucleo", INDICE);
  } else {
    alert("no se encuentra el indice " + id);
  }
}
export async function cargarNucleos({ commit }) {
  try {
    const RESULT = await db.local.rel.find("nucleo");
    if (!!RESULT) commit("cargarNucleos", RESULT.nucleos);
  } catch (error) {
    alert(error);
  }
}
export async function buscarNucleo({ commit }, id) {
  try {
    const RESULT = await db.local.rel.find("nucleo", id);
    if (!!RESULT.nucleos[0]) {
      commit("updateNucleo", RESULT.nucleos[0]);
      return RESULT.nucleos[0];
    } else return false;
  } catch (error) {
    alert(error);
    return false;
  }
}
export async function guardarIntegrante({ commit, getters }, integrante) {
  const INDICE = getters.buscarIndiceIntegrante(integrante.id);
  if (INDICE >= 0) {
    const RESULTADO = new Resultado
    commit("modificarIntegrante", RESULTADO);
  } else {
    commit("insertarIntegrante", integrante);
  }
}
export async function eliminarIntegrante({ commit, getters }, id) {
  const INDICE = getters.buscarIndiceIntegrante(id);
  if (INDICE >= 0) {
    commit("eliminarIntegrante", INDICE);
  } else {
    alert("no se encuentra el indice " + id);
  }
}
export async function cargarIntegrantes({ commit }) {
  try {
    const RESULT = await db.local.rel.find("integrante");
    if (!!RESULT) commit("cargarIntegrantes", RESULT.integrantes);
  } catch (error) {
    alert(error);
  }
}
export async function buscarIntegrante({ commit }, id) {
  try {
    const RESULT = await db.local.rel.find("integrante", id);
    if (!!RESULT.integrantes[0]) {
      commit("updateIntegrante", RESULT.integrantes[0]);
      return RESULT.integrantes[0];
    } else return false;
  } catch (error) {
    alert(error);
    return false;
  }
}
