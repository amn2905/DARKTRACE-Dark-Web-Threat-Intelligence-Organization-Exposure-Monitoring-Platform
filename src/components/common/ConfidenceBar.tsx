import React from 'react';

interface ConfidenceBarProps {
  confidence: number; // 0 - 100
  showLabel?: boolean;
}

export const ConfidenceBar: React.FC<ConfidenceBarProps> = ({ confidence, showLabel = true }) => {
  const getBarColor = (val: number) => {
    if (val >= 90) return 'bg-emerald-500';
    if (val >= 75) return 'bg-blue-600';
    if (val >= 50) return 'bg-amber-500';
    return 'bg-slate-400';
  };

  return (
    <div className="flex items-center gap-2">
      <div 
        className="w-14 bg-slate-200 rounded-full h-1.5 overflow-hidden" 
        role="progressbar" 
        aria-valuenow={confidence} 
        aria-valuemin={0} 
        aria-valuemax={100}
        title={`Confidence: ${confidence}%`}
      >
        <div
          className={`h-full rounded-full transition-all duration-300 ${getBarColor(confidence)}`}
          style={{ width: `${Math.min(100, Math.max(0, confidence))}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-mono font-medium text-slate-600 w-7 text-right">
          {confidence}%
        </span>
      )}
    </div>
  );
};
