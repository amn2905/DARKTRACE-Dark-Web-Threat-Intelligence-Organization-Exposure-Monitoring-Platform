import React from 'react';
import type { ThreatStatus } from '../../types';
import clsx from 'clsx';
import { Radio, Search, CheckCircle2, XCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: ThreatStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config = {
    New: {
      label: 'New',
      icon: Radio,
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      dotClass: 'bg-indigo-500 animate-pulse',
    },
    Investigating: {
      label: 'Investigating',
      icon: Search,
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      dotClass: 'bg-amber-500',
    },
    Resolved: {
      label: 'Resolved',
      icon: CheckCircle2,
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dotClass: 'bg-emerald-500',
    },
    'False Positive': {
      label: 'False Positive',
      icon: XCircle,
      badgeClass: 'bg-slate-100 text-slate-600 border-slate-200',
      dotClass: 'bg-slate-400',
    },
  }[status] || {
    label: status,
    icon: Radio,
    badgeClass: 'bg-slate-100 text-slate-700 border-slate-200',
    dotClass: 'bg-slate-400',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium border select-none',
        config.badgeClass
      )}
    >
      <span className={clsx('w-1.5 h-1.5 rounded-full', config.dotClass)} />
      {config.label}
    </span>
  );
};
