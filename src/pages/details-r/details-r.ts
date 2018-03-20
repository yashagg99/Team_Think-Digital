import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http'

/**
 * Generated class for the DetailsRPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:"Details"
  }
)
@Component({
  selector: 'page-details-r',
  templateUrl: 'details-r.html',
})
export class DetailsRPage {
public cool:any;
public fool:any;
public gool:any;
public hool:any;
public jool:any;
public lool:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {

 this.cool = this.navParams.get('name');
    this.fool = this.navParams.get('fds');
    this.gool = this.navParams.get('dfs');
    this.hool = this.navParams.get('dfss');
    this.jool = this.navParams.get('infoss');
    this.lool = this.navParams.get('infosss');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsRPage');
  }

}
