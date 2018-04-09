import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  codeItems: FirebaseListObservable<any[]>;
  newItem = '';
 
  constructor(private barcodeScanner: BarcodeScanner,
  	public navCtrl: NavController,
  	public firebaseProvider: FirebaseProvider,) {
  	this.codeItems = this.firebaseProvider.getCodeItems();
  	 }
 
  createCode() {
    this.createdCode = this.qrData;
  }
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  addItem(){
  	this.firebaseProvider.addItem(this.newItem);
  }

  removeItem(id){
  	this.firebaseProvider.removeItem(id);
  }
 
}