import { db } from "boot/pouchdb";

export async function guardarSector({ commit, dispatch }, sector) {
  try {
    const RESULT = await db.rel.save("sector", sector);
    if (!!RESULT) {
      const RESULTFIND = await dispatch("buscarSector", RESULT.id);
      console.log(RESULTFIND);
      if (!!RESULTFIND) commit("guardarSector", RESULTFIND);
    }
    return RESULT;
  } catch (error) {
    alert(error);
    return false;
  }
}
export async function cargarSectores({ commit }) {
  try {
    const RESULT = await db.rel.find("sector");
    if (!!RESULT) commit("cargarSectores", RESULT.sectores);
  } catch (error) {
    alert(error);
  }
}

export async function buscarSector({ commit }, id) {
  try {
    const RESULT = await db.rel.find("sector", id);
    if (!!RESULT.sectores[0]) {
      commit("updateSector", RESULT.sectores[0]);
      return RESULT.sectores[0];
    } else return false;
  } catch (error) {
    alert(error);
    return false;
  }
}
