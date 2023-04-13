import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-percurso-main',
  templateUrl: './percurso-main.page.html',
  styleUrls: ['./percurso-main.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PercursoMainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
