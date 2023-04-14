import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-terra2',
  templateUrl: './terra2.page.html',
  styleUrls: ['./terra2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Terra2Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToPageHome(){
    this.navCtrl.navigateBack('/Home/inbox');
  }
  goToPageComer(){
    this.navCtrl.navigateForward('/terra3');
  }



}
