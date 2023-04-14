import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/mainmenu/login/login.component';
import { MainmenuComponent } from './user/mainmenu/mainmenu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './user/mainmenu/signup/signup.component';
import { RegisterlistComponent } from './admin/registerlist/registerlist.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { PersonaldetailsComponent } from './user/mainmenu/signup/personaldetails/personaldetails.component';
import { AtmComponent } from './user/atm/atm.component';
import { DepositeComponent } from './user/atm/deposite/deposite.component';
import { WithdrawComponent } from './user/atm/withdraw/withdraw.component';
import { StatementComponent } from './user/atm/statement/statement.component';
import { AboutComponent } from './user/mainmenu/about/about.component';

const routes: Routes = [
  {path: 'personaldetails', component: PersonaldetailsComponent},
  {path: 'registerlist', component: RegisterlistComponent},
  {path: 'atm', component:AtmComponent},
  {path: 'mainmenu', component: MainmenuComponent},
  {path: 'mainmenu', component: MainmenuComponent,children:[
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'adminlogin', component: AdminloginComponent},
    {path: 'about', component:AboutComponent},
  ]},
  {path: "atm",component:AtmComponent,children:[
    {path: "deposite",component:DepositeComponent},
    {path: "withdraw",component: WithdrawComponent},
    {path: 'statement',component: StatementComponent}
  ]},
  {path: '', redirectTo: 'mainmenu', pathMatch: 'full'},
  //this is page not found link always mention in footer.
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
