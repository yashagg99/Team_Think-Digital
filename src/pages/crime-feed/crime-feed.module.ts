import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrimeFeedPage } from './crime-feed';

@NgModule({
  declarations: [
    CrimeFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(CrimeFeedPage),
  ],
})
export class CrimeFeedPageModule {}
