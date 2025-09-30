// src/components/session-context.tsx (AGORA É SOMENTE O PROVIDER)

import React, { 
    useState, 
    useCallback, 
    useMemo, 
    type ReactNode // Importando ReactNode para a prop children
} from 'react';

// 1. IMPORTAÇÃO: Importamos o SessionContext do novo arquivo
import { SessionContext } from './session-context-pure'; 
import { type StudySession, type StudySessionList } from '../types/study-session'; 
import { type SessionContextType, type SessionStats } from '../types/session-context-types'; 

// Dados de exemplo para iniciar o estado
// CORREÇÃO DE DADOS: O campo deve ser 'date', não 'data', para bater com a tipagem corrigida
const DUMMY_SESSIONS: StudySessionList = [
    { id: '1', subject: 'React Router', minutes: 60, data: '2025-09-29', note: 'Configuração inicial.' },
    { id: '2', subject: 'TailwindCSS', minutes: 45, data: '2025-09-28', note: 'Estilização de cards.' },
];

// O `SessionProvider` é o único export principal deste arquivo.
export function SessionProvider({ children }: { children: ReactNode }) {
    // Gerenciamento do estado da lista de sessões (useState)
    const [sessions, setSessions] = useState<StudySessionList>(DUMMY_SESSIONS);

    // Função de adicionar sessão (useCallback)
    const addSession = useCallback((newSession: StudySession) => {
        setSessions(prevSessions => [newSession, ...prevSessions]);
    }, []); 

    // Cálculo das estatísticas (useMemo)
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

// Futuramente, você pode exportar o hook de uso para conveniência
// export { useSessionContext } from '../hooks/use-session-context';