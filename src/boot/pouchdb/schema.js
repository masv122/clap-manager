const schema = [
  {
    singular: "sector",
    plural: "sectores",
    relations: {
      nucleos: { hasMany: "nucleos" },
      jefe: { belongsTo: "jefe" }
    }
  },
  {
    singular: "nucleo",
    plural: "nucleos",
    relations: {
      integrantes: { hasMany: "integrantes" },
      sector: { belongsTo: "sector" },
      pagos: { hasMany: "pagos" }
    }
  },
  {
    singular: "integrante",
    plural: "integrantes",
    relations: {
      nucleo: { belongsTo: "nucleo" }
    }
  },
  {
    singular: "pago",
    plural: "pagos",
    relations: {
      nucleo: { belongsTo: "nucleo" }
    }
  },
  {
    singular: "jefe",
    plural: "jefes",
    relations: {
      sector: { belongsTo: "sector" }
    }
  }
];

export default schema;