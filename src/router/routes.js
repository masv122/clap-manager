const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        redirect: { name: "Inicio" }
      },
      {
        path: "/inicio",
        name: "Inicio",
        component: () => import("pages/Inicio.vue")
      },
      {
        path: "/sectores",
        name: "Sectores",
        component: () => import("pages/Sectores.vue")
      },
      {
        path: "/personas",
        component: () => import("pages/Personas.vue"),
        children: [
          {
            path: "",
            name: "Personas",
            redirect: { name: "integrantes" }
          },
          {
            path: "integrantes",
            name: "integrantes",
            component: () => import("components/personas/TablaIntegrantes.vue")
          },
          {
            path: "nucleos",
            name: "nucleos",
            component: () => import("components/personas/TablaNucleos.vue")
          },
          {
            path: "jefes-de-calle",
            name: "jefes de calle",
            component: () => import("components/personas/TablaJefesCalle.vue")
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
    path: "/ingreso",
    name: "Ingreso",
    component: () => import("layouts/Ingreso.vue"),
    children: [
      {
        path: "/ingreso/login",
        name: "Login",
        component: () => import("pages/Login.vue")
      },
      {
        path: "/ingreso/registro",
        name: "Registro",
        component: () => import("pages/Registro.vue")
      }
    ]
  },
  {
    path: "/usuario",
    name: "Usuario",
    component: () => import("layouts/Usuario.vue"),
    children: [
      {
        path: "/usuario/inicio",
        name: "InicioUsuario",
        component: () => import("pages/usuario/Inicio.vue")
      }
    ]
  },
  {
    path: "/test",
    name: "test",
    component: () => import("layouts/test.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
