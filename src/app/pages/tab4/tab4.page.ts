import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  pregunta1: string | undefined;
  pregunta2: string | undefined;

  constructor(private router: Router) {}

  enviarRespuestas() {
    let nota = 0;

    if (this.pregunta1 === 'Sobresaliente') {
      nota++;
    }

    if (this.pregunta2 === 'Daniel') {
      nota++;
    }

    this.router.navigate(['/resultados'], { queryParams: { nota: nota } });
  }
}