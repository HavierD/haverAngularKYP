import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { WordService } from '../../services/word.service';
import { Observable } from 'rxjs';
import { Word } from '../../model/word';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';


const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall!: boolean;

  words: Observable<Word[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private wordService: WordService,
    private router: Router,
  ) {
    this.words = this.wordService.words;
  }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
    // this.wordService.loadAll();

    this.words.subscribe(
      data => {
        if (data.length > 0) {
          // this.router.navigate(['/contactmanager', data[0].id]);
        }
      }
    );

    this.router.events.subscribe(
      () => {
        if (this.isScreenSmall) {
          this.sidenav.close();
        }
      }
    )
  }

}
