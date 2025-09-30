import { useParams } from 'react-router-dom';
import { useSessionContext } from '../hooks/use-sessions'; 
import { StudyCard } from '../components/study-card'; 

export default function SessionDetailsPage() {

  const { id } = useParams<{ id: string }>(); 
  
  const { sessions } = useSessionContext(); 

  const session = sessions.find(s => s.id === id); 

  if (!session) {
    return (
      <div className="p-8 text-center bg-red-100 border-l-4 border-red-500 text-red-700 m-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Sessão Não Encontrada</h1>
          <p>O ID "{id}" não corresponde a nenhuma sessão de estudo registrada. Verifique o URL.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-800 border-b pb-2">Detalhes da Sessão</h1>
      
      <div className="mt-6">
        <StudyCard studycard={session} />
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Informações de Sistema</h2>
        <p className="text-gray-600">ID da Sessão: <span className="font-mono text-sm bg-gray-200 p-1 rounded select-all">{id}</span></p>
        <p className="text-gray-600">Total de sessões registradas: {sessions.length}</p>
      </div>
    </div>
  );
}