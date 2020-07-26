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
        component: () => import("pages/Sectores.vue"),
        children: [
          {
            path: "",
            name: "Sectores",
            redirect: { name: "Registros sectores" }
          },
          {
            path: "registros",
            name: "Registros sectores",
            component: () => import("components/sectores/Registros.vue")
          },
          {
            path: "agregar",
            name: "Agregar sector",
            component: () => import("components/sectores/AgregarSector.vue")
          },
          {
            path: "detalles/:id",
            name: "Detalles sector",
            component: () => import("components/sectores/DetallesSector.vue"),
            props: true
          },
          {
            path: "modificar/:id",
            name: "Modificar sector",
            component: () => import("components/sectores/ModificarSector.vue"),
            props: true
          }
        ]
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
            path: "registros",
            name: "Registros personas",
            component: () => import("components/sectores/Registros.vue"),
            children: [
              {
                path: "integrantes",
                name: "integrantes",
                component: () =>
                  import("components/personas/TablaIntegrantes.vue")
              },
              {
                path: "nucleos",
                name: "nucleos",
                component: () => import("components/personas/TablaNucleos.vue")
              },
              {
                path: "jefes-de-calle",
                name: "jefes de calle",
                component: () =>
                  import("components/personas/TablaJefesCalle.vue")
              }
            ]
          },

          {
            path: "agregar",
            name: "Agregar persona",
            component: () => import("components/personas/AgregarPersona.vue")
          },
          {
            path: "detalles/:tipo/:id",
            name: "Detalles persona",
            component: () => import("components/personas/DetallesPersona.vue"),
            props: true
          },
          {
            path: "modificar/:tipo/:id",
            name: "Modificar persona",
            component: () => import("components/personas/ModificarPersona.vue"),
            props: true
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
