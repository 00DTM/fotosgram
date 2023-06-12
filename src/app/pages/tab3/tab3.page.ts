import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  selectedOptions: { [key: string]: boolean } = {
    'Juan': false,
    'Jose': false,
    'Pepe': false,
    'Alvaro': false
  };

  constructor(private toastController: ToastController) {}

  async checkAnswer() {
    let message: string;

    const selectedValues = Object.values(this.selectedOptions);
    const selectedCount = selectedValues.filter(value => value === true).length;

    if (
      this.selectedOptions['Jose'] &&
      this.selectedOptions['Pepe'] &&
      selectedCount >= 2 &&
      selectedCount <= 4
    ) {
      message = 'Respuesta 3: ¡Correcta!';
    } else {
      message = 'Respuesta 3: Incorrecta. Las personas que se llaman José suelen ser conocidas como Jose o Pepe.';
    }

    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });

    toast.present();
  }
}