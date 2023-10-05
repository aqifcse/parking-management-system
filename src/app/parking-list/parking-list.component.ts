import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent {

  parkingRecord: any = new MatTableDataSource([
    {
      "vehicle_owner_name": "Towfiq",
      "vehicle_type": 1,
      "vehicle_license_number": 123456,
      "car_entry_date_time": "2010-08-17T12:09:36",
      "car_exit_date_time": "2010-08-17T12:09:36",
      "status": 1
    },
    {
      "vehicle_owner_name": "Towfiq",
      "vehicle_type": 1,
      "vehicle_license_number": 123456,
      "car_entry_date_time": "2010-08-17T12:09:36",
      "car_exit_date_time": "2010-08-17T12:09:36",
      "status": 1
    },
    {
      "vehicle_owner_name": "Towfiq",
      "vehicle_type": 1,
      "vehicle_license_number": 123456,
      "car_entry_date_time": "2010-08-17T12:09:36",
      "car_exit_date_time": "2010-08-17T12:09:36",
      "status": 1
    }
  ])

  displayedColumns = ["vehicle_owner_name",  "vehicle_type", "vehicle_license_number", "car_entry_date_time", "car_exit_date_time", "status"]

}
