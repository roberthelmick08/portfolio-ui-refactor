import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Project } from './../../../model/Project';

@Component({
  selector: 'app-screenshot-dialog',
  templateUrl: './screenshot-dialog.component.html',
  styleUrls: ['./screenshot-dialog.component.scss']
})
export class ScreenshotDialogComponent {

  project: Project;
  imageIndex: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<ScreenshotDialogComponent>) {
    this.imageIndex = data.imageIndex;
    this.project = data.activeProject;
   }

  onNextSlide() {
    this.imageIndex++;
    console.log(this.imageIndex);
  }

  onPreviousSlide() {
    this.imageIndex--;
    console.log(this.imageIndex);
  }

}
