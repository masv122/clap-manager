import { db } from "boot/pouchdb/index";

class Resultado {
  constructor(indice, nucleo) {
    this.indice = indice;
    this.nucleo = nucleo;
  }
}

export async function guardarNucleo({ commit, getters }, nucleo) {
  const INDICE = getters.buscarIndice(nucleo.id);
  if (INDICE >= 0) {
    const RESULTADO = new Resultado(INDICE, nucleo);
    commit("modificarNucleo", RESULTADO);
  } else {
    commit("insertarNucleo", nucleo);
  }
}
export async function eliminarNucleo({ commit, getters }, id) {
  const INDICE = getters.buscarIndice(id);
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
