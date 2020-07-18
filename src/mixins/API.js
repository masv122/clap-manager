import { db } from "boot/pouchdb/index";
import { Notify } from "quasar";

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

export async function agregarIntegrante(integrante) {
  try {
    const resultado = await db.local.rel.save("integrante", integrante);
    const mensaje = !!resultado
      ? "Integrante Agregado"
      : "No se pudo agregar el integrante";
    const icon = !!resultado ? "check" : "close";
    Notify.create({
      message: mensaje,
      icon: icon
    });
    return resultado;
  } catch (error) {
    alert("error al agregar el integrante: " + error);
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

export async function actualizarIntegrantesNucleo(data, integrante) {
  try {
    let nucleo = await integrante.geNucleo();
    nucleo.agregarIntegrante(data.id);
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
    alert("error al actualizar el nucleo: " + error);
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
    jefe.sector = null
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
