const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "/sectores",
        name: "Sectores",
        component: () => import("pages/Sectores.vue")
      },
      {
        path: "/personas",
        name: "Personas",
        component: () => import("pages/Personas.vue"),
        children: [
          {
            path: "/personas/integrantes",
            name: "integrantes",
            component: () =>
              import("components/personas/TablaIntegrantes.vue")
          },
          {
            path: "/personas/nucleos",
            name: "nucleos",
            component: () => import("components/personas/TablaNucleos.vue")
          },
          {
            path: "/personas/jefes-de-calle",
            name: "jefes de calle",
            component: () =>
              import("components/personas/TablaJefesCalle.vue")
          }
        ]
      },
      {
        path: "/pagos",
        name: "Pagos",
        component: () => import("pages/Pagos.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("layouts/Login.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
