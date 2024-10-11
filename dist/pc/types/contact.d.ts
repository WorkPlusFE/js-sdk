export interface OpenDiscussionByIdParams {
    discussionId: string;
    newWindow?: boolean;
}
export interface ShowUserChatViewByUserParams {
    userId: string;
    domainId: string;
    newWindow?: boolean;
}
export interface ContactOption<R> {
    success?: (res: R) => void;
    fail?: (err: unknown) => void;
}
export interface SingleContactParams {
    hideMe?: false;
}
export interface SingleContactRes {
    identifier: string;
    accountName: string;
    tenantId: string;
    post: string;
    job_title: string;
    org_name: string;
    com_name: string;
    user_id: string;
    domain_id: string;
    username: string;
    name: string;
    userId: string;
    domainId: string;
    avatar: string;
    mobile: string;
    email: string;
    gender: string;
    firstNameLetter: string;
    status: string;
    sort: string;
    jobTitle: string;
    orgName: string;
    corpName: string;
    positions: {
        [key: string]: unknown;
    }[];
}
