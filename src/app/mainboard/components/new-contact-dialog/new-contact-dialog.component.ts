import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Word } from '../../model/word';
import { FormControl, Validators } from '@angular/forms';
import { WordService } from '../../services/word.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  name: string = ""
  bio: string = ""
  avatar: string = ""
  birthday: Date = new Date();


  nameCtrl = new FormControl('', [Validators.required,]);

  avatars = [
    'svg-1',
    'svg-2',
    'svg-3',
    'svg-4',
  ]

  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: WordService,) { }

  ngOnInit(): void {
  }

  save() {
    this.name = this.nameCtrl.value!;
    // const user = new Word(1, this.birthday, this.name, this.avatar, [], this.bio);
    // this.userService.addUser(user).then((u: any) => {
      // this.dialogRef.close(u);
    // })
  }

  dismiss() {
    this.dialogRef.close(null)
  }


  getErrorMessage() {
    return this.nameCtrl.hasError('required') ? 'You must enter a name' : '';
  }
}
