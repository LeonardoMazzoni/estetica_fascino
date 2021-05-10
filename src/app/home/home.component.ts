import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogoLogin} from './dialoghi-home';
import {DialogoSignin} from './dialoghi-home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(DialogoLogin);
  }

  openSignin(): void {
    const dialogRef = this.dialog.open(DialogoSignin);
  }
}
