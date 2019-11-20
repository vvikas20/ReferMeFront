import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiEndPoints } from 'src/referMe/configs/api-endpoints';
import { Registration } from 'src/referMe/modules/login/models/registration.model';
import { map } from 'rxjs/operators';
import { User } from 'src/referMe/modules/home/models/user.model';
import { UserProfile } from 'src/referMe/modules/home/models/user-profile.model';

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) { }

  getAllUsers(): Observable<any> {
    return this.httpService.Get<any>(ApiEndPoints.allUser);
  }

  getMyDetails(): Observable<any> {
    return this.httpService.Get<any>(ApiEndPoints.myDetails);
  }

  deleteUser(userId: number): Observable<any> {
    const params = new HttpParams().set('userId', `${userId}`);
    return this.httpService.Delete<any>(ApiEndPoints.deleteUser, { params: params })
  }

  getUserDetails(userId: number): Observable<any> {
    const params = new HttpParams().set('userId', `${userId}`);
    return this.httpService.Get<any>(ApiEndPoints.userDetails, { params: params })
  }

  updateProfile(userProfile: UserProfile): Observable<any> {

    let formData = new FormData();

    formData.append('firstName', userProfile.firstName);
    formData.append('middleName', userProfile.middleName);
    formData.append('lastName', userProfile.lastName);
    formData.append('mobile', userProfile.mobile);

    if (userProfile.profileImageFile != null) formData.append('profileImageFile', userProfile.profileImageFile);
    if (userProfile.resumeFile != null) formData.append('resumeFile', userProfile.resumeFile);

    return this.httpService.Put<any>(ApiEndPoints.updateprofile, formData);
  }

  updateUser(user: User): Observable<any> {

    const reqHeader: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    let userDetails = {
      UserID: user.userId,
      FirstName: user.firstName,
      MiddleName: user.middleName,
      EmailAddress: user.emailAddress,
      LastName: user.lastName,
      Mobile: user.mobile,
      UserRoleID: user.roleId
    }

    return this.httpService.Put<any>(ApiEndPoints.updateUser, userDetails, { headers: reqHeader }).pipe(map(data => {
      return data;
    }));
  }
}
