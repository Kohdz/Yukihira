import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user: any;

  // when the form is submitted, these are instructions
  constructor(public dialogRef: MatDialogRef<LoginComponent>) {
    this.user =  {username: '', password: '', remember: false };

   }

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user)
    // this line of code closes the dialog box
    this.dialogRef.close();
  }


}
