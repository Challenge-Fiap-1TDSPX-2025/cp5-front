import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './components/layout';
const HomePage = lazy(() => import('./pages/home'));
const AddSessionPage = lazy(() => import('./pages/sessao-add'));
const SessionDetailsPage = lazy(() => import('./pages/detalhes-sessao'));
const NotFoundPage = lazy(() => import('./pages/404'));
import gif from "./assets/loading.gif";
import { StudyList } from './components/study-list';
import { StudyDetails } from './pages/study-details';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="text-center mt-8 font-bold">
          Carregando...
        <div className="justify-items-center">
          <img src={gif} alt=""/>
        </div>
        </div>
        }
        >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/lista" element={<StudyList />} />
            <Route path="/study-details/:id" element={<StudyDetails />} />
            <Route path="add" element={<AddSessionPage />} />
            <Route path="session/:id" element={<SessionDetailsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;