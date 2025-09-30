import React, { Component, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// O ErrorBoundary deve ser uma classe para implementar os métodos de ciclo de vida de erro
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // Captura o erro e atualiza o estado
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  // Opcional: Loga o erro em um serviço de monitoramento
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary pegou um erro:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // UI alternativa de fallback (estilizada com TailwindCSS)
      return (
        <div className="p-8 text-center bg-red-100 border-l-4 border-red-500 text-red-700 m-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Ocorreu um erro inesperado!</h1>
          <p>Infelizmente, não conseguimos carregar esta seção. Por favor, recarregue a página.</p>
        </div>
      );
    }

    return this.props.children;
  }
}