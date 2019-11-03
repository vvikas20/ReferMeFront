import { environment } from "src/environments/environment";


export class ApiEndPoints {

    static readonly baseUrl: string = `${environment.serverURL}/api`;

    static readonly application: string = `${ApiEndPoints.baseUrl}/application`;
    static readonly applicationDetail: string = `${ApiEndPoints.application}/detail`;
    static readonly addUser: string = `${ApiEndPoints.application}/adduser`;

    static readonly auth: string = `${ApiEndPoints.baseUrl}/auth`;
    static readonly generateToken: string = `${ApiEndPoints.auth}/token`;

    static readonly user: string = `${ApiEndPoints.baseUrl}/users`;
    static readonly allUser: string = `${ApiEndPoints.user}/all`;
    static readonly myDetails: string = `${ApiEndPoints.user}/my-detail`;
    static readonly userDetails: string = `${ApiEndPoints.user}/user-detail`;
    static readonly updateUser: string = `${ApiEndPoints.user}/update`;
    static readonly deleteUser: string = `${ApiEndPoints.user}/delete`;

    static readonly post: string = `${ApiEndPoints.baseUrl}/posts`;
    static readonly createpost: string = `${ApiEndPoints.post}/add`;
    static readonly myposts: string = `${ApiEndPoints.post}/my`;
    static readonly openings: string = `${ApiEndPoints.post}/others`;
    static readonly deletepost: string = `${ApiEndPoints.post}/delete`;

    static readonly role: string = `${ApiEndPoints.baseUrl}/roles`;
    static readonly allRole: string = `${ApiEndPoints.role}/all`;

    static readonly referral: string = `${ApiEndPoints.baseUrl}/referrals`;
    static readonly addReferral: string = `${ApiEndPoints.referral}/add`;
    static readonly postReferrals: string = `${ApiEndPoints.referral}/referrals`;

}