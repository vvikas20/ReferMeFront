import { Referral, ReferralRequest } from "./referral.model";

export class PostDetail {
    postID: number;
    userID: number;
    company: string = '';
    position: string = '';
    minExp: number;
    maxExp: number;
    location: string = '';
    keywords: Array<string> = [];
    contact: string;
    description: string = '';
    postedOn: string = '';
}

export class UserDetail {
    userID: number;
    firstName: string;
    middleName: string;
    lastName: string;
    emailAddress: string;
    mobile: string;
}

export class UserPostDetail {
    applied: boolean = false;
    postDetail: PostDetail;
    userDetail: UserDetail;
    referralDetail: ReferralRequest;
}

export class PostFilter {
    keywords: Array<string> = [];
    company: string = '';
    location: string = '';
    minExp: number = 0;
    maxExp: number = 0;
}