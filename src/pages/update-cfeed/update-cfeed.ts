import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the UpdateCfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:"Cfeed"
  }
)
@Component({
  selector: 'page-update-cfeed',
  templateUrl: 'update-cfeed.html',
})
export class UpdateCfeedPage {
public feedss:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
      this.http.get('http://srmpedia.esy.es/HackRaj/show.php')
        .subscribe((res)=>{
        this.feedss=res.json();
        // console.log(this.articles);
      });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateCfeedPage');
  }

}
