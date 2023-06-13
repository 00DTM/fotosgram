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
      this.nota = +params['nota'];
      this.setMensaje();
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