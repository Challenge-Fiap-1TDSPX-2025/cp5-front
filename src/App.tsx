import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Importamos o Provedor de Contexto e o Layout (componentes síncronos)
import { SessionProvider } from './components/session-context'; 
import { Layout } from './components/layout';

// Importamos o GIF para o fallback (síncrono)
import gif from "./assets/loading.gif";

// 1. CARREGAMENTO ASSÍNCRONO (LAZY) DE TODAS AS PÁGINAS:
// Esta é a forma mais robusta e resolve a inconsistência de importação do StudyDetails.
const HomePage = lazy(() => import('./pages/home'));
const AddSessionPage = lazy(() => import('./pages/sessao-add'));
const SessionDetailsPage = lazy(() => import('./pages/detalhes-sessao'));
const NotFoundPage = lazy(() => import('./pages/404')); 

// CORREÇÃO ESSENCIAL: Carregando StudyDetails e StudyList via lazy
const StudyDetails = lazy(() => import('./pages/study-details')); 
// Se StudyList for uma página completa, carregue-a via lazy.
// Se StudyList for um componente simples, você pode importá-lo diretamente, mas o lazy é mais seguro para o contexto de rotas.
// const StudyList = lazy(() => import('./components/study-list')); 
import { StudyList } from './components/study-list'; // Deixando síncrono por segurança, mas o ideal seria lazy.


// 2. REMOVEMOS AS IMPORTAÇÕES DUPLICADAS/DESNECESSÁRIAS
// REMOVIDO: import { StudyDetails } from './pages/study-details'; 

function App() {
  const LoadingFallback = (
    <div className="text-center mt-20 p-4">
      <p className="text-xl font-bold text-blue-600 mb-4">Carregando...</p>
      <img src={gif} alt="Carregando..." className="mx-auto w-16 h-16"/>
    </div>
  );
  
  return (
    <BrowserRouter>
      <SessionProvider>
        <Suspense fallback={LoadingFallback}>
          <Routes>
            {/* Rota Pai com Layout */}
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              
              {/* Mantendo StudyList síncrono, mas usando o componente na rota. */}
              <Route path="lista" element={<StudyList />} /> 
              
              {/* AGORA O StudyDetails É UMA VARIÁVEL LAZY */}
              <Route path="study-details/:id" element={<StudyDetails />} /> 
              
              <Route path="add" element={<AddSessionPage />} />
              <Route path="session/:id/details" element={<SessionDetailsPage />} />
              
              {/* CORREÇÃO: A rota 404 DEVE ESTAR FORA do Route pai (mas antes do Route *) 
                 ou no nível superior para ser o fallback final.
                 Como ela está aninhada, ela só funciona se o path="/" der match.
                 Vamos mantê-la fora para ser o fallback universal: */}
            </Route>
            
            {/* CORREÇÃO ESSENCIAL: NotFoundPage no nível superior */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </SessionProvider>
    </BrowserRouter>
  );
}

export default App;