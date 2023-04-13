import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-terra-main',
  templateUrl: './terra-main.page.html',
  styleUrls: ['./terra-main.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TerraMainPage implements OnInit {

  constructor(private navCtrl: NavController){ }

  goToPageTerra1(){
    this.navCtrl.navigateForward('/terra1');
  }
  goToPageTerra2(){
    this.navCtrl.navigateForward('/terra2');
  }
  goToPageTerra3(){
    this.navCtrl.navigateForward('/terra3');
  }
  goToPageTerra4(){
    this.navCtrl.navigateForward('/terra4');
  }

  ngOnInit() {
  }

}
