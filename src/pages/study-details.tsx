import { useParams } from 'react-router-dom';
// Importa o hook para acesso ao Contexto
import { useSessionContext } from '../hooks/use-sessions'; 
// Importa o componente para exibir os dados
import { StudyCard } from '../components/study-card'; 

export default function SessionDetailsPage() {
  // 1. Obtém o ID da URL. O nome do parâmetro deve ser o mesmo da rota (session/:id/details)
  const { id } = useParams<{ id: string }>(); 
  
  // 2. Obtém a lista de todas as sessões do Contexto
  const { sessions } = useSessionContext(); 

  // 3. Encontra a sessão na lista pelo ID
  // O ID deve ser uma string, conforme definido na interface StudySession
  const session = sessions.find(s => s.id === id); 

  if (!session) {
    // Caso a sessão não seja encontrada (URL inválida ou dado ausente)
    return (
      <div className="p-8 text-center bg-red-100 border-l-4 border-red-500 text-red-700 m-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Sessão Não Encontrada</h1>
          <p>O ID "{id}" não corresponde a nenhuma sessão de estudo registrada.</p>
      </div>
    );
  }

  // 4. Renderiza os detalhes
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-800 border-b pb-2">Detalhes da Sessão</h1>
      
      <div className="mt-6">
        {/* Passa a sessão encontrada para o StudyCard, usando o nome da prop 'studycard' */}
        <StudyCard studycard={session} />
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800">Estatísticas Rápidas</h2>
        <p className="text-gray-600">ID da Sessão: <span className="font-mono text-sm bg-gray-200 p-1 rounded">{id}</span></p>
        <p className="text-gray-600">Você tem {sessions.length} sessões registradas no total.</p>
      </div>
    </div>
  );
}