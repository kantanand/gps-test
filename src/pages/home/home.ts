import { AboutPage } from './../about/about';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDetails = {
    user_id: '2004828',
    name: 'kantanand',
    email: 'kantanand.usk@gmail.com',
    token: 'JWT lsjdfljdsf.sjdlfdjsf.sdljsldjf',
  };
  responseData: any;

  userPostData = { "user_id": "", "token": "" };

  constructor(
    public navCtrl: NavController,
    public app: App,
    public authService: AuthServiceProvider
  ) {
    // const data = JSON.parse(localStorage.getItem('userData'));
    // this.userDetails = data.userData;
    // this.userPostData.user_id = this.userDetails.user_id;
    // this.userPostData.token = this.userDetails.token;
  }

  backToWelcome() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout() {
    // Remove API token
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }

  go_to_about() {
    this.navCtrl.push(AboutPage);
  }

}
