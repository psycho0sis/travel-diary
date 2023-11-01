import { Component, ErrorInfo, ReactNode } from 'react';

import { CustomAlert } from '../alert';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className='mt-3'>
          <CustomAlert isShown variant='danger' text='Произошла ошибка. Мы работаем над этим' />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
