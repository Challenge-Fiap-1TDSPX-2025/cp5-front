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
import { StudyList } from './components/study-list';
import { StudyDetails } from './pages/study-details';

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
  {/* Correção essencial: envolver no SessionProvider */}
  <SessionProvider>
    <Suspense fallback={LoadingFallback}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="lista" element={<StudyList />} />
          <Route path="study-details/:id" element={<StudyDetails />} />
          <Route path="add" element={<AddSessionPage />} />
          {/* Ajuste: rota de sessão com detalhes */}
          <Route path="session/:id/details" element={<SessionDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  </SessionProvider>
</BrowserRouter>

  );
}

export default App;