import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';

import { HomePage} from '../../pages/home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:"LoginPage"
  }
)
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
username:string;
password:number;
conpassword:number;
email:string;
age:number;
formgroup:FormGroup;
name:AbstractControl;
pass:AbstractControl;
cpass:AbstractControl;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder: FormBuilder,private alertCtrl:AlertController) {
    this.formgroup=formbuilder.group({
      name:['',Validators.required],
    pass:['',Validators.required],
    cpass:['',Validators.required]
    });
this.name=this.formgroup.controls['name'];
this.pass=this.formgroup.controls['pass'];
this.cpass=this.formgroup.controls['cpass'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  saveform(){
    if(this.conpassword!=this.password)
    {
      this.showalert('Error','Both the password should be same')
    }
    else{
     this.showalert('Voila!','Success')
     this.navCtrl.push(HomePage);
    }
  }
  showalert(title:string,message:string) {
    let alertBox = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Ok']
    });
    alertBox.present();
  }
}