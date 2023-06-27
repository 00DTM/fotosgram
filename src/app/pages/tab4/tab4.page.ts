// encuesta.component.ts
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  respuesta: string | null = null;
  contadorRespuestas: { zurdo: number; diestro: number } = { zurdo: 0, diestro: 0 };

  constructor(private http: HttpClient) {}

  enviarRespuestas() {
    if (this.respuesta) {
      // Incrementa el contador de respuestas
      if (this.respuesta === 'zurdo') {
        this.contadorRespuestas.zurdo++;
      } else if (this.respuesta === 'diestro') {
        this.contadorRespuestas.diestro++;
      }

      // Enviar las respuestas al servidor
      this.http.post('http://localhost:8080/endpoint', this.contadorRespuestas)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error('Error al enviar las respuestas:', error);
            return throwError('Ha ocurrido un error. Por favor, inténtalo nuevamente.'); // Puedes personalizar el mensaje de error si lo deseas
          })
        )
        .subscribe(
          (response: any) => { // Utiliza el tipo de datos adecuado según la estructura de la respuesta JSON
            console.log('Respuesta del servidor:', response);
            // Puedes mostrar un mensaje en la interfaz de usuario
            alert('Respuestas enviadas y contador actualizado, ¡gracias por participar!');
          },
          (error) => {
            console.error('Error al enviar las respuestas:', error);
          }
        );
    } else {
      console.log('Por favor, selecciona una opción.');
    }
  }

  leerJSON() {
    this.http.get('http://localhost:8080/data.json').subscribe(
      (data) => {
        console.log('Contenido del JSON:', data);
      },
      (error) => {
        console.error('Error al leer el JSON:', error);
      }
    );
  }
}