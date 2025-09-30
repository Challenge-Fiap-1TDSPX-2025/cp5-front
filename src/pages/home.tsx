import { StudyCard } from '../components/study-card';
import { useSessionContext } from '../hooks/use-sessions'; // Assumindo o nome do hook padronizado

export default function HomePage() {
  const { sessions } = useSessionContext(); 

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-800 border-b pb-2">Minhas Sessões de Estudo</h1>
      
      {sessions.length === 0 ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <p className="font-medium text-yellow-800">Nenhuma sessão registrada ainda.</p>
          <p className="text-sm text-yellow-700 mt-1">Clique em "+ Nova Sessão" para começar a registrar seus estudos!</p>
        </div>
      ) : (
        <div className="grid gap-4"> 
          {sessions.map(session => (
            <StudyCard 
              key={session.id} 
              // CORREÇÃO: Usar 'studycard' como nome da prop
              studycard={session} 
            />
          ))}
        </div>
      )}
    </div>
  );
}