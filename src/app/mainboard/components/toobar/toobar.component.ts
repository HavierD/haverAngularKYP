import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar, TextOnlySnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toobar',
  templateUrl: './toobar.component.html',
  styleUrls: ['./toobar.component.scss']
})
export class ToobarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,) { }

  ngOnInit(): void {
  }

  openAddContactDialog(): void {
    let dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    })
    dialogRef.afterClosed().subscribe(
      result => {
        console.log("the dialog was closed", result);
        if (result) {
          this.openSnackBar("Contact added", "Navigate")
            .onAction()
            .subscribe(
              () => {
                this.router.navigate(['/contactmanager', result.id])
              }
            )
        }
      }
    )
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<TextOnlySnackBar> {
    return this._snackBar.open(message, action, {
      duration: 2000
    });
  }

}
