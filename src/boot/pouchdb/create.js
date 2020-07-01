import PouchDB from "./setup";
import schema from "./schema";

export default function(name, options) {
  let db = options !== void 0 ? new PouchDB(name, options) : new PouchDB(name);
  db.setSchema(schema);
  return db;
}