import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any;

    pages: Array<{icon: string, component: any}>;

  constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {
     this.initializeApp();
      this.pages = [
      { icon: 'home', component: HomePage },
      { icon: 'pen', component: "" },
      { icon: 'share', component: "Cfeed" }
      // { title: 'Heat Maps', component: "HeatmapsPage" }
    ];

   
  }

 initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    //  this.rootPage=HomePage;
      this.rootPage="HeatmapsPage";
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

