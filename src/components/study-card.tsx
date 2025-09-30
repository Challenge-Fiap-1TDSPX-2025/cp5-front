import type { StudySession } from "../types/study-session"; 

interface Props {
    studycard: StudySession;
}

export function StudyCard({ studycard }: Props) {
    const { subject, minutes, data, note } = studycard; 
    
    return (
        <div className="bg-white shadow rounded-lg p-4 w-full md:w-3/5 hover:shadow-lg transition duration-200 border-l-4 border-blue-600 space-y-1">
            
            <h3 className="text-lg font-semibold text-blue-800">{subject}</h3>
            
            <p className="text-gray-700">
                Minutos: <span className="font-medium">{minutes}</span>
            </p>
            
            <p className="text-gray-500 text-sm">Data: {data}</p>
            
            {note && (
                <p className="text-gray-600 border-t pt-2 mt-2 text-sm italic">Notas: {note}</p>
            )}
        </div>
    )
}