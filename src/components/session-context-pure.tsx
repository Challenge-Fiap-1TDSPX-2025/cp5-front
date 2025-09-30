import { createContext } from 'react';
import { type SessionContextType } from '../types/session-context-types'; 
export const SessionContext = createContext<SessionContextType | undefined>(undefined);