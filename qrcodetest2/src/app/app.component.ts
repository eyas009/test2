import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';

 var config = {
    apiKey: "AIzaSyCueBqUoH71uAJDpnThdQQiyA34ub1n8Gg",
    authDomain: "qr-code-test2.firebaseapp.com",
    databaseURL: "https://qr-code-test2.firebaseio.com",
    projectId: "qr-code-test2",
    storageBucket: "qr-code-test2.appspot.com",
    messagingSenderId: "991765727993"
  };
  firebase.initializeApp(config);

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

