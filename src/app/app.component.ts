import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'proyecto';
  textoCheck = 'no eri del colo';
  checkRegistro = false;
  setregistro() {
    this.textoCheck = 'si eri del colo';
  }
}
