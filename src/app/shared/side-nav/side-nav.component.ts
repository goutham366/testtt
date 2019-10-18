import { Component, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  animal: string;
  name: string;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog, private router: Router, private authService: AuthService) { }
  
  ngOnInit() {
    this.isActive = false;
    this.collapsed = false; 
  }
  eventCalled() {
    this.isActive = !this.isActive;
}
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
}
openDialog(): void {
  this.authService.logout();  
  //this.router.navigate(['/login']);  
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '300px',
    // data: {name: this.name, animal: this.animal}
  });

  dialogRef.afterClosed().subscribe(result => {
    // this.animal = result;
  });
}

logout() {  
  console.log('logout');  
  this.authService.logout();  
  this.router.navigate(['/login']);  
}

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './sidenav-logout-confirm.html',
  styleUrls: ['./side-nav.component.scss']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
