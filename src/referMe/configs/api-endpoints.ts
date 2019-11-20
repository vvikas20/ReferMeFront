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
    static readonly updateprofile: string = `${ApiEndPoints.user}/updateprofile`;

    static readonly jobposts: string = `${ApiEndPoints.baseUrl}/jobposts`;
    static readonly createpost: string = `${ApiEndPoints.jobposts}/add`;
    static readonly myposts: string = `${ApiEndPoints.jobposts}/my-posts`;
    static readonly jobs: string = `${ApiEndPoints.jobposts}/jobs`;
    static readonly deletepost: string = `${ApiEndPoints.jobposts}/delete`;

    static readonly role: string = `${ApiEndPoints.baseUrl}/roles`;
    static readonly allRole: string = `${ApiEndPoints.role}/all`;

    static readonly company: string = `${ApiEndPoints.baseUrl}/companies`;
    static readonly allCompany: string = `${ApiEndPoints.company}/all`;

    static readonly location: string = `${ApiEndPoints.baseUrl}/locations`;
    static readonly allLocation: string = `${ApiEndPoints.location}/all`;

    static readonly referral: string = `${ApiEndPoints.baseUrl}/referrals`;
    static readonly addReferral: string = `${ApiEndPoints.referral}/add`;
    static readonly postReferrals: string = `${ApiEndPoints.referral}/referrals`;

}