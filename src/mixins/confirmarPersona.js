import Nucleo from "src/class/nucleo";
import Integrante from "src/class/integrante";
import JefeCalle from "src/class/jefeCalle";
import * as API from "src/mixins/API";

export default {
  methods: {
    async confirmarPersona(modo) {
      try {
        let persona,
          nucleo,
          resultadoFinal,
          resultadoAgregarIntegrante,
          resultadoAgregarNucleo,
          resultadoActualizarNucleo;
        let tipo;
        switch (this.tipoPersona.value) {
          case "integrante":
            tipo = "Integrante";
            persona = new Integrante(
              this.nombre,
              this.apellido,
              this.telefono,
              this.fechaNacimiento,
              this.nucleo,
              this.cedula,
              modo === "modificar" ? this.integrante.rev : null
            );
            resultadoAgregarIntegrante = await API.guardarIntegrante(persona);
            if (!!resultadoAgregarIntegrante && modo === "agregar")
              resultadoFinal = await API.actualizarIntegrantesNucleo(
                resultadoAgregarIntegrante,
                persona
              );
            else if (
              !!resultadoAgregarIntegrante &&
              this.nucleo !== this.integrante.nucleo &&
              modo === "modificar"
            ) {
              resultadoActualizarNucleo = await API.eliminarIntegrantesNucleo(
                resultadoAgregarIntegrante,
                persona
              );
              resultadoFinal = await API.actualizarIntegrantesNucleo(
                resultadoAgregarIntegrante,
                persona
              );
            }
            break;
          case "nucleo":
            tipo = "Nucleo";
            nucleo = new Nucleo(
              this.cedula,
              this.nombreNucleo,
              this.direccion,
              this.sector,
              [this.cedula]
            );
            resultadoAgregarNucleo = await API.agregarNucleo(nucleo);
            await API.actualizarNucleosSector(resultadoAgregarNucleo, nucleo);
            persona = new Integrante(
              this.nombre,
              this.apellido,
              this.telefono,
              this.fechaNacimiento,
              resultadoAgregarNucleo.id,
              this.cedula
            );
            resultadoFinal = await API.guardarIntegrante(persona);
            break;
          case "jefe":
            tipo = "Jefe";
            const jefeCalle = new JefeCalle(
              this.nombre,
              this.apellido,
              this.telefono,
              this.fechaNacimiento,
              this.codigo,
              this.direccion,
              null,
              this.cedula
            );
            resultadoFinal = await API.agregarJefe(jefeCalle);
            break;
          default:
            break;
        }
        if (!!resultadoFinal && modo === "agregar") this.updateAgregarPersona();
        if (!!resultadoFinal && modo === "modificar")
          this.updateModificarPersona();
      } catch (error) {
        alert("error al confirmar la persona 101: " + error);
      }
    }
  }
};
