import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-terra1',
  templateUrl: './terra1.page.html',
  styleUrls: ['./terra1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Terra1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
