import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { ListCutomersComponent } from './list-cutomers/list-cutomers.component';
import { RegisterComponent } from './register/register.component';
import { UserloginComponent } from './userlogin/userlogin.component';


const routes: Routes = [

  { 
    path: 'app-home', component: HomeComponent 
  },
  {
    path: 'app-userlogin', component : UserloginComponent
  },
  {
    path: 'app-authenticate', component:AuthenticateComponent
  },
  {
    path : 'app-register', component : RegisterComponent
  },
  {
    path:'list-customers',component:ListCutomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
