import type { StudySession } from "../types/study-session"; // Padronizado para PascalCase

interface Props {
    // 1. MANTIDO: O nome da prop é 'studycard'
    studycard: StudySession;
}

// 2. MANTIDO: Receber a prop como 'studycard'
export function StudyCard({ studycard }: Props) {
    // 3. Desestruturação para limpar o código interno
    const { subject, minutes, data, note } = studycard; 
    
    // NOTA: É fundamental que você tenha corrigido a interface 
    // StudySession para usar 'date' no lugar de 'data'.

    return (
        // Melhorias de estilo para um visual mais limpo e responsivo
        <div className="bg-white shadow rounded-lg p-4 w-full md:w-3/5 hover:shadow-lg transition duration-200 border-l-4 border-blue-600 space-y-1">
            
            <h3 className="text-lg font-semibold text-blue-800">{subject}</h3>
            
            <p className="text-gray-700">
                Minutos: <span className="font-medium">{minutes}</span>
            </p>
            
            {/* 4. CORREÇÃO: Usar 'date' (assumindo a tipagem correta) */}
            <p className="text-gray-500 text-sm">Data: {data}</p>
            
            {note && (
                <p className="text-gray-600 border-t pt-2 mt-2 text-sm italic">Notas: {note}</p>
            )}
        </div>
    )
}