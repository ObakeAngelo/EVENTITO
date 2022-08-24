import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'proyecto';
  textoCheck: string = 'no eri del colo';
  textoInput: string = '';
  checkRegistro = false;
  setregistro() {
    this.textoCheck = 'si eri del colo';
  }
  ngOnInit(): void {}
  onKeyUp(event: any) {
    this.textoInput += event.target.value + ' | ';
  }
  imgUpNeutral =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNjFSZofLQtLYQxgSbjLz9RAVHuHmjkxsKdvjZwRr&s';
  imgUpHover =
    'https://www.alairelibre.cl/noticias/site/artic/20210214/imag/foto_0000005020210214164902.jpg';

  imgPathUp = this.imgUpNeutral;
  currentImgUp = this.imgPathUp;
  public onUpHover(): void {
    this.imgPathUp = this.imgUpHover;
  }

  public onUpLeave(): void {
    this.imgPathUp = this.currentImgUp;
  }

  public onUp(): void {}
}
