import Nucleo from "src/class/nucleo";
import Integrante from "src/class/integrante";
import JefeCalle from "src/class/jefeCalle";
import * as API from "src/mixins/API";

export default {
  methods: {
    async confirmarPersona(modo) {
      try {
        let persona,                  //se cren las variables para ser usadas en todo
          resultadoFinal,            //el mixin
          resultadoAgregarIntegrante,
          resultadoActualizarNucleo,
          resultadoCrearNucleo,
          tipo;
        switch (this.tipoPersona.value) { //cada vez que se guarde una persona se evalua que tipo es
          case "integrante":
            tipo = "Integrante";
            persona = new Integrante(
              this.nombre,
              this.apellido,
              this.telefono,
              this.fechaNacimiento,
              this.nucleo,
              this.cedula,
              modo === "modificar" ? this.integrante.rev : null //si el modo es modificar se asigna un rev
            );
            if (modo === "agregar") {
              resultadoAgregarIntegrante = await API.guardarIntegrante(persona); //si el modo es agregar
              resultadoFinal = await API.actualizarIntegrantesNucleo(     //se guarda el integrante
                resultadoAgregarIntegrante,                               //y se actualiza el nucleo
                persona
              );
            } else if (
              this.nucleo !== this.integrante.nucleo && //si el modo es modificar y el nucleo del integrante
              modo === "modificar"                     //y el nucleo seleccionado cambio es porque hay una
            ) {                                       //reasignacion de nucleo
              resultadoAgregarIntegrante = await API.guardarIntegrante(persona);  //primero se guarda el integrante
              resultadoActualizarNucleo = await API.eliminarIntegrantesNucleo(    //luego se elimina del nucleo
                resultadoAgregarIntegrante,
                this.integrante.nucleo
              );
              resultadoFinal = await API.actualizarIntegrantesNucleo(           //y por ultimo se actualiza los
                resultadoAgregarIntegrante,                                    //integrantes del nuevo nucleo
                persona
              );
            } else if (!this.reasignar) { //si reasignar es negativo quiere decir que se selecciono crear un nuevo nucleo con el integrante
              resultadoCrearNucleo = await this.crearNucleo(modo);
              tipo = resultadoCrearNucleo.tipo;
              resultadoFinal = resultadoCrearNucleo.resultadoFinal;
            }
            break;
          case "nucleo":
            resultadoCrearNucleo = await this.crearNucleo(modo);
            tipo = resultadoCrearNucleo.tipo;
            resultadoFinal = resultadoCrearNucleo.resultadoFinal;
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
    },
    async crearNucleo(modo, resultadoAgregarIntegrante) {
      const tipo = "Nucleo";
      let resultadoFinal;
      let nucleo = new Nucleo(
        this.cedula,
        this.nombreNucleo,
        this.direccion,
        this.sector,
        [this.cedula]
      );
      if (this.esJefeFamiliar(this.integrante.id) >= 0 && modo === "modificar")
        await API.actualizarJefeFamiliarNucleo(null, this.integrante.id);
      let resultadoAgregarNucleo = await API.agregarNucleo(nucleo);
      const persona = new Integrante(
        this.nombre,
        this.apellido,
        this.telefono,
        this.fechaNacimiento,
        resultadoAgregarNucleo.id,
        this.cedula
      );
      await API.actualizarNucleosSector(resultadoAgregarNucleo, nucleo);
      if (modo === "agregar") {
        resultadoFinal = await API.guardarIntegrante(persona);
      } else {
        persona.rev = this.integrante.rev;
        resultadoAgregarIntegrante = await API.guardarIntegrante(persona);
        resultadoFinal = await API.eliminarIntegrantesNucleo(
          resultadoAgregarIntegrante,
          this.integrante.nucleo
        );
      }
      return { tipo, resultadoFinal };
    }
  }
};
