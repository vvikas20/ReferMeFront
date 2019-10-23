import { environment } from "src/environments/environment";


export class ApiEndPoints {

    static readonly baseUrl: string = `${environment.serverURL}/api`;

    static readonly application: string = `${ApiEndPoints.baseUrl}/application`;
    static readonly applicationDetail: string = `${ApiEndPoints.application}/detail`;
    static readonly addUser: string = `${ApiEndPoints.application}/adduser`;

    static readonly auth: string = `${ApiEndPoints.baseUrl}/auth`;
    static readonly generateToken: string = `${ApiEndPoints.auth}/token`;

    static readonly user: string = `${ApiEndPoints.baseUrl}/user`;
    static readonly allUser: string = `${ApiEndPoints.user}/all`;
    static readonly deleteUser: string = `${ApiEndPoints.user}/delete`;
    static readonly myDetails: string = `${ApiEndPoints.user}/mydetails`;

    static readonly jobpost: string = `${ApiEndPoints.baseUrl}/jobpost`;
    static readonly createpost: string = `${ApiEndPoints.jobpost}/add`;
    static readonly allpost: string = `${ApiEndPoints.jobpost}/all`;
    static readonly deletepost: string = `${ApiEndPoints.jobpost}/delete`;
}