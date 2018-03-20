import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{ HttpModule,Http,Headers,RequestOptions } from '@angular/http';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { FileTransfer,FileTransferObject} from '@ionic-native/file-transfer';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeStorage } from '@ionic-native/native-storage';
// import { Geofence } from '@ionic-native/geofence';
import { OtpProvider } from '../providers/otp/otp';
import { GoogleMaps} from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileTransfer,
    GoogleMaps,
    NativeStorage,
    Camera,
    FilePath,
    HttpModule,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OtpProvider
  ]
})
export class AppModule {}
