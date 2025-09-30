import { useState } from "react";
import { Link } from "react-router-dom";
import { StudyCard } from "../components/study-card";
import type { StudySession } from "../types/study-session";

export function StudyList() {
  // lista de estudos em memória
  const [studies] = useState<StudySession[]>([
    { id: "1", subject: "Matemática", minutes: 60, data: "2025-09-29", note: "Estudar derivadas" },
    { id: "2", subject: "Inglês", minutes: 45, data: "2025-09-30", note: "Praticar conversação" },
  ]);

  return (
    <div className="p-4 space-y-4">
      <h2 className="font-bold text-xl mb-4">Estudos</h2>

      {studies.map((s) => (
        <Link
          key={s.id}
          to={`/study-details/${s.id}`} // passa o id na URL
          state={{ study: s }}          // passa o objeto via state
        >
          <StudyCard studycard={s} />
        </Link>
      ))}
    </div>
  );
}
