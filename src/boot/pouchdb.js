import pouchdb from "pouchdb";
var db = new pouchdb("clap_manager_bdd");

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ app, router, Vue }) => {
  Vue.prototype.$db = db;
};

export { db };
