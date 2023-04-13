import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Educação', url: './percurso1', icon: 'book' },
    { title: 'Desporto', url: './percurso2', icon: 'american-football' },
    { title: 'Voluntariado', url: '/percurso3', icon: 'body' },
    { title: 'Arcos de Valdevez', url: './terra1', icon: 'flag' },
    { title: 'Locais', url: './terra2', icon: 'business' },
    { title: 'Comida', url: './terra3', icon: 'fast-food' },
    { title: 'Estadia', url: './terra3', icon: "bed"},
  ];
  constructor() {}
}
