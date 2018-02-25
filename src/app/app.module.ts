import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'


// service
import {NotesServices} from '../services/notes.services';
// pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { DetailPage } from '../pages/detail/detail';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCpTTC60cKaQ2K_N4XX2GUWGJeyYjKcBX4",
  authDomain: "notiionic.firebaseapp.com",
  databaseURL: "https://notiionic.firebaseio.com",
  storageBucket: "notiionic.appspot.com",
  messagingSenderId: '478996604377'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage, DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotesServices,
    AngularFireDatabase,
  ]
})
export class AppModule {}
