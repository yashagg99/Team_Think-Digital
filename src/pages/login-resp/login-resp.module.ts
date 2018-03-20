import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginRespPage } from './login-resp';

@NgModule({
  declarations: [
    LoginRespPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginRespPage),
  ],
})
export class LoginRespPageModule {}
