import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl">Página Não Encontrada</p>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
        Voltar para a Home
      </Link>
    </div>
  );
}