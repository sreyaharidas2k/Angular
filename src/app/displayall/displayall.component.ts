import { Component ,OnInit} from '@angular/core';
import { MyserviceService,api_tb } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css']
})
export class DisplayallComponent implements OnInit{
  GetData:api_tb[]=[];

  constructor(public details:MyserviceService,private router:Router){}

  ngOnInit(): void {
    this.GetAllDetails();
  }

  GetAllDetails():void{
    this.details.getallapi_tb().subscribe((resp:any)=>{
      this.GetData=resp;
    });
  }

  delete(Id:number):void{
    this.details.deleteapi_tb(Id)
    .subscribe(()=>{
      this.GetAllDetails();
    },(err)=>{
      console.log(err);
    });
  }

}
