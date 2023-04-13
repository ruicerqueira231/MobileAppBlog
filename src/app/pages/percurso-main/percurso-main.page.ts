import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-percurso-main',
  templateUrl: './percurso-main.page.html',
  styleUrls: ['./percurso-main.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PercursoMainPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goToPageEducacao(){
    this.navCtrl.navigateForward('/percurso1');
  }

  goToPageDesporto(){
    this.navCtrl.navigateForward('/percurso2');
  }

  goToPageVoluntariado(){
    this.navCtrl.navigateForward('/percurso3');
  }

  ngOnInit() {
  }

}
