export interface StudySession{
    id:string;
    subject:string;
    minutes:number;
    data:string;
    note?:string;
}

export type StudySessionList = StudySession[];