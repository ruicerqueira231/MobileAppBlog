import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-terra-main',
  templateUrl: './terra-main.page.html',
  styleUrls: ['./terra-main.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TerraMainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
