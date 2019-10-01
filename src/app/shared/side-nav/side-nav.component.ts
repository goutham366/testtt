import { Component, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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

  constructor(public dialog: MatDialog) { }
  
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
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '300px',
    // data: {name: this.name, animal: this.animal}
  });

  dialogRef.afterClosed().subscribe(result => {
    // this.animal = result;
  });
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
