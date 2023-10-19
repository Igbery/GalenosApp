import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormControl, FormsModule, NgControl } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore} from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              { provide: NgControl, useValue: new FormControl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
