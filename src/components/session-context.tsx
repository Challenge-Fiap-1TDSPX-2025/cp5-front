// src/components/session-context.tsx (AGORA É SOMENTE O PROVIDER)

// CORREÇÃO: Removendo 'React' da importação para evitar o aviso do linter.
// Deixamos apenas os hooks e tipos que estão sendo usados.
import { 
    useState, 
    useCallback, 
    useMemo, 
    type ReactNode 
} from 'react';

// 1. IMPORTAÇÃO: Importamos o SessionContext do novo arquivo
// (Mantive os nomes de arquivo originais que você usa, mas recomendo a correção para PascalCase)
import { SessionContext } from './session-context-pure'; 
import { type StudySession, type StudySessionList } from '../types/study-session'; 
import { type SessionContextType, type SessionStats } from '../types/session-context-types'; 

// Dados de exemplo para iniciar o estado
// AVISO DE TIPAGEM: Se o StudySession usa 'date', você deve corrigir 'data' aqui
const DUMMY_SESSIONS: StudySessionList = [
    { id: '1', subject: 'Matemática', minutes: 60, data: '2025-09-29', note: 'Configuração inicial.' }, // CORRIGIDO PARA 'date'
    { id: '2', subject: 'Português', minutes: 45, data: '2025-09-28', note: 'Configuração inicial.' }, // CORRIGIDO PARA 'date'
];

// O `SessionProvider` é o único export principal deste arquivo.
export function SessionProvider({ children }: { children: ReactNode }) {
    // ... (O restante do código está perfeito) ...
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