import { Injectable } from '@angular/core';
import { Word } from '../model/word';
import { Record } from '../model/record';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {


  // userById(id: number): Word {

  //   if (this.dataStore.words.find(x => x.id == id) == undefined) {
  //     throw Error("NO user's id is : " + id);
  //   }
  //   return this.dataStore.words.find(x => x.id == id)!;
  // }

  private _words: BehaviorSubject<Word[]>;
  private _records: BehaviorSubject<Record[]>;

  private dataStore: {
    words: Word[],
    records: Record[],
  }

  constructor(private http: HttpClient) {
    this.dataStore = { words: [], records: [] };
    this._words = new BehaviorSubject<Word[]>([]);
    this._records = new BehaviorSubject<Record[]>([]);
  }

  get words(): Observable<Word[]> {
    return this._words.asObservable();
  }

  get records(): Observable<Record[]> {
    return this._records.asObservable();
  }

  public loadAll() {
    const wordListUrl = 'http://localhost:8080/api/wordList';
    const recordUrl = 'http://localhost:8080/api/record';

    this.http.get<Record[]>(recordUrl).subscribe({
      next: data => {
        this.dataStore.records = data;
        this._records.next(Object.assign({}, this.dataStore).records);
      },
      error: error => {
        console.log("Failed to fetch records: " + error);
        console.log(error);
      },
    })

    return this.http.get<Word[]>(wordListUrl).subscribe({
      next: data => {
        this.dataStore.words = data;
        this._words.next(Object.assign({}, this.dataStore).words);
        // console.log(this._words);
      },
      error: error => {
        console.log("Failed to fetch words: " + error);
        console.log(error);
      }
    })
  }
}
