import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface api_tb{
  Id:number;
  Name:string;
  Age:number;
  Mark:number;
}
const endpoint='http://localhost:50067/api/API/';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  addapi_tb (employee:any):Observable<any>{
    return this.http.post(endpoint + 'postapi_tb' , employee );
  }

  getallapi_tb():Observable<any>{
    return this.http.get<api_tb>(endpoint+'getapi_tbs');
  }
  deleteapi_tb(Id:number):Observable<any>{
    return this.http.delete<api_tb>(endpoint+'deleteapi_tbwithid/'+Id);
  }
  getapi_tbwithid(Id:number):Observable<any>{
    return this.http.get<api_tb>(endpoint+'getapi_tbwithid/'+Id);
  }

  updateapi_tb(Id:number,product:api_tb):Observable<any>{
    return this.http.put<api_tb>(endpoint+'putapi_tbwithid/'+Id,product);
  }
}
