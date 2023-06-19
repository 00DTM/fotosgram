import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  respuesta: string | undefined |null;
  respuestas: { id: string, respuesta: string }[] = [];
  mostrarResultados: boolean = false;
  contadorRespuestas: { diestro: number, zurdo: number } = { diestro: 0, zurdo: 0 };

  constructor() {}

  enviarRespuesta() {
    if (this.respuesta) {
      const idAleatorio = this.generarIdAleatorio();
      const respuestaJson = { id: idAleatorio, respuesta: this.respuesta };
      this.respuestas.push(respuestaJson);
      this.actualizarContadorRespuestas(this.respuesta);
      
      console.log('Respuesta enviada:', respuestaJson);
      // Aquí puedes realizar acciones adicionales, como enviar el JSON al servidor

      // Limpiar la selección de respuesta después de enviar
      this.respuesta = null;
    } else {
      console.log('Por favor, seleccione una opción.');
    }
  }

  mostrarRespuestas() {
    this.mostrarResultados = true;
  }

  generarIdAleatorio(): string {
    // Generar un ID aleatorio utilizando Math.random() y convertirlo a una cadena
    const id = Math.random().toString(36).substr(2, 9);
    return id;
  }

  actualizarContadorRespuestas(respuesta: string) {
    if (respuesta === 'diestro') {
      this.contadorRespuestas.diestro++;
    } else if (respuesta === 'zurdo') {
      this.contadorRespuestas.zurdo++;
    }
  }
}