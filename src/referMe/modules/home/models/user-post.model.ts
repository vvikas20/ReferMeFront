export class PostDetail {
    postID: number;
    userID: number;
    company: string = '';
    position: string = '';
    minExp: number;
    maxExp: number;
    location: string = '';
    contact: string;
    description: string = '';
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
    postDetail: PostDetail;
    userDetail: UserDetail;
}