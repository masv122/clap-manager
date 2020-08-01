import { Loading } from "quasar";

export default async ({ store, Vue }) => {
	Loading.show({
		message: "Cargando Informacion... Por favor espere.",
	});
	await store.dispatch("sectores/cargarSectores");
	await store.dispatch("personas/cargarNucleos");
	await store.dispatch("personas/cargarIntegrantes");
	await store.dispatch("personas/cargarJefes");
	await store.dispatch("global/loadData");
	await store.dispatch("pagos/cargarPagos");
	Loading.hide();
};
