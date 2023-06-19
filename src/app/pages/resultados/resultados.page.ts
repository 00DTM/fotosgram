import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  nota: number | undefined;
  mensaje: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // Se suscribe a los cambios de los parámetros en la URL utilizando ActivatedRoute.
      this.nota = +params['nota'];
      // Se obtiene el valor del parámetro 'nota' de la URL y se convierte en un número utilizando el operador +.
      this.setMensaje();
      // Se llama a la función setMensaje() para establecer el mensaje según el valor de "nota".
    });
  }

  setMensaje() {
    if (this.nota === 2) {
      this.mensaje = 'Eres un crack';
    } else if (this.nota === 1) {
      this.mensaje = 'No está mal';
    } else {
      this.mensaje = 'Eres un paquete';
    }
  }

  volverInicio() {
    this.router.navigate(['/testEjemplo']);
  }
}