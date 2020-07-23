import { db } from "boot/pouchdb/index";
import { Notify } from "quasar";
import Nucleo from "src/class/nucleo";
import Sector from "src/class/sector";

export async function guardarSector(sector) {
  try {
    const resultado = await db.local.rel.save("sector", sector);
    const mensaje = !!resultado
      ? "Sector guardado"
      : "No se pudo guardar el sector";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al guardar el sector: " + error);
    return false;
  }
}

export async function eliminarSector(sector) {
  try {
    const resultado = await db.local.rel.del("sector", sector);
    const mensaje = !!resultado.deleted
      ? "Sector eliminado"
      : "No se pudo eliminar el sector";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al eliminar el sector: " + error);
    return false;
  }
}

export async function eliminarPago(pago) {
  try {
    const resultado = await db.local.rel.del("pago", pago);
    const mensaje = !!resultado.deleted
      ? "Pago eliminado"
      : "No se pudo eliminar el pago";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al eliminar el pago: " + error);
    return false;
  }
}

export async function eliminarIntegrantes(integrantes) {
  try {
    integrantes.forEach(async integrante => {
      await db.local.rel.del("integrante", integrante);
    });
    Notify.create({
      message: "Integrantes Eliminados",
      icon: "check"
    });
    return true;
  } catch (error) {
    alert("error al eliminar los integrantes: " + error);
    return false;
  }
}

export async function eliminarNucleos(nucleos) {
  try {
    nucleos.forEach(async nucleo => {
      await db.local.rel.del("nucleo", nucleo);
    });
    Notify.create({
      message: "Nucleos Eliminados",
      icon: "check"
    });
    return true;
  } catch (error) {
    alert("error al eliminar los nucleos: " + error);
    return false;
  }
}

export async function eliminarNucleoSector(data, id) {
  try {
    let resultado = await db.local.rel.find("sector");
    const indice = resultado.sectores.findIndex(sector => sector.id === id);
    if (indice >= 0) {
      let sector = new Sector(
        resultado.sectores[indice].nombre,
        resultado.sectores[indice].estado,
        resultado.sectores[indice].municipio,
        resultado.sectores[indice].parroquia,
        resultado.sectores[indice].nucleos,
        resultado.sectores[indice].jefe,
        resultado.sectores[indice].id,
        resultado.sectores[indice].rev
      );
      sector.eliminarNucleo(data.id);
      console.log(sector);
      resultado = await db.local.rel.save("sector", sector);
      const mensaje = !!resultado
        ? "Nucleo del sector eliminado"
        : "No se pudo eliminar el nucleo del sector";
      const icon = !!resultado ? "check" : "close";
      Notify.create({
        message: mensaje,
        icon: icon
      });
      return resultado;
    } else return null;
  } catch (error) {
    alert("error al eliminar los nucleos del sector: " + error);
    return false;
  }
}

export async function guardarIntegrante(integrante) {
  try {
    const resultado = await db.local.rel.save("integrante", integrante);
    const mensaje = !!resultado
      ? "Integrante guardado"
      : "No se pudo guardar el integrante";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al guardarel integrante: " + error);
    return false;
  }
}

export async function eliminarIntegrante(integrante) {
  try {
    const resultado = await db.local.rel.del("integrante", integrante);
    const mensaje = !!resultado.deleted
      ? "Integrante eliminado"
      : "No se pudo eliminar el integrante";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al eliminar el integrante: " + error);
    return false;
  }
}

export async function eliminarNucleo(nucleo) {
  try {
    const resultado = await db.local.rel.del("nucleo", nucleo);
    const mensaje = !!resultado.deleted
      ? "Nucleo eliminado"
      : "No se pudo eliminar el nucleo";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al eliminar el nucleo: " + error);
    return false;
  }
}

export async function agregarNucleo(nucleo) {
  try {
    const resultado = await db.local.rel.save("nucleo", nucleo);
    const mensaje = !!resultado
      ? "Nucleo Agregado"
      : "No se pudo agregar el nucleo";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al agregar el nucleo: " + error);
    return false;
  }
}

export async function agregarJefe(jefe) {
  try {
    const resultado = await db.local.rel.save("jefe", jefe);
    const mensaje = !!resultado
      ? "Jefe de calle Agregado"
      : "No se pudo agregar el jefe de calle";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al agregar el jefe: " + error);
    return false;
  }
}

export async function eliminarJefe(jefe) {
  try {
    const resultado = await db.local.rel.del("jefe", jefe);
    const mensaje = !!resultado.deleted
      ? "Jefe de calle Agregado"
      : "No se pudo agregar el jefe de calle";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al eliminar el jefe: " + error);
    return false;
  }
}

export async function actualizarJefeFamiliarNucleo(newCedula, oldCedula) {
  console.log("entra");
  try {
    let resultado = await db.local.rel.find("nucleo");
    let nucleo = resultado.nucleos.find(nucleo => nucleo.cedula === oldCedula);
    nucleo.cedula = newCedula;
    resultado = await db.local.rel.save("nucleo", nucleo);
    const mensaje = !!resultado
      ? "Jefe familiar del nucleo actualizad"
      : "No se pudo actualizar el jefe familiar";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al actualizar el jefe familiar del nucleo: " + error);
    return false;
  }
}

export async function actualizarIntegrantesNucleo(integrante) {
  try {
    let nucleo = await integrante.getNucleo();
    nucleo.agregarIntegrante(integrante.id);
    const resultado = await db.local.rel.save("nucleo", nucleo);
    const mensaje = !!resultado
      ? "Integrantes del nucleo actualizados"
      : "No se pudo actualizar los integrantes del nucleo";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al actualizar los integrantes del nucleo: " + error);
    return false;
  }
}

export async function actualizarPagosNucleo(pago) {
  try {
    let nucleo = await pago.getNucleo();
    nucleo.agregarPago(pago.id);
    const resultado = await db.local.rel.save("nucleo", nucleo);
    const mensaje = !!resultado
      ? "Pagos del nucleo actualizados"
      : "No se pudo actualizar los pagos del nucleo";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al actualizar los pagos del nucleo: " + error);
    return false;
  }
}

export async function eliminarIntegrantesNucleo(data, id) {
  try {
    let resultado = await db.local.rel.find("nucleo");
    const indice = resultado.nucleos.findIndex(nucleo => nucleo.id === id);
    if (indice >= 0) {
      const nucleo = new Nucleo(
        resultado.nucleos[indice].cedula,
        resultado.nucleos[indice].nombre,
        resultado.nucleos[indice].direccion,
        resultado.nucleos[indice].sector,
        resultado.nucleos[indice].integrantes,
        resultado.nucleos[indice].pagos,
        resultado.nucleos[indice].id,
        resultado.nucleos[indice].rev
      );
      nucleo.eliminarIntegrante(data.id);
      resultado = await db.local.rel.save("nucleo", nucleo);
      const mensaje = !!resultado
        ? "Integrante del nucleo eliminado"
        : "No se pudo eliminar el integrante del nucleo";
      const icon = !!resultado ? "check" : "close";
      Notify.create({
        message: mensaje,
        icon: icon
      });
      return resultado;
    } else return null;
  } catch (error) {
    alert("error al eliminar los integrantes del nucleo: " + error);
    return false;
  }
}

export async function eliminarPagosNucleo(pago) {
  try {
    let resultado = await db.local.rel.find("nucleo");
    const indice = resultado.nucleos.findIndex(nucleo => nucleo.id === pago.nucleo);
    if (indice >= 0) {
      const nucleo = new Nucleo(
        resultado.nucleos[indice].cedula,
        resultado.nucleos[indice].nombre,
        resultado.nucleos[indice].direccion,
        resultado.nucleos[indice].sector,
        resultado.nucleos[indice].integrantes,
        resultado.nucleos[indice].pagos,
        resultado.nucleos[indice].id,
        resultado.nucleos[indice].rev
      );
      nucleo.eliminarPago(pago.id);
      resultado = await db.local.rel.save("nucleo", nucleo);
      const mensaje = !!resultado
        ? "Pago del nucleo eliminado"
        : "No se pudo eliminar el pago del nucleo";
      const icon = !!resultado ? "check" : "close";
      Notify.create({
        message: mensaje,
        icon: icon
      });
      return resultado;
    } else return null;
  } catch (error) {
    alert("error al eliminar los pagos del nucleo: " + error);
    return false;
  }
}

export async function actualizarNucleosSector(data, nucleo) {
  try {
    let sector = await nucleo.getSector();
    sector.agregarNucleo(data.id);
    const resultado = await db.local.rel.save("sector", sector);
    const mensaje = !!resultado
      ? "Nucleos del sector actualizados"
      : "No se pudo actualizar los nucleos del sector";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al actualizar el sector: " + error);
    return false;
  }
}

export async function actualizarJefeSector(data, jefe) {
  try {
    let sector = await jefe.getSector();
    sector.jefe = data.id;
    const resultado = await db.local.rel.save("sector", sector);
    const mensaje = !!resultado
      ? "Jefe de calle del sector actualizado"
      : "No se pudo actualizar el jefe de calle del sector";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al actualizar el sector: " + error);
    return false;
  }
}

export async function actualizarSectorJefe(data, sector) {
  try {
    let jefe = await sector.getJefe();
    jefe.sector = data.id;
    const resultado = await db.local.rel.save("jefe", jefe);
    const mensaje = !!resultado
      ? "Sector del jefe de calle actualizado"
      : "No se pudo actualizar el sector del jefe de calle";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al actualizar el jefe: " + error);
    return false;
  }
}

export async function eliminarSectorJefe(jefe) {
  try {
    jefe.sector = null;
    const resultado = await db.local.rel.save("jefe", jefe);
    const mensaje = !!resultado
      ? "Sector del jefe de calle eliminado"
      : "No se pudo eliminado el sector del jefe de calle";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al eliminar el jefe del sector: " + error);
    return false;
  }
}

export async function eliminarJefeSector(sector) {
  try {
    sector.jefe = null;
    const resultado = await db.local.rel.save("sector", sector);
    const mensaje = !!resultado
      ? "Sector del sector de calle eliminado"
      : "No se pudo eliminado el sector del sector de calle";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al eliminar el sector del sector: " + error);
    return false;
  }
}

export async function guardarPago(pago) {
  try {
    const resultado = await db.local.rel.save("pago", pago);
    const mensaje = !!resultado
      ? "Pago guardado"
      : "No se pudo guardar el pago";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al guardarel pago: " + error);
    return false;
  }
}
