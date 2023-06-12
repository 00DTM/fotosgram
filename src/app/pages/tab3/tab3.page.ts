import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  selectedRating: number | undefined;
  selectedValue: number | undefined;

  constructor() {}

  updateSelectedValue(event: any) {
    this.selectedValue = event.detail.value;
  }

  enviarRespuesta() {
    // Aquí puedes agregar la lógica para manejar la respuesta enviada por el usuario
  }
}