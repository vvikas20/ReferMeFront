export class UserProfile {
    userId: number;
    firstName: string = '';
    middleName: string = '';
    lastName: string = '';
    emailAddress: string = '';
    mobile: string = '';
    profileImageFile: File;
    resumeFile: File;
    profile: any = null;
    resume: any = null;
}