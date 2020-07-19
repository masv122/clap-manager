import { db } from "boot/pouchdb/index";
import Resultado from "src/class/resultado";
import Nucleo from "src/class/nucleo";
import JefeCalle from "src/class/jefeCalle";
import Integrante from "src/class/integrante";

export async function guardarNucleo({ commit, getters }, nucleo) {
  const indice = getters.buscarIndiceNucleo(nucleo.id);
  if (indice >= 0) {
    const resultado = new Resultado(indice, nucleo);
    commit("modificarNucleo", resultado);
  } else {
    commit("insertarNucleo", nucleo);
  }
}
export async function eliminarNucleo({ commit, getters }, id) {
  const indice = getters.buscarIndiceNucleo(id);
  if (indice >= 0) {
    commit("eliminarNucleo", indice);
  } else {
    alert("no se encuentra el indice " + id);
  }
}
export async function cargarNucleos({ commit }) {
  try {
    const resultado = await db.local.rel.find("nucleo");
    if (!!resultado) {
      let nucleos = [];
      for (let i = 0; i < resultado.nucleos.length; i++) {
        const nucleo = new Nucleo(
          resultado.nucleos[i].cedula,
          resultado.nucleos[i].nombre,
          resultado.nucleos[i].direccion,
          resultado.nucleos[i].sector,
          resultado.nucleos[i].integrantes,
          resultado.nucleos[i].id,
          resultado.nucleos[i].rev
        );
        nucleos.push(nucleo);
      }
      commit("cargarNucleos", nucleos);
    }
  } catch (error) {
    alert("error al cargar los nucleos " + error);
  }
}
export async function buscarNucleo({ commit }, id) {
  try {
    const resultado = await db.local.rel.find("nucleo", id);
    if (!!resultado.nucleos[0]) {
      commit("updateNucleo", resultado.nucleos[0]);
      return resultado.nucleos[0];
    } else return false;
  } catch (error) {
    alert("error al buscar el nucleo " + error);
    return false;
  }
}
export async function guardarIntegrante({ commit, getters }, integrante) {
  const indice = getters.buscarIndiceIntegrante(integrante.id);
  if (indice >= 0) {
    const resultado = new Resultado(indice, integrante);
    commit("modificarIntegrante", resultado);
  } else {
    commit("insertarIntegrante", integrante);
  }
}
export async function eliminarIntegrante({ commit, getters }, id) {
  const indice = getters.buscarIndiceIntegrante(id);
  if (indice >= 0) {
    commit("eliminarIntegrante", indice);
  } else {
    alert("no se encuentra el indice " + id);
  }
}
export async function cargarIntegrantes({ commit }) {
  try {
    const resultado = await db.local.rel.find("integrante");
    if (!!resultado) {
      let integrantes = [];
      for (let i = 0; i < resultado.integrantes.length; i++) {
        const integrante = new Integrante(
          resultado.integrantes[i].nombre,
          resultado.integrantes[i].apellido,
          resultado.integrantes[i].telefono,
          resultado.integrantes[i].fechaNacimiento,
          resultado.integrantes[i].nucleo,
          resultado.integrantes[i].id,
          resultado.integrantes[i].rev
        );
        integrantes.push(integrante);
      }
      commit("cargarIntegrantes", integrantes);
    }
  } catch (error) {
    alert("error al cargar los integrantes " + error);
  }
}
export async function buscarIntegrante({ commit }, id) {
  try {
    const resultado = await db.local.rel.find("integrante", id);
    if (!!resultado.integrantes[0]) {
      commit("updateIntegrante", resultado.integrantes[0]);
      return resultado.integrantes[0];
    } else return false;
  } catch (error) {
    alert("error al encontrar el integrante " + error);
    return false;
  }
}
export async function guardarJefe({ commit, getters }, jefe) {
  const indice = getters.buscarIndiceJefe(jefe.id);
  if (indice >= 0) {
    const resultado = new Resultado(indice, jefe);
    commit("modificarJefe", resultado);
  } else {
    commit("insertarJefe", jefe);
  }
}
export async function eliminarJefe({ commit, getters }, id) {
  const indice = getters.buscarIndiceJefe(id);
  if (indice >= 0) {
    commit("eliminarJefe", indice);
  } else {
    alert("no se encuentra el indice " + id);
  }
}
export async function cargarJefes({ commit }) {
  try {
    const resultado = await db.local.rel.find("jefe");
    if (!!resultado) {
      let jefes = [];
      for (let i = 0; i < resultado.jefes.length; i++) {
        const jefe = new JefeCalle(
          resultado.jefes[i].nombre,
          resultado.jefes[i].apellido,
          resultado.jefes[i].telefono,
          resultado.jefes[i].fechaNacimiento,
          resultado.jefes[i].codigo,
          resultado.jefes[i].direccion,
          resultado.jefes[i].sector,
          resultado.jefes[i].id,
          resultado.jefes[i].rev,
        );
        jefes.push(jefe);
      }
      commit("cargarJefes", jefes);
    }
  } catch (error) {
    alert("error al cargar los jefes " + error);
  }
}
export async function buscarJefe({ commit }, id) {
  try {
    const resultado = await db.local.rel.find("jefe", id);
    if (!!resultado.jefes[0]) {
      commit("updateJefe", resultado.jefes[0]);
      return resultado.jefes[0];
    } else return false;
  } catch (error) {
    alert("error al encontrar el jefe " + error);
    return false;
  }
}
