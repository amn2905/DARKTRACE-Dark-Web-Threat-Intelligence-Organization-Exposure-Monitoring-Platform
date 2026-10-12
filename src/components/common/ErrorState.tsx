import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Failed to load telemetry',
  message = 'An unexpected network error occurred while querying the intelligence telemetry service.',
  onRetry,
}) => {
  return (
    <div className="bg-red-50/50 border border-red-200 rounded-lg p-8 text-center">
      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3 text-red-600">
        <AlertCircle className="w-5 h-5" />
      </div>
      <h3 className="text-sm font-semibold text-red-900 mb-1">{title}</h3>
      <p className="text-xs text-red-700 max-w-sm mx-auto mb-4">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-800 bg-white border border-red-300 hover:bg-red-50 rounded-md transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Retry Connection
        </button>
      )}
    </div>
  );
};
