import { environment } from "src/environments/environment";


export class ApiEndPoints {

    static baseUrl: string = `${environment.serverURL}/api`;

    static application: string = `${ApiEndPoints.baseUrl}/application`;
    static applicationDetail: string = `${ApiEndPoints.application}/detail`;

    static user: string = `${ApiEndPoints.baseUrl}/user`;
    static validateuser: string = `${ApiEndPoints.user}/validate`;
}