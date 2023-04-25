import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class employeeService {

   inserturl = "http://localhost:9001/insertdata";
   updateurl = "http://localhost:9001/updatedata";
   deleteurl = "http://localhost:9001/deletedata";
   viewurl   = "http://localhost:9001/viewdata";

  constructor(private h1 : HttpClient) { }

  insertservice(data:any)
  {
   return this.h1.post(this.inserturl,data);
  }
  updateservice(data:any)
  {
   return this.h1.post(this.updateurl,data);
  }
  deleteservice(data:any)
  {
   return this.h1.post(this.deleteurl,data);
  }

  viewservice()
  {
    return this.h1.get(this.viewurl);
  }}