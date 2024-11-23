import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from'@angular/common/http';
import { MyserviceService } from './myservice.service';
import { FormsModule } from '@angular/forms';
import { InsertDBComponent } from './insert-db/insert-db.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { DetailswithidComponent } from './detailswithid/detailswithid.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertDBComponent,
    DisplayallComponent,
    DetailswithidComponent,
    EditdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
