import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './commocomponets/navbar/navbar.component';
import { FooterComponent } from './commocomponets/footer/footer.component';
import { IphoneComponent } from './navigatingcomponent/iphone/iphone.component';
import { AndroidComponent } from './navigatingcomponent/android/android.component';
import { HelpComponent } from './navigatingcomponent/help/help.component';
import { CompanyComponent } from './navigatingcomponent/company/company.component';
import { SigninComponent } from './navigatingcomponent/signin/signin.component';
import { BannerComponent } from './welcome/banner/banner.component';
import { LovedComponent } from './welcome/loved/loved.component';
import { MobilesecurityComponent } from './welcome/mobilesecurity/mobilesecurity.component';
import { FreedomComponent } from './welcome/freedom/freedom.component';
import { StoryComponent } from './welcome/story/story.component';
import { SpyingComponent } from './welcome/spying/spying.component';
import { InsightComponent } from './welcome/insight/insight.component';
import { CardsComponent } from './commoncomponet/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    NavbarComponent,
    FooterComponent,
    IphoneComponent,
    AndroidComponent,
    HelpComponent,
    CompanyComponent,
    SigninComponent,
    BannerComponent,
    LovedComponent,
    MobilesecurityComponent,
    FreedomComponent,
    StoryComponent,
    SpyingComponent,
    InsightComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
