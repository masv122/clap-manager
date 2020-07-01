import PouchDB from "pouchdb";
import RelationalPouch from "relational-pouch";
import PouchDBFind from "pouchdb-find";
import WorkerPouch from "worker-pouch";

PouchDB.adapter("worker", WorkerPouch);
PouchDB.plugin(RelationalPouch);
PouchDB.plugin(PouchDBFind);

export default PouchDB;
