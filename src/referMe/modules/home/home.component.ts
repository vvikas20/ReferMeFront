import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AppUser } from 'src/referMe/core/models/app-user.model';

@Component({
  selector: 'referMe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private actr: ActivatedRoute, private appUser: AppUser) {

  }

  ngOnInit() {
    debugger;
    let user = this.actr.snapshot.data.user;
    this.setUserDetails(user);
  }

  setUserDetails(data) {
    if (data != null) {
      this.appUser.userID = data.UserID;
      this.appUser.firstName = data.FirstName;
      this.appUser.middleName = data.MiddleName;
      this.appUser.lastName = data.LastName;
      this.appUser.emailAddress = data.EmailAddress;
      this.appUser.mobile = data.Mobile;
      this.appUser.userRole = data.UserRole;
    }
  }

}
