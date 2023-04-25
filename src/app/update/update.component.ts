import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

constructor(private s1 : employeeService) { }

  ngOnInit(): void {
  }
  updatedata(updateform:{value:any;})
  {
      return this.s1.updateservice(updateform.value).subscribe();
  }

}