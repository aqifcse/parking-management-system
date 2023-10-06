import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-parking-form',
  templateUrl: './parking-form.component.html',
  styleUrls: ['./parking-form.component.css']
})
export class ParkingFormComponent {
   

  formData = {}
  vehicleLicenseNumber: string = '';
  selectedVehicleType: number = 1;
  vehicleOwnerName: string = '';
  vehicleOwnerPhone: string = '';
  status: number = 1;
  carOwnerAddress: string = '';
  carEntryDateTime: any;
  carExitDateTime: any;
  parkingCharge: number = 0.0;

  pickerEntry: any;
  pickerExit: any;

  @ViewChild('picker1', { static: true }) picker1: any;
  @ViewChild('picker2', { static: true }) picker2: any;

  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate!: Date;
  public maxDate!: Date;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  public disableMinute = false;
  public hideTime = false;

  public dateControl = new FormControl(new Date());

  public options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' }
  ];

  public listColors = ['primary', 'accent', 'warn'];

  public stepHours = [1, 2, 3, 4, 5];
  public stepMinutes = [1, 5, 10, 15, 20, 25];
  public stepSeconds = [1, 5, 10, 15, 20, 25];





  saveToJson() {

    let datePipe = new DatePipe('en-US')

    this.carEntryDateTime = datePipe.transform(this.carEntryDateTime, "dd-MM-17T12:09:36Z");
    this.carExitDateTime = datePipe.transform(this.carExitDateTime, "2010-08-17T12:09:36Z");

    this.formData = {
      "vehicle_license_number": this.vehicleLicenseNumber,
      "vehicle_type": this.selectedVehicleType,
      "vehicle_owner_name": this.vehicleOwnerName,
      "vehicle_owner_phone": this.vehicleOwnerPhone,
      "status": this.status,
      "car_owner_Address": this.carOwnerAddress,
      "car_entry_date_time": this.carEntryDateTime,
      "car_exit_date_time": this.carExitDateTime,
      "parking_charge": this.parkingCharge
    }
    // Convert formData to JSON string
    const jsonStr = JSON.stringify(this.formData);
    
    // Save to local storage
    localStorage.setItem('jsonData', jsonStr);

    
  }
}
