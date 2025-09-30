// src/hooks/use-session-context.ts
import { useContext } from 'react';
// IMPORTAÇÃO CORRIGIDA: Aponta para o novo arquivo puro
import { SessionContext } from '../components/session-context-pure'; 
import { type SessionContextType } from '../types/session-context-types'; 

export function useSessionContext(): SessionContextType {
    const context = useContext(SessionContext);
    
    if (context === undefined) {
        throw new Error('useSessionContext deve ser usado dentro de um SessionProvider.');
    }
    
    return context;
}