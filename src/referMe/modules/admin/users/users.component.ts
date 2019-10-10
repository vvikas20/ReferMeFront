import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/referMe/core/helper/user.service';
import { Column } from 'primeng/components/common/shared';

@Component({
  selector: 'referMe-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  cols: Array<{ field: string, header: string, sortable: boolean }>;
  users: Array<any>;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.cols = [];
    this.cols.push({ field: 'UserID', header: 'User Id', sortable: true });
    this.cols.push({ field: 'FirstName', header: 'FirstName', sortable: true });
    this.cols.push({ field: 'MiddleName', header: 'MiddleName', sortable: true });
    this.cols.push({ field: 'LastName', header: 'LastName', sortable: true });
    this.cols.push({ field: 'EmailAddress', header: 'EmailAddress', sortable: true });
    this.cols.push({ field: 'Mobile', header: 'Mobile', sortable: true });

    this.getAllUsers();
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

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      next => {
        this.getAllUsers();
      },
      error => {

      },
      () => { });
  }
}
