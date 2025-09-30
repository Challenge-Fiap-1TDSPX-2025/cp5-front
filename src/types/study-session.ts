export interface StudySession{
    id:string;
    subject:string;
    minutes:number;
    data:string;
    note?:string;
}

// Para manter o contexto limpo
export type StudySessionList = StudySession[];