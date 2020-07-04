import { db } from "boot/pouchdb/index";

class Resultado {
  constructor(indice, sector) {
    this.indice = indice;
    this.sector = sector;
  }
}

export async function guardarSector({ commit, getters }, sector) {
    const INDICE = getters.buscarIndice(sector.id);
    if (INDICE >= 0) {
      const RESULTADO = new Resultado(INDICE, sector);
      commit("modificarSector", RESULTADO);
    } else {
      commit("insertarsector", sector);
    }
}
export async function eliminarSector({ commit, getters }, id) {
  const INDICE = getters.buscarIndice(id);
  if (INDICE >= 0) {
    commit("eliminarSector", INDICE);
  }else{
    alert("no se encuentra el indice " + id)
  }
}
export async function cargarSectores({ commit }) {
  try {
    const RESULT = await db.local.rel.find("sector");
    if (!!RESULT) commit("cargarSectores", RESULT.sectores);
  } catch (error) {
    alert(error);
  }
}

export async function buscarSector({ commit }, id) {
  try {
    const RESULT = await db.local.rel.find("sector", id);
    if (!!RESULT.sectores[0]) {
      commit("updateSector", RESULT.sectores[0]);
      return RESULT.sectores[0];
    } else return false;
  } catch (error) {
    alert(error);
    return false;
  }
}
