import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  mensajeRespuesta: string | undefined;

  constructor(private toastController: ToastController) {}

  async enviarRespuesta() {
    const toast = await this.toastController.create({
      message: `Respuesta: ${this.mensajeRespuesta}`,
      duration: 2000,
      position: 'bottom',
    });

    toast.present();
  }
}