import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController,ModalController } from 'ionic-angular';
import { Http} from '@angular/http'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public tourss:any=[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public http:Http,public modalCtrl:ModalController) {
  this.http.get('http://srmpedia.esy.es/HackRaj/tourism_feed/show.php')
        .subscribe((res)=>{
        this.tourss=res.json();
        // console.log(this.articles);
      });
  }

  timealert(gettime:any){
    let alert = this.alertCtrl.create({
      title: 'Timings',
      subTitle: gettime ,
      buttons: ['OK']
    });
    alert.present();
  }

 Rjt(coup:any,coups:any,coupss:any,coupsss:any,info:any,infos:any)
{
  let modal = this.modalCtrl.create("Details",{name: coup,fds:coups,dfs:coupss,dfss:coupsss,infoss:info,infosss:infos});
  modal.present();
  console.log(coups);
}
Hloo()
{
this.navCtrl.push("Cfeed")
}
Hlo()
{
this.navCtrl.push("Crime-Feed")

}
Hlooo()
{
this.navCtrl.push("HeatmapsPage")
}
}
