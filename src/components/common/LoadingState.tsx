import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
  rows?: number;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = 'Loading intelligence telemetry...',
  rows = 5 
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-3 text-slate-500 text-xs font-medium">
        <Loader2 className="w-4 h-4 animate-spin text-brand-600" />
        <span>{message}</span>
      </div>

      <div className="space-y-2.5 animate-pulse pt-2">
        <div className="h-4 bg-slate-100 rounded w-1/3"></div>
        {Array.from({ length: rows }).map((_, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="h-9 bg-slate-50 rounded flex-1"></div>
            <div className="h-9 bg-slate-50 rounded w-24"></div>
            <div className="h-9 bg-slate-50 rounded w-16"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
