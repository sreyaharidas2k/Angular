import { Component,OnInit,Input } from '@angular/core';
import { MyserviceService,api_tb } from '../myservice.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit{
  @Input() productData: any={Name:'',Age:0,Mark:0};
  Id:number=0;
  constructor(public rest:MyserviceService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    let paramId=this.route.snapshot.paramMap.get("Id");//query string
    if(paramId!==null && paramId!==undefined){
      this.Id=+paramId;
    }
    this.rest.getapi_tbwithid(this.Id).subscribe((data:{})=>{
      this.productData=data;
    });
  }
  updateProduct():void{
    this.rest.updateapi_tb(this.Id,this.productData).subscribe((result)=>{
      this.router.navigate(['/AllStudents/']);
    },(err)=>{
      console.log(err);
    });
  }

}
