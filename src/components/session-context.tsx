import { 
    useState, 
    useCallback, 
    useMemo, 
    type ReactNode 
} from 'react';


import { SessionContext } from './session-context-pure'; 
import { type StudySession, type StudySessionList } from '../types/study-session'; 
import { type SessionContextType, type SessionStats } from '../types/session-context-types'; 


const DUMMY_SESSIONS: StudySessionList = [
    { id: '1', subject: 'Matemática', minutes: 60, data: '2025-09-29', note: 'Configuração inicial.' }, 
    { id: '2', subject: 'Português', minutes: 45, data: '2025-09-28', note: 'Configuração inicial.' }, 
];

export function SessionProvider({ children }: { children: ReactNode }) {
    const [sessions, setSessions] = useState<StudySessionList>(DUMMY_SESSIONS);

    const addSession = useCallback((newSession: StudySession) => {
        setSessions(prevSessions => [newSession, ...prevSessions]);
    }, []); 

    const stats = useMemo<SessionStats>(() => {
        const totalSessions = sessions.length;
        const totalMinutes = sessions.reduce((sum, session) => sum + session.minutes, 0);
        const averageMinutes = totalSessions > 0 ? (totalMinutes / totalSessions) : 0;

        return { 
            totalSessions, 
            totalMinutes, 
            averageMinutes: parseFloat(averageMinutes.toFixed(2)) 
        };
    }, [sessions]);

    const contextValue: SessionContextType = {
        sessions,
        stats,
        addSession,
    };

    return (
        <SessionContext.Provider value={contextValue}>
            {children}
        </SessionContext.Provider>
    );
}