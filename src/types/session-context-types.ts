import { type StudySessionList, type StudySession } from '../types/study-session'; 

// Tipagem para as Estatísticas (useMemo)
export interface SessionStats {
    totalSessions: number;
    totalMinutes: number;
    averageMinutes: number;
}

export interface SessionContextType {
    sessions: StudySessionList;
    stats: SessionStats;
    addSession: (session: StudySession) => void; 
    
}