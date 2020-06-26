import Vue from "vue";
import Vuex from "vuex";

import sectores from "./modules/sectores";
import personas from "./modules/personas";
import pagos from "./modules/pagos";
import global from "./modules/global";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      sectores,
      personas,
      pagos,
      global
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
