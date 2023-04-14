import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-terra4',
  templateUrl: './terra4.page.html',
  styleUrls: ['./terra4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Terra4Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToPageHome(){
    this.navCtrl.navigateBack('/Home/inbox');
  }

}
