import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../../model/class/Client';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  [x: string]: any;
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService)

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClient() {
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result == true) {
        alert("Client Created successfully");
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert(res.message);
      }
    })
  }
  onEdit(data: Client) {
    this.clientObj = data;
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete");
    if (isDelete) {
      this.clientService.deleteAPIClientById(id).subscribe((res: APIResponseModel) => {
        if (res.result == true) {
          alert("Client deleted successfully");
          this.loadClient();
          this.clientObj = new Client();
        } else {
          alert(res.message);
        }
      })
    } else (
      console.log("you clicked on cancel")
    )

  }
}
