import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { SessionProvider } from './components/session-context'; 
import { Layout } from './components/layout';
import { StudyList } from './components/study-list';

import gif from "./assets/loading.gif";

const HomePage = lazy(() => import('./pages/home'));
const AddSessionPage = lazy(() => import('./pages/sessao-add'));
const NotFoundPage = lazy(() => import('./pages/404')); 
const StudyDetails = lazy(() => import('./pages/study-details')); 




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
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              
              <Route path="lista" element={<StudyList />} /> 
              
              <Route path="study-details/:id" element={<StudyDetails />} /> 
              
              <Route path="add" element={<AddSessionPage />} />
              
              
            </Route>
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </SessionProvider>
    </BrowserRouter>
  );
}

export default App;