import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the OtpProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OtpProvider {
  authkey='196805ApglVDJ8aVx75a787d58';
  url;
  constructor(public http:Http) {
    console.log('Hello OtpProvider Provider');
    
  }
  sendOtp(){
    this.http.get('http://control.msg91.com/api/sendotp.php?authkey=196805ApglVDJ8aVx75a787d58&mobile=8617362801');
    console.log("used");
  }
  verifyOtp(otp){
    this.url='https://control.msg91.com/api/verifyRequestOTP.php?authkey=196805ApglVDJ8aVx75a787d58&otp'+'='+otp;
  }
}