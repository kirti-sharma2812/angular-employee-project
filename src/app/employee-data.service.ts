import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor() { }

  //yogi.chettiar@jpmorgan.com
  arr=[
    {id:12,name: 'Kirti', contactNo:999, emailId:'abc@abc.com'},
    {id:13,name: 'Kiirti', contactNo:9199, emailId:'xyz@abc.com'},
    {id:14,name: 'Kirtii', contactNo:99119, emailId:'xyz@abc.com'}
  ]

  getData() {
    return this.arr
  }

  
}
