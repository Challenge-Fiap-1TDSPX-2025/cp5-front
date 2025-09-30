// src/types/session-context-types.ts

import { type StudySessionList, type StudySession } from '../types/study-session'; 

// Tipagem para as Estatísticas (useMemo)
export interface SessionStats {
    totalSessions: number;
    totalMinutes: number;
    averageMinutes: number;
}

// Tipagem para o Contexto
export interface SessionContextType {
    sessions: StudySessionList;
    stats: SessionStats;
    // Função memoizada para adicionar sessão (useCallback)
    addSession: (session: StudySession) => void; 
    // Futura função de remoção
    // removeSession: (id: string) => void; 
}