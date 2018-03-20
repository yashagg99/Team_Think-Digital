import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';
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
username:string;
password:string;
conpassword:string;
email:string;
age:number;
formgroup:FormGroup;
name:AbstractControl;
pass:AbstractControl;
cpass:AbstractControl;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder: FormBuilder) {
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
      alert('Both the password should be same')
    }
    else{
      alert('Success')
    }
  }
}