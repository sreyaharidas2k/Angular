import { Component,OnInit } from '@angular/core';
import { MyserviceService,api_tb } from '../myservice.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailswithid',
  templateUrl: './detailswithid.component.html',
  styleUrls: ['./detailswithid.component.css']
})
export class DetailswithidComponent implements OnInit{
  student:api_tb | undefined;
  Id:number=0;
  constructor(public rest:MyserviceService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    var paramId= this.route.snapshot.paramMap.get("Id");//id get from querystring or url
    if(paramId!==null && paramId!==undefined){
      this.Id=+paramId;
    }
    this.rest.getapi_tbwithid(this.Id).subscribe(
      (data:api_tb)=>this.student={...data}
    );
  }

}
