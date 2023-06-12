import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  selectedOption: string | undefined;

  constructor(private toastController: ToastController) {}

  async checkAnswer() {
    let message: string;

    if (this.selectedOption === 'verano') {
      message = '¡Respuesta correcta!';
    } else {
      message = 'Respuesta incorrecta. La estación del año actual no es verano.';
    }

    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });

    toast.present();
  }
}