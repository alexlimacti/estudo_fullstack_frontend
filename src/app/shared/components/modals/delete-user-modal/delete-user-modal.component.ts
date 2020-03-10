import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { ApiService } from "src/app/core/api.service";

@Component({
  selector: "app-delete-user-modal",
  templateUrl: "./delete-user-modal.component.html",
  styleUrls: ["./delete-user-modal.component.scss"]
})
export class DeleteUserModalComponent implements OnInit {
  @ViewChild("deleteUserModal") public deleteUserModal;
  @Input() recebeItem;
  @Output() resposta = new EventEmitter();
  recebeTitulo = "Brincando com Spring Boot e Angular 9";
  recebePergunta = "Deseja realmente deletar este usuário?";

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
  onClose(event: any) {
    console.log(event);
  }
  show() {
    this.deleteUserModal.show();
  }
  delete() {
    this.resposta.emit(this.recebeItem);
    this.apiService.deleteUser(this.recebeItem);
    this.deleteUserModal.hide();
  }
}
