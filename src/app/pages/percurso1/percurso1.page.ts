import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-percurso1',
  templateUrl: './percurso1.page.html',
  styleUrls: ['./percurso1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Percurso1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
