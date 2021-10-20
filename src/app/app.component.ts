import { Component } from '@angular/core';
import { EmployeeDataService } from './employee-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',   
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 *
 */

export class AppComponent {
  title = 'employee';
  headers = ['ID','Name','Contact No.','Email ID']
  empData:any;
  selectedData: any;
  showInputBoxes = false;
  employeeForm = new FormGroup({
    ID: new FormControl(''),
    name: new FormControl(''),
    contactNo: new FormControl(''),
    emailId: new FormControl('')
  }); 
  constructor(private employeeService: EmployeeDataService) { }

  ngOnInit() {
     this.empData = this.employeeService.getData();
  }

  displayDetails(data:any) {
    this.selectedData = data
  }
  editForm() {
    this.showInputBoxes = !this.showInputBoxes
  }
  saveEmployeeData(selectedData:any) {
    console.log(selectedData);
  }
}
