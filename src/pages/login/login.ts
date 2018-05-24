import { SignupPage } from './../signup/signup';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData: any;
  userData = { "username": "kantanand", "password": "abc123" };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    // Your app login API web service call triggers
    if(this.userData.username==='kantanand' && this.userData.password==='abc123'){
      this.navCtrl.push(TabsPage, {}, { animate: false });
    } else {
      alert("check credentials !");
    }
  }

  signup() {
    this.navCtrl.push(SignupPage, {}, {animate: false });
  }

}
