import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IphoneComponent } from './navigatingcomponent/iphone/iphone.component';
import { HelpComponent } from './navigatingcomponent/help/help.component';
import { compileClassMetadata } from '@angular/compiler';
import { AndroidComponent } from './navigatingcomponent/android/android.component';
import { CompanyComponent } from './navigatingcomponent/company/company.component';
import { SigninComponent } from './navigatingcomponent/signin/signin.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'iphone',component:IphoneComponent},
  {path:'android',component:AndroidComponent},
  {path:'help',component:HelpComponent},
  {path:'company',component:CompanyComponent},
  {path:'signin',component:SigninComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
