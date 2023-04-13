import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../../services/word.service';
import { Word } from '../../model/word';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-word-list-component',
  templateUrl: './word-list-component.component.html',
  styleUrls: ['./word-list-component.component.scss']
})
export class WordListComponentComponent implements OnInit, AfterViewInit {

  // words: Observable<Word[]>;
  words!: Word[];

  constructor(private route: ActivatedRoute, private service: WordService) {

  }

  ngOnInit(): void {
    this.service.words.subscribe(
      wordList => {
        console.log("wordList", wordList);
        this.words = wordList;
      }
    )
    this.service.loadAll();
  }

  ngAfterViewInit() {
  }

}
