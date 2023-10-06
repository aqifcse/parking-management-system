import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { ParkingFormComponent } from './parking-form/parking-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatTableModule } from '@angular/material/table';

import { NGX_MAT_DATE_FORMATS, NgxMatDateAdapter, NgxMatDateFormats, NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import {MAT_DATE_FORMATS, MatNativeDateModule} from '@angular/material/core';


import { HighchartsChartModule } from 'highcharts-angular';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule, DatePipe } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS, NgxMatMomentAdapter } from '@angular-material-components/moment-adapter';

const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: "l, LTS"
  },
  display: {
    dateInput: "l, LTS",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};


@NgModule({
  declarations: [
    AppComponent,
    ParkingListComponent,
    ParkingFormComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    HighchartsChartModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    DatePipe,
    MatDatepickerModule,
    MatTableModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    MatNativeDateModule,
    NgxMatNativeDateModule,
    NgxMatNativeDateModule
    
  ],
  providers: [
    // {
    //   provide: NgxMatDateAdapter,
    //   useClass: NgxMatMomentAdapter,
    //   deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS, NGX_MAT_DATE_FORMATS]
    // },
    { provide: MAT_DATE_FORMATS, useValue: NGX_MAT_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
