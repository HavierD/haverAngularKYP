import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WordListComponentComponent } from './mainboard/components/word-list-component/word-list-component.component';
import { ButtonsComponent } from './demo/buttons/buttons.component';

const routes: Routes = [
  { path: 'test1', component: ButtonsComponent },
  { path: 'mainboard', loadChildren: () => import('./mainboard/mainboard.module').then(m => m.MainboardModule) },
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  { path: '**', redirectTo: 'mainboard' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
