import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Word } from '../../../model/word';

@Component({
  selector: 'app-word-table',
  templateUrl: './word-table.component.html',
  styleUrls: ['./word-table.component.scss']
})
export class WordTableComponent implements OnInit, AfterViewInit {

  @Input()
  words!: Word[];
  loaded: boolean = false;


  displayedColumns: string[] = ['Word', 'Repetition', 'Last Meet Date',];
  dataSource!: MatTableDataSource<Word>;

  selectedSortOption: string = 'word';


  items: any[] = []; // assume this is your array of items

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Word>(this.words);
    console.log("words: ", this.words);
    console.log(this.dataSource.data);
  }


  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applySort(value: String) {
    switch (value) {
      case "wordAlphabet":
        this.words.sort(this.alphabetSorter);
        break;
      case "wordAlphabetReverse":
        this.words.sort(this.reverseAlphabetSorter);
        break;
      case "repetitionLowToHigh":
        this.words.sort(this.repetitionLowToHighSorter);
        break;
      case "repetitionHighToLow":
        this.words.sort(this.repetitionHighToLowSorter);
        break;
    }
    console.log(this.words);
    this.ngOnInit();
  }

  alphabetSorter(a: Word, b: Word): number {
    if (a.word < b.word) {
      return -1;
    } else if (a.word > b.word) {
      return 1;
    } else {
      return 0;
    }
  }

  reverseAlphabetSorter(a: Word, b: Word): number {
    if (a.word > b.word) {
      return -1;
    } else if (a.word < b.word) {
      return 1;
    } else {
      return 0;
    }
  }
  repetitionLowToHighSorter(a: Word, b: Word): number {
    if (a.repetition < b.repetition) {
      return -1;
    } else if (a.repetition > b.repetition) {
      return 1;
    } else {
      return 0;
    }
  }
  repetitionHighToLowSorter(a: Word, b: Word): number {
    if (a.repetition > b.repetition) {
      return -1;
    } else if (a.repetition < b.repetition) {
      return 1;
    } else {
      return 0;
    }
  }

}
