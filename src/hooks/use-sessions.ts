import { useContext } from 'react';
import { SessionContext } from '../components/session-context-pure'; 
import { type SessionContextType } from '../types/session-context-types'; 

export function useSessionContext(): SessionContextType {
    const context = useContext(SessionContext);
    
    if (context === undefined) {
        throw new Error('useSessionContext deve ser usado dentro de um SessionProvider.');
    }
    
    return context;
}