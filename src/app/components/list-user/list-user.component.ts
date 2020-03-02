import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/core/model/userDTO';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/message.service';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users: UserDTO[];

  constructor(private router: Router,
              private messageService: MessageService,
              private apiService: ApiService) { }

  ngOnInit() {
    if (!this.apiService.isAuthenticated()) {
      this.router.navigate(['login']);
    }
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
    }, error => {
      this.messageService.showError('Lista de usuários', 'Falha ao carregar a lista de usuários');
    });
  }
  getRole(user: UserDTO) {
    return this.apiService.getRole(user.roles);
  }
  deleteUser(user: UserDTO): void {
    this.apiService.deleteUser(user.id).subscribe(() => {
      this.users = this.users.filter(u => u.id !== user.id);
      this.messageService.showSuccess('Delete usuários', 'Usuário foi deletado com sucesso');
    }, error => {
      this.messageService.showError('Delete usuários', 'Falha ao excluir usuário');
    });
  }

}
