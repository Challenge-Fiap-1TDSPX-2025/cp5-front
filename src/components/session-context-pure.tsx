// src/components/session-context-pure.ts
import { createContext } from 'react';
import { type SessionContextType } from '../types/session-context-types'; // Usando o nome padronizado

// 1. Criação e exportação do Contexto (e somente do Contexto)
// O TypeScript agora encontra o tipo SessionContextType
export const SessionContext = createContext<SessionContextType | undefined>(undefined);