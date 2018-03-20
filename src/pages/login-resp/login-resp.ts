import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController, AlertController } from 'ionic-angular';
import { OtpProvider } from '../../providers/otp/otp';
import { ToastController } from 'ionic-angular';
import { Http } from '@angular/http'
/**
 * Generated class for the LoginRespPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:"Logres"
  }
)
@Component({
  selector: 'page-login-resp',
  templateUrl: 'login-resp.html',
})
export class LoginRespPage {

 url;
otp:number;
public authkey:any="196805ApglVDJ8aVx75a787d58";
public number;
constructor(public navCtrl: NavController,private otpProvider:OtpProvider,public http:Http,private alertCtrl:AlertController,private toastCtrl: ToastController) {

}
push(){
  this.navCtrl.push("LoginPage")
}
sendOtp(number){
if(/^[0-9]{10,10}$/.test(this.number))
{
this.http.get('http://control.msg91.com/api/sendotp.php?authkey='+this.authkey+'&mobile='+this.number).map(res => {
console.log(res.headers); // Print http header
return res.json();
}).subscribe(res => {
console.log(res);
});
this.showAlert();
}
else{
this.presentToast('Incorrect Number');
}
}
/*verifyOtp(otp:number){
this.http.get('https://control.msg91.com/api/verifyRequestOTP.php?authkey='+this.authkey+'&mobile='+this.number+'&otp='+this.otp).subscribe((res)=>{
console.log()
if(res.status==200)
{this.navCtrl.setRoot(LoginPage)}
else
alert("Not Verified")})
}*/
showAlert(){
let alert = this.alertCtrl.create({
title: 'Verify OTP',
inputs: [
{
name: 'otp',
placeholder: 'OTP',
type:'password'
},
],
buttons: [

{
text: 'Cancel',
role: 'cancel',
handler: data => {
console.log('Cancel clicked');
}
},
{
text: 'Verify',                                                                                                                
handler: data => {
  console.log(data.otp)
this.http.get('https://control.msg91.com/api/verifyRequestOTP.php?authkey='+this.authkey+'&mobile='+this.number+'&otp='+data.otp).subscribe((res)=> {
if(res.status==200)
{
  this.navCtrl.setRoot("LoginPage");
}
else
{
  this.presentToast('Invalid OTP');

}
});
}
}
]
});
alert.present();
}
presentToast(message:string,) {
let toast = this.toastCtrl.create({
message: message,
duration: 3000,
position: 'top'
});

toast.onDidDismiss(() => {
console.log('Dismissed toast');
});

toast.present();
}
}
