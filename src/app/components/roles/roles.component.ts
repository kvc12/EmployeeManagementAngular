import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit{
  // string, nuber, boolean, date, object, array, null, undefined
// constructor(private http: HttpClient){}

http = inject(HttpClient);
rolelist: IRole [] = [];

ngOnInit(): void {
  this.getAllRoles();
}

getAllRoles(){
  this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: APIResponseModel)=>{
    this.rolelist = res.data;

  })
}




  // firstname: string = 'Angular Tutorial';
  // angularVersion = 'Version 18';
  // version: number = 18;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = 'checkbox';
  // selectedState: string = '';

  // showWelcomeAlert() {
  //   alert('Welcome to Angular!');
  // }
  // showMessageAlert(message: string) {
  //   alert(message);
  // }
}
