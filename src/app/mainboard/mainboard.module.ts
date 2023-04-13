import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainboardAppComponent } from './mainboard-app.component';
import { ToobarComponent } from './components/toobar/toobar.component';
import { WordListComponentComponent } from './components/word-list-component/word-list-component.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { WordService } from './services/word.service';
import { HttpClientModule } from '@angular/common/http';
import { WordTableComponent } from './components/word-list-component/word-table/word-table.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import { MatSortModule } from '@angular/material/sort';
import { WordsImportComponent } from './components/words-import/words-import.component';
import { WordsReadingRecordsComponent } from './components/words-reading-records/words-reading-records.component';
import { WordsReadingRecordsTableComponent } from './components/words-reading-records/words-reading-records-table/words-reading-records-table.component';


const routes: Routes = [
  {
    path: '', component: MainboardAppComponent,
    children: [
      // { path: '', component: ButtonsComponent },
      // { path: ':id', component: MainContentComponent },
      // { path: '', component: MainContentComponent },
      { path: 'wordList', component: WordListComponentComponent },
      { path: 'wordsImport', component: WordsImportComponent },
      { path: 'wordsRecord', component: WordsReadingRecordsComponent },
    ]
  },
  { path: '**', redirectTo: '' },
];


@NgModule({
  declarations: [
    MainboardAppComponent,
    ToobarComponent,
    WordListComponentComponent,
    SidenavComponent,
    WordTableComponent,
    NewContactDialogComponent,
    WordsImportComponent,
    WordsReadingRecordsComponent,
    WordsReadingRecordsTableComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  providers: [
    WordService,
  ]
})
export class MainboardModule { }
