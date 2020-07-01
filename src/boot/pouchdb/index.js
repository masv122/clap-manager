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
          store.dispatch(event.delete, parsed.id);
        }
      } else {
        data.id = parsed.id;
        data.rev = _rev;
        router.app.$emit(parsed.type, data);
        router.app.$emit(parsed.id, data);
        if (event) {
          store.dispatch(event.save, data);
        }
      }
    }
  });
  Vue.prototype.$db = db;
};

export { db };
