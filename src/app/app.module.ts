import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoCardComponent } from './components/contato-card/contato-card.component';
import { ApresentacaoCardComponent } from './components/apresentacao-card/apresentacao-card.component';
import { ProjetoCardComponent } from './components/projeto-card/projeto-card.component';
import { RodapeBarComponent } from './components/rodape-bar/rodape-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    ContatoCardComponent,
    ApresentacaoCardComponent,
    ProjetoCardComponent,
    RodapeBarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
