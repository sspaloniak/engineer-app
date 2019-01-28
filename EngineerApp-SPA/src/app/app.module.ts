import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ErrorInterceptorPrivider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { MemberListComponent } from './members/member-list/member-list.component';
import { appRoutes } from './routes';
import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { DictionaryService } from './_services/dictionary.service';
import { CardReadersComponent } from './card-readers/card-readers.component';
import { CardComponent } from './card/card.component';
import { CardService } from './_services/card.service';


export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
    declarations: [
        AppComponent,
        ValueComponent,
        LoginComponent,
        RegisterComponent,
        MemberListComponent,
        MemberCardComponent,
        EventListComponent,
        HomeComponent,
        CardReadersComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['localhost:5000'],
                blacklistedRoutes: []
            }
        })
    ],
    providers: [
        AuthService,
        ErrorInterceptorPrivider,
        AlertifyService,
        AuthGuard,
        UserService,
        DictionaryService,
        CardService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }