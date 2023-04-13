import { Component, Input, OnInit } from '@angular/core';
import { Record } from '../../model/record';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../../services/word.service';

@Component({
  selector: 'app-words-reading-records',
  templateUrl: './words-reading-records.component.html',
  styleUrls: ['./words-reading-records.component.scss']
})
export class WordsReadingRecordsComponent implements OnInit {


  // words: Observable<Word[]>;
  records!: Record[];

  constructor(private route: ActivatedRoute, private service: WordService) {

  }

  ngOnInit(): void {
    this.service.records.subscribe(
      records => {
        console.log("records", records);
        this.records = records;
        console.log("records", this.records);
      }
    )

    this.service.loadAll();
  }

  ngAfterViewInit() {
  }

}
