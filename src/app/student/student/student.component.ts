import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
AllStudent:Student[]=[
{
  Roll_no:1,Name:"Dipali",Address:"pune"
},
{
  Roll_no:2,Name:"Rekha",Address:"pune"
},
{
  Roll_no:3,Name:"",Address:"pune"
}
];
}
