interface ErrorMessageProps {
  title?: string;
  message: string;
  type?: 'error' | 'warning' | 'info';
  onRetry?: () => void;
}

export default function ErrorMessage({ 
  title, 
  message, 
  type = 'error',
  onRetry 
}: ErrorMessageProps) {
  const styles = {
    error: 'bg-red-50 border-red-200 text-red-700',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    info: 'bg-blue-50 border-blue-200 text-blue-700'
  };

  const icons = {
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };

  return (
    <div className={`border rounded-lg p-4 ${styles[type]}`}>
      <div className="flex items-start">
        <span className="text-lg mr-3 flex-shrink-0">{icons[type]}</span>
        <div className="flex-1">
          {title && <h3 className="font-semibold mb-1">{title}</h3>}
          <p className="text-sm">{message}</p>
        </div>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-3 bg-white border border-current px-4 py-2 rounded text-sm font-medium hover:bg-opacity-20 transition"
        >
          Réessayer
        </button>
      )}
    </div>
  );
}