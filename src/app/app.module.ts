import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from "@angular/fire/database";
import { NgxGaugeModule } from 'ngx-gauge';
import { StorageModule } from '@ngx-pwa/local-storage';

export const firebaseConfig = {
  apiKey: "AIzaSyBDXyJ_yCBCRoAsTm4zo8obkVPvm7tqOJ4",
  authDomain: "micro-f4698.firebaseapp.com",
  databaseURL: "https://micro-f4698.firebaseio.com",
  projectId: "micro-f4698",
  storageBucket: "micro-f4698.appspot.com",
  messagingSenderId: "805102491106",
  appId: "1:805102491106:web:a0b0295b444f41ec8715bb"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,NgxGaugeModule,
    IonicModule.forRoot(), AppRoutingModule, StorageModule.forRoot({ IDBNoWrap: true })],
    providers: [
      StatusBar,AngularFireDatabase,
      SplashScreen,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
