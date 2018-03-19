import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { OtpProvider } from '../../providers/otp/otp';

import { Http } from '@angular/http'
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 url;
 otp:number;
 public authkey:any="196805ApglVDJ8aVx75a787d58";
 public number;
  constructor(public navCtrl: NavController,private googlePlus:GooglePlus,private otpProvider:OtpProvider,public http:Http) {

  }

sendOtp(number){
this.http.get('http://control.msg91.com/api/sendotp.php?authkey='+this.authkey+'&mobile='+this.number).subscribe()
  console.log("used");
}
verifyOtp(otp:number){
this.http.get('https://control.msg91.com/api/verifyRequestOTP.php?authkey='+this.authkey+'&mobile='+this.number+'&otp='+this.otp).subscribe((res)=>{
    console.log()
  if(res.status==200)
    {this.navCtrl.setRoot(LoginPage)}
    else
    alert("Not Verified")})
}
}