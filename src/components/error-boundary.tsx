import React, { Component, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }
    
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary pegou um erro:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
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