export class Referral {
    postId: number;
    to: string;
    subject: string;
    message: string
}

export class ReferralRequest {
    requestId: number;
    subject: string;
    message: string;
    firstName: string;
    middleName: string;
    lastName: string;
    emailAddress: string;
    mobile: string;
    requestedOn: string;
}