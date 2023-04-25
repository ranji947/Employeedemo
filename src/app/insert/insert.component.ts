import { Component, OnInit } from '@angular/core';
import { employeeService } from '../employee.service';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertdataComponent implements OnInit {

data:any;
  constructor(private s1:employeeService) { }

  ngOnInit(): void {
  }
insertdata(insertform:{value:any;})
{
    return this.s1.insertservice(insertform.value).subscribe();
}
}