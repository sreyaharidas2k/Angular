import { Component,OnInit,Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-db',
  templateUrl: './insert-db.component.html',
  styleUrls: ['./insert-db.component.css']
})
export class InsertDBComponent implements OnInit{
@Input() userdata={Name:'',Age:0,Mark:0};
constructor(public rest:MyserviceService,private router:Router){}
ngOnInit(): void {
  
}

adduserdata():void{
  this.rest.addapi_tb(this.userdata).subscribe((result)=>
  {
    this.router.navigate(['/AllStudents']);
  },(err)=>{
    console.log(err);
  });
}
}
