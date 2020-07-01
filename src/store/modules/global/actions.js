import estados from "src/assets/estados"
import municipios from "src/assets/municipios"
import parroquias from "src/assets/parroquias"
import bancos from "src/assets/BancosVzla"
export async function loadData ({ commit }) {
  commit("updateEstados", estados);
  commit("updateMunicipios", municipios);
  commit("updateParroquias", parroquias);
  commit("updateBancos", bancos);
}
