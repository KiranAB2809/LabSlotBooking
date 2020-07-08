export class LabModel {
    LabId: number;
    StartTime: Date;
    EndTime: Date;
    UserId: string;
    UserName: string;
    Email: string;
}

export class LabList {
    LabId: number;
    LabName: string;
    LabAdminId: string;
    LabAdminMail: string;
}

export class ApprovalList {
    bookingId: number;
    userName: string;
    labName: string;
    startTime: Date;
    endTime: Date;
}