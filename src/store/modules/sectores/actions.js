import { db } from "boot/pouchdb/index";
import Resultado from "../../../class/resultado";
import Sector from "src/class/sector";

export async function guardarSector({ commit, getters }, sector) {
  const indice = getters.buscarIndice(sector.id);
  if (indice >= 0) {
    const resultado = new Resultado(indice, sector);
    commit("modificarSector", resultado);
  } else {
    commit("insertarSector", sector);
  }
}
export async function eliminarSector({ commit, getters }, id) {
  const indice = getters.buscarIndice(id);
  if (indice >= 0) {
    commit("eliminarSector", indice);
  } else {
    alert("no se encuentra el indice " + id);
  }
}
export async function cargarSectores({ commit }) {
  try {
    const resultado = await db.local.rel.find("sector");
    if (!!resultado) {
      let sectores = []
      for (let i = 0; i < resultado.sectores.length; i++) {
        const sector = new Sector(
          resultado.sectores[i].nombre,
          resultado.sectores[i].estado,
          resultado.sectores[i].municipio,
          resultado.sectores[i].parroquia,
          resultado.sectores[i].nucleos,
          resultado.sectores[i].jefe,
          resultado.sectores[i].id,
          resultado.sectores[i].rev
        );
        sectores.push(sector)
      }
      commit("cargarSectores", sectores);
    }
  } catch (error) {
    alert(error);
  }
}

export async function buscarSector({ commit }, id) {
  try {
    const resultado = await db.local.rel.find("sector", id);
    if (!!resultado.sectores[0]) {
      commit("updateSector", resultado.sectores[0]);
      return resultado.sectores[0];
    } else return false;
  } catch (error) {
    alert(error);
    return false;
  }
}
