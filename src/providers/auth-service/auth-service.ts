import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl = 'http://yourdomain.com/PHP-Slim-Restful/api/';

@Injectable()
export class AuthServiceProvider {
  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      this.http.post(
        apiUrl + type, 
        JSON.stringify(credentials), 
        { headers: headers }
      ).subscribe(res => {
        console.log("what is res: ", res);
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }

}
