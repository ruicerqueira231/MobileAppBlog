import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-terra3',
  templateUrl: './terra3.page.html',
  styleUrls: ['./terra3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Terra3Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToPageHome(){
    this.navCtrl.navigateBack('/Home/inbox');
  }
  goToPageAlojamento(){
    this.navCtrl.navigateForward('/terra4');
  }

}
