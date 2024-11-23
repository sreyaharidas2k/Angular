import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertDBComponent } from './insert-db/insert-db.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { DetailswithidComponent } from './detailswithid/detailswithid.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';

const routes: Routes = [
  {path:'',component:DisplayallComponent},
  {path:'AllStudents',component:DisplayallComponent},
  {path:'insertdb',component:InsertDBComponent},
  {path:'details/:Id',component:DetailswithidComponent},
  {path:'editdetails/:Id',component:EditdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
