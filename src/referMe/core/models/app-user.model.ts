import { Injectable } from "@angular/core";

@Injectable()
export class AppUser {

    public userID: number;
    public firstName: string;
    public middleName: any;
    public lastName: string;
    public emailAddress: string;
    public mobile: string;
    public userRole: string;

    public clearDetail(): void {
        this.userID = 0;
        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        this.emailAddress = '';
        this.mobile = '';
        this.userRole = '';
    }
}