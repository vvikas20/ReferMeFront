import { Injectable } from "@angular/core";

@Injectable()
export class AppUser {
    public userID: number;
    public firstName: string;
    public middleName: any;
    public lastName: string;
    public emailAddress: string;
    public mobile: string;
}