import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FallecidoComponent } from './fallecido/fallecido.component';
import { EdadComponent } from './edad/edad.component';
import { CumpleComponent } from './cumple/cumple.component';
import { NocumpleComponent } from './nocumple/nocumple.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes =
  [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'fallecido', component: FallecidoComponent },
    { path: 'edad', component: EdadComponent },
    { path: 'cumple', component: CumpleComponent },
    { path: 'nocumple', component: NocumpleComponent },

  ];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FallecidoComponent,
    EdadComponent,
    CumpleComponent,
    NocumpleComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
