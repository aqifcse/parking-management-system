import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

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




  saveToJson() {

    let datePipe = new DatePipe('en-US')

    this.carEntryDateTime = datePipe.transform(this.carEntryDateTime, "DD-MM-YYYY:hh:mm:ss");
    this.carExitDateTime = datePipe.transform(this.carExitDateTime, "DD-MM-YYYY:hh:mm:ss");

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
