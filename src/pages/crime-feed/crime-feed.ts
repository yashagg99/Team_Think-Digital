import { Component } from '@angular/core';
import {IonicPage,NavController,Loading, NavParams,AlertController,LoadingController,ActionSheetController,ToastController,Platform } from 'ionic-angular';
import{ Http,Headers,RequestOptions } from '@angular/http';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { FileTransfer,FileTransferObject} from '@ionic-native/file-transfer';
import { Geolocation } from '@ionic-native/geolocation';

import { NativeStorage } from '@ionic-native/native-storage';
/**
 * Generated class for the CrimeFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;

@IonicPage(
  {
    name:"Crime-Feed"
  }
)
@Component({
  selector: 'page-crime-feed',
  templateUrl: 'crime-feed.html',
})
export class CrimeFeedPage {
 heading:string;
  content:string;
  name:string;
  img_path:string;
  datetime:string;
    lastImage: string = null;
  loading: Loading;
public lat:any;
public long:any;
public myItem:any;
  public baseURI:any = "http://srmpedia.esy.es/HackRaj/";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http,
    public alertCtrl:AlertController,
    public camera:Camera,
    public actionSheetCtrl:ActionSheetController,
    public platform:Platform,
    public file:File,
    public filePath:FilePath,
    public toastCtrl:ToastController,
    public loadingCtrl:LoadingController,
    public transfer:FileTransfer,
    private geolocation: Geolocation,
    private nativeStorage: NativeStorage
    ) 
    {
this.geolocation.getCurrentPosition().then((resp) => {
  this.lat=resp.coords.latitude;
this.long=resp.coords.longitude;
  console.log(this.lat,this.long);
  this.nativeStorage.setItem('myItem',{namePath:this.lat})
  .then(
    () => alert("stored"),
    error => console.error('Error storing item', error)
  );
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {

data.coords.latitude;
data.coords.longitude;
});

}
  
  public event = {
    month: '2018-03-19',
    timeStarts: '19:00',

  }
 submitArticle(){
   alert(this.lat)
   alert(this.long)
       this.uploadImage()
    this.http.get('http://srmpedia.esy.es/HackRaj/save.php?heading='+this.heading+'&content='+this.content+'&img_path='+this.img_path+'&lat='+this.lat+'&longi='+this.long)
      .subscribe((res)=>{
        if(res.status==200)
        {
        
        }
        else
        {

        }
      });

  }
subnn()
{
  alert(this.lat)
}




 public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
   
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {  
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
           
          });
          
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
       
          }
        
      
      
      
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }
  // Create a new name for the image
private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n + ".jpg";
  return newFileName;
}
 
// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
  }, error => {
    this.presentToast('Error while storing file.');
  });
}
 
private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
 
// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}
public uploadImage() {
  // Destination URL
  var url = "http://srmpedia.esy.es/uploads.php";
 
  // File for Upload
  var targetPath = this.pathForImage(this.lastImage);
 
  // File name only
  var filename = this.lastImage;
 
  var options = {
    fileKey: "file",
    fileName: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'fileName': filename}
  };
 
  const fileTransfer: FileTransferObject = this.transfer.create();
 
  this.loading = this.loadingCtrl.create({
    content: 'Uploading...',
  });
  this.loading.present();
 
  // Use the FileTransfer to upload the image
  fileTransfer.upload(targetPath, url, options).then(data => {

   let body:string = "img_path="+encodeURIComponent(this.lastImage),
    type    :string = "application/x-www-form-urlencoded; charset=UTF-8",
    headers :any    = new Headers({'Content-Type':type}),
    options :any    = new RequestOptions({headers:headers}),
    url     :any    = this.baseURI + 'save.php';
this.http.post(url,body,options)
    .subscribe((res)=>{
      if(res.status === 200){
      console.log("Submitted");
      } else{
        alert("Failed ..!!");
      }
    });
    this.loading.dismissAll()
    this.presentToast('Image succesful uploaded.');
    // this.navCtrl.push("Cfeed");+
  }, err => {
    this.loading.dismissAll()
    this.presentToast('Error while uploading file 2.');
  });
  
}
  getPhotos = (post) => {
    if (!post.attachments)
      return [];

    let attachments = post.attachments.data[0].subattachments ||
                      post.attachments;

    return attachments.data
      .filter(x => x.type == "photo")
      .map(x => x.media.image);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrimeFeedPage');
  }

}
