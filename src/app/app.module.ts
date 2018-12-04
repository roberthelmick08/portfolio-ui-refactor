import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ScreenshotDialogComponent } from './home/screenshot-dialog/screenshot-dialog.component';
import { HomeComponent } from './home/home.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatDialogModule,
  MatMenuModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScreenshotDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    ScrollToModule.forRoot()
  ],
  entryComponents: [
    ScreenshotDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
