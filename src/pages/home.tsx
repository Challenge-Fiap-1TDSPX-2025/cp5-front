import { Link } from 'react-router-dom';
import { StudyCard } from '../components/study-card';
// CORREÇÃO ESSENCIAL: Usar o nome do hook correto, conforme definido em use-sessions.ts
import { useSessionContext } from '../hooks/use-sessions'; 

export default function HomePage() {
  // CORREÇÃO: Usar o nome da função 'useSessions'
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
            // ENVOLVENDO COM O LINK: Permite que o StudyCard seja clicável
            <Link 
              key={session.id} 
              // Rota correta, conforme definida no App.tsx
              to={`/session/${session.id}/details`} 
              className="block hover:shadow-lg transition duration-200"
            >
              <StudyCard 
                // Mantendo a prop 'studycard' conforme seu requisito
                studycard={session} 
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}