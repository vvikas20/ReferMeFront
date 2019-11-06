import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "src/referMe/core/services/user.service";
import { RoleService } from "../../services/role.service";
import { User } from "../../models/user.model";
import { ModalDirective } from "ngx-bootstrap";

@Component({
  selector: 'referMe-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  @ViewChild('userDetailModal') userDetailModal: ModalDirective;

  validationFailed: boolean = false;
  validationMessage: string = '';
  display: boolean = false;

  selectedUser: User;
  roles: { label: string; value: number; }[];

  cols: Array<{ field: string, header: string, sortable: boolean }>;
  users: Array<any>;

  constructor(private userService: UserService, private roleService: RoleService) { }

  ngOnInit() {

    this.selectedUser = new User();

    this.cols = [];
    this.cols.push({ field: 'UserID', header: 'User Id', sortable: true });
    this.cols.push({ field: 'FirstName', header: 'FirstName', sortable: true });
    this.cols.push({ field: 'MiddleName', header: 'MiddleName', sortable: true });
    this.cols.push({ field: 'LastName', header: 'LastName', sortable: true });
    this.cols.push({ field: 'EmailAddress', header: 'EmailAddress', sortable: true });
    this.cols.push({ field: 'Mobile', header: 'Mobile', sortable: true });
    this.cols.push({ field: 'UserRole', header: 'Assigned Role', sortable: true });

    this.getAllRoles();
    this.getAllUsers();
  }

  getAllRoles() {
    this.roles = [];
    this.roleService.getRoles().subscribe(
      next => {
        next.forEach(element => {
          this.roles.push({ label: element.RoleDisplayName, value: element.RoleID });
        });
      },
      error => {

      },
      () => { });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      next => {
        this.users = next;
      },
      error => {

      },
      () => { });
  }

  editUser(userId: number) {

    this.selectedUser = new User();
    this.userService.getUserDetails(userId).subscribe(
      next => {
        this.selectedUser.userId = next.UserID;
        this.selectedUser.firstName = next.FirstName;
        this.selectedUser.middleName = next.MiddleName;
        this.selectedUser.lastName = next.LastName;
        this.selectedUser.emailAddress = next.EmailAddress;
        this.selectedUser.mobile = next.Mobile;
        this.selectedUser.roleId = next.UserRoleID;

        this.userDetailModal.show();
      },
      error => {

      },
      () => { });
  }

  updateUser() {
    this.userService.updateUser(this.selectedUser).subscribe(
      next => {
        this.userDetailModal.hide();
        this.getAllUsers();
      },
      error => {

      },
      () => { });
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      next => {
        this.getAllUsers();
      },
      error => {

      },
      () => { });
  }

  hideModal(){
    this.userDetailModal.hide();
  }

}