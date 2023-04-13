import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Word } from 'src/app/mainboard/model/word';
import { Record } from 'src/app/mainboard/model/record';

@Component({
  selector: 'app-words-reading-records-table',
  templateUrl: './words-reading-records-table.component.html',
  styleUrls: ['./words-reading-records-table.component.scss']
})
export class WordsReadingRecordsTableComponent implements OnInit {

  @Input()
  records!: Record[];

  docs: string[] = [];
  loaded: boolean = false;


  displayedColumns: string[] = ['Word'];
  dataSource!: MatTableDataSource<string>;

  selectedSortOption: string = 'word';


  constructor() {
    
  }

  ngOnInit(): void {
    this.records.forEach(
      (record) => {
        this.docs.push(
          record.word + " "
          + record.year + "/"
          + record.month + "/"
          + record.day);
      }
    )
    this.dataSource = new MatTableDataSource<string>(this.docs);
    console.log("words: ", this.records);
    console.log(this.dataSource.data);
  }


  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
