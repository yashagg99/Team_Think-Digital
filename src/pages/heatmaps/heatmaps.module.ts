import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeatmapsPage } from './heatmaps';

@NgModule({
  declarations: [
    HeatmapsPage,
  ],
  imports: [
    IonicPageModule.forChild(HeatmapsPage),
  ],
})
export class HeatmapsPageModule {}
