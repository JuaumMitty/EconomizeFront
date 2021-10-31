import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarExtComponent } from './components/public/navbar-ext/navbar-ext.component';
import { HomeComponent } from './components/public/home/home.component';
import { CadastroComponent } from './components/public/cadastro/cadastro.component';
import { RodapeComponent } from './components/public/rodape/rodape.component';
import { HeroComponent } from './components/public/home/hero/hero.component';
import { LoginComponent } from './components/public/home/login/login.component';
import { SobreComponent } from './components/public/home/sobre/sobre.component';
import { PerfilComponent } from './components/private/perfil/perfil.component';
import { NavbarIntComponent } from './components/private/navbar-int/navbar-int.component';
import { TransacoesComponent } from './components/private/transacoes/transacoes.component';
import { InvestimentosComponent } from './components/private/investimentos/investimentos.component';

// Bibliotecas
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AuthguardService } from './services/authguard.service';
import { UserNotAuthComponent } from './components/public/user-not-auth/user-not-auth.component';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    AppComponent,
    NavbarExtComponent,
    HomeComponent,
    CadastroComponent,
    RodapeComponent,
    HeroComponent,
    LoginComponent,
    SobreComponent,
    PerfilComponent,
    NavbarIntComponent,
    TransacoesComponent,
    InvestimentosComponent,
    UserNotAuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ChartModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
