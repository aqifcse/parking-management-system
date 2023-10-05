import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParkingFormComponent } from './parking-form/parking-form.component';
import { ParkingListComponent } from './parking-list/parking-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'parking-form', component: ParkingFormComponent },
  { path: 'parking-list', component: ParkingListComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
