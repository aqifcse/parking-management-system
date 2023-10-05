import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit{

  parkingRecord: any = []
  dataSource: any;

  displayedColumns: any[] = ['vehicle_owner_name',  'vehicle_type', 'vehicle_license_number', 'car_entry_date_time', 'car_exit_date_time', 'status', 'edit']

  ngOnInit(): void {

    console.log(localStorage.getItem('jsonData'))
    
    this.showParkingRecordList();
  }

  showParkingRecordList(){

    const data = JSON.parse(localStorage.getItem('jsonData') || '{}');
  
    this.parkingRecord.push(data);

    
    // console.log(this.parkingRecord);

    this.dataSource = new MatTableDataSource(this.parkingRecord) 

    console.log(this.dataSource)

    


  }
}
