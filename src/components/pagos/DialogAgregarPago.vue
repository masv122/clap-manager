<template>
	<q-dialog
		v-model="_agregarPago"
		persistent
		:full-height="$q.screen.lt.sm"
		:full-width="$q.screen.lt.sm"
		@hide="resetear"
		@show="resetear"
	>
		<q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
			<q-toolbar dark class="bg-negative text-white q-mb-md">
				<q-toolbar-title shrink>
					<div class="text-h6"><q-icon name="add" />Agregar pago</div>
				</q-toolbar-title>
				<q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
					<q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
				</q-btn>
			</q-toolbar>
			<q-card-section class="q-pt-none">
				<agregar-pago />
			</q-card-section>
		</q-card>
	</q-dialog>
</template>

<script>
	import AgregarPago from "components/pagos/AgregarPago.vue";
	import { mapGetters, mapMutations } from "vuex";
	export default {
		name: "DialogAgregarPago",
		components: {
			AgregarPago,
		},
		data() {
			return {};
		},
		computed: {
			...mapGetters("pagos", ["agregarPago"]),
			_agregarPago: {
				get() {
					return this.agregarPago;
				},
				set() {
					this.updateAgregarPago();
				},
			},
		},
		methods: {
			...mapMutations("pagos", [
				"updateAgregarPago",
				"updateMonto",
				"updateBanco",
				"updateEstado",
				"updateFecha",
				"updateReferencia",
			]),
			...mapMutations("personas", ["updateNucleo"]),
			...mapMutations("sectores", ["updateSector"]),
			resetear() {
				this.updateMonto(null);
				this.updateBanco(null);
				this.updateEstado("pendiente");
				this.updateFecha("");
				this.updateReferencia(null);
				this.updateNucleo(null);
				this.updateSector(null);
			},
		},
	};
</script>

<style lang="scss" scoped></style>
