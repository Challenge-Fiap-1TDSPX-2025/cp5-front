import type { StudySession } from "../types/study-session";

interface Props {
    studycard: StudySession;
}

export function StudyCard({ studycard }: Props) {
    return (
        <div className="bg-white shadow rounded-lg p-4 w-3/5 hover:p-5 transition delay-150">
            <p className="text-gray-600">{studycard.subject}</p>
            <p className="text-gray-600">{studycard.minutes}</p>
            <p className="text-gray-600">{studycard.data}</p>
            <p className="text-gray-600">{studycard.note}</p>
        </div>
    )
}