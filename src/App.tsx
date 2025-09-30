import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Importamos o Provedor de Contexto
import { SessionProvider } from './components/session-context'; 
import { Layout } from './components/layout';

// CORREÇÃO ESSENCIAL 1: Usar os nomes de arquivo padronizados (Home, AddSession, etc.)
// Assumindo que você renomeou os arquivos em 'pages' conforme recomendado:
const HomePage = lazy(() => import('./pages/home'));
const AddSessionPage = lazy(() => import('./pages/sessao-add'));
const SessionDetailsPage = lazy(() => import('./pages/detalhes-sessao'));
const NotFoundPage = lazy(() => import('./pages/404')); 

import gif from "./assets/loading.gif";

function App() {
  const LoadingFallback = (
    <div className="text-center mt-20 p-4">
      <p className="text-xl font-bold text-blue-600 mb-4">Carregando...</p>
      {/* CORREÇÃO: Centralizar a imagem */}
      <img src={gif} alt="Carregando..." className="mx-auto w-16 h-16"/>
    </div>
  );
  
  return (
    <BrowserRouter>
      {/* CORREÇÃO ESSENCIAL 2: Envolver toda a aplicação no SessionProvider */}
      <SessionProvider>
        <Suspense fallback={LoadingFallback}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="add" element={<AddSessionPage />} />
              {/* Ajuste de rota: use 'details' para maior clareza de URL */}
              <Route path="session/:id/details" element={<SessionDetailsPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </SessionProvider>
    </BrowserRouter>
  );
}

export default App;