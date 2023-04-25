import { Component, OnInit } from '@angular/core';
import { employeeService } from '../employee.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewdataComponent implements OnInit {

  data:any;
  constructor(private s1:employeeService) { }

  ngOnInit(): void {
     let response = this.s1.viewservice();
     response.subscribe((data1)=>this.data=data1);
  }
}