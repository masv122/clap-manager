import { db } from "boot/pouchdb/index";
import Resultado from "../../../class/resultado";
import Pago from "src/class/pago";

export async function guardarPago({ commit, getters }, pago) {
  const indice = getters.buscarIndice(pago.id);
  if (indice >= 0) {
    const resultado = new Resultado(indice, pago);
    commit("modificarPago", resultado);
  } else {
    commit("insertarPago", pago);
  }
}
export async function eliminarPago({ commit, getters }, id) {
  const indice = getters.buscarIndice(id);
  if (indice >= 0) {
    commit("eliminarPago", indice);
  } else {
    alert("no se encuentra el indice " + id);
  }
}
export async function cargarPagos({ commit }) {
  try {
    const resultado = await db.local.rel.find("pago");
    if (!!resultado) {
      let pagos = []
      for (let i = 0; i < resultado.pagos.length; i++) {
        const pago = new Pago(
          resultado.pagos[i].monto,
          resultado.pagos[i].banco,
          resultado.pagos[i].estado,
          resultado.pagos[i].fecha,
          resultado.pagos[i].nucleo,
          resultado.pagos[i].id,
          resultado.pagos[i].rev
        );
        pagos.push(pago)
      }
      commit("cargarPagos", pagos);
    }
  } catch (error) {
    alert("error al cargar los pagos 101: " + error);
  }
}

export async function buscarPago({ commit }, id) {
  try {
    const resultado = await db.local.rel.find("pago", id);
    if (!!resultado.pagos[0]) {
      commit("updatePago", resultado.pagos[0]);
      return resultado.pagos[0];
    } else return false;
  } catch (error) {
    alert("error al buscar el pago 101: " + error);
    return false;
  }
}
