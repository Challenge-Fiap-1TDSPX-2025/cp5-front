import { useLocation, useParams } from "react-router-dom";
import { StudyCard } from "../components/study-card";
import type { StudySession } from "../types/study-session";

export function StudyDetails() {
  const { state } = useLocation();
  const { id } = useParams();

  // pega o estudo enviado pelo Link
  const study: StudySession = state?.study;

  if (!study) return <p className="text-red-500">Estudo não encontrado!</p>;

  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-3">Detalhes do estudo - ID {id}</h2>
      <StudyCard studycard={study} />
    </div>
  );
}
