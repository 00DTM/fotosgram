import { Component } from '@angular/core';

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
  mensajeRespuesta: string | undefined;
  mensajeRespuestaCorta: string | undefined;

  constructor() {}

  enviarRespuestas() {
    // Aquí puedes agregar la lógica para manejar las respuestas enviadas por el usuario
  }
}