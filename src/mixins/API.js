import { db } from "boot/pouchdb/index";

export async function agregarSector(sector) {
  try {
    return await db.local.rel.save("sector", sector);
  } catch (error) {
    alert("error al agregar el sector: " + error);
    return false;
  }
}

export async function agregarIntegrante(integrante) {
  try {
    return await db.local.rel.save("integrante", integrante);
  } catch (error) {
    alert("error al agregar el integrante: " + error);
    return false;
  }
}

export async function agregarNucleo(nucleo) {
  try {
    return await db.local.rel.save("nucleo", nucleo);
  } catch (error) {
    alert("error al agregar el nucleo: " + error);
    return false;
  }
}

export async function agregarJefe(jefe) {
  try {
    return await db.local.rel.save("jefe", jefe);
  } catch (error) {
    alert("error al agregar el jefe: " + error);
    return false;
  }
}

export async function actualizarIntegrantesNucleo(data, integrante) {
  try {
    let nucleo = await integrante.geNucleo();
    nucleo.agregarIntegrante(data.id);
    return await db.local.rel.save("nucleo", nucleo);
  } catch (error) {
    alert("error al actualizar el nucleo: " + error);
    return false;
  }
}

export async function actualizarNucleosSector(data, nucleo) {
  try {
    let sector = await nucleo.getSector();
    sector.agregarNucleo(data.id);
    return await db.local.rel.save("sector", sector);
  } catch (error) {
    alert("error al actualizar el sector: " + error);
    return false;
  }
}

export async function actualizarJefeSector(data, jefe) {
  try {
    let sector = await jefe.getSector();
    sector.jefe = data.id;
    return await db.local.rel.save("sector", sector);
  } catch (error) {
    alert("error al actualizar el sector: " + error);
    return false;
  }
}

export async function actualizarSectorJefe(data, sector) {
  try {
    let jefe = await sector.getJefe();
    jefe.sector = data.id;
    return await db.local.rel.save("jefe", jefe);
  } catch (error) {
    alert("error al actualizar el jefe: " + error);
    return false;
  }
}