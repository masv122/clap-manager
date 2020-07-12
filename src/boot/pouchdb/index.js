import create from "./create";

class Database {
  local = void 0;
  syncHandler = void 0;
  async configure({ onchange }) {
    this.local = create("clap_manager_bdd");
    this.local
      .changes({
        since: "now",
        live: true,
        include_docs: true
      })
      .on("change", onchange);
  }
}

let events = {
  sector: {
    name: "sector",
    eliminar: "sectores/eliminarSector",
    guardar: "sectores/guardarSector"
  },
  nucleo: {
    name: "nucleo",
    eliminar: "personas/eliminarNucleo",
    guardar: "personas/guardarNucleo"
  },
  integrante: {
    name: "integrante",
    eliminar: "personas/eliminarIntegrante",
    guardar: "personas/guardarIntegrante"
  },
  jefe: {
    name: "jefe",
    eliminar: "personas/eliminarJefe",
    guardar: "personas/guardarJefe"
  }
};

const db = new Database();
export default async ({ Vue, store, router }) => {
  await db.configure({
    onchange(change) {
      let { data, _id, _rev, _deleted } = change.doc;
      let parsed = db.local.rel.parseDocID(_id);
      let event = events[parsed.type];
      if (_deleted) {
        router.app.$emit(parsed.type, { id: parsed.id, _deleted });
        router.app.$emit(parsed.id, { _deleted });
        if (event) {
          store.dispatch(event.eliminar, parsed.id);
        }
      } else {
        data.id = parsed.id;
        data.rev = _rev;
        router.app.$emit(parsed.type, data);
        router.app.$emit(parsed.id, data);
        if (event) {
          store.dispatch(event.guardar, data);
        }
      }
    }
  });
  Vue.prototype.$db = db;
};

export { db };
