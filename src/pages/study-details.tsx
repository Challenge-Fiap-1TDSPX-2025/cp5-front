import { useLocation, useParams } from "react-router-dom";
import { StudyCard } from "../components/study-card";

export function StudyDetails() {
  const { id } = useParams();
  const { state } = useLocation();

  return (
    <>
      <h2 className="font-bold text-gray-600 text-xl mb-3">
        Detalhes do estudo - ID {id}
      </h2>

      <StudyCard studycard={state.studycard} />
    </>
  );
}
