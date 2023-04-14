import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/mainmenu/login/login.component';
import { SignupComponent } from './user/mainmenu/signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainmenuComponent } from './user/mainmenu/mainmenu.component';
import { PersonaldetailsComponent } from './user/mainmenu/signup/personaldetails/personaldetails.component';
import { FormsModule } from '@angular/forms';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AtmComponent } from './user/atm/atm.component';
import { DepositeComponent } from './user/atm/deposite/deposite.component';
import { WithdrawComponent } from './user/atm/withdraw/withdraw.component';
import { StatementComponent } from './user/atm/statement/statement.component';
import { AboutComponent } from './user/mainmenu/about/about.component';
import { UserService } from './user.service';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        PagenotfoundComponent,
        MainmenuComponent,
        PersonaldetailsComponent,
        AdminloginComponent,
        AtmComponent,
        DepositeComponent,
        WithdrawComponent,
        StatementComponent,
        AboutComponent,
    ],
    providers: [UserService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule, 
    ]
})
export class AppModule { }
