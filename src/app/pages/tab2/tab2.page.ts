import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  selectedOption1: string | undefined;
  selectedOptions: { [key: string]: boolean } = {
    'Juan': false,
    'Jose': false,
    'Pepe': false,
    'Alvaro': false
  };

  constructor(private toastController: ToastController) {}

  async checkAnswers() {
    let message: string = '';

    // Verificar la respuesta de la Pregunta 1
    if (this.selectedOption1 === 'Verano') {
      message += 'Respuesta 1: ¡Correcta!\n';
    } else {
      message += 'Respuesta 1: Incorrecta. La estación del año en la que nos encontramos es Verano.\n';
    }

    // Verificar la respuesta de la Pregunta 3
    const selectedValues = Object.values(this.selectedOptions);
    const selectedCount = selectedValues.filter(value => value === true).length;

    if (
      this.selectedOptions['Jose'] &&
      this.selectedOptions['Pepe'] &&
      selectedCount >= 2 &&
      selectedCount <= 4
    ) {
      message += 'Respuesta 3: ¡Correcta!';
    } else {
      message += 'Respuesta 3: Incorrecta. Las personas que se llaman José suelen ser conocidas como Jose o Pepe.';
    }

    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });

    toast.present();
  }
}