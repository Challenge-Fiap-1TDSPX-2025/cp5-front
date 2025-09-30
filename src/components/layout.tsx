import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-blue-600 text-white shadow-md">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">StudyLog</Link>
          <Link to="/add" className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
            + Nova Sessão
          </Link>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <Outlet /> {/* As páginas serão renderizadas aqui */}
      </main>
    </div>
  );
}