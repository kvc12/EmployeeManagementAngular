import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployee();
  }

  projectForm: FormGroup = new FormGroup({
    // provide the controls you are going to have
    clientProjectId: new FormControl(0),
    projectName: new FormControl(""),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),

    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")

  })

  clientService = inject(ClientService)
  employeeList: Employee[] = [];
  clientList: Client[] = [];


  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    })
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }
}
