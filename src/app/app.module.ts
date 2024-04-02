import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from "@angular/common/http"
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore'; 
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { DiscountComponent } from './discount/discount.component';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user/user.service';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    ContactComponent,
    DiscountComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule,
    FirebaseAppModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp({"projectId":"dimensional-f4ccd","appId":"1:49173302788:web:8c898b6ae87165f7906f51","storageBucket":"dimensional-f4ccd.appspot.com","apiKey":"AIzaSyBiWN5CnkBy3OqC_grB7nAyU59FJ6iNRb8","authDomain":"dimensional-f4ccd.firebaseapp.com","messagingSenderId":"49173302788"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
