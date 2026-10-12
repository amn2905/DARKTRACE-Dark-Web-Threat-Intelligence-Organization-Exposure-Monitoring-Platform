import React from 'react';
import type { Severity } from '../../types';
import { AlertOctagon, AlertTriangle, AlertCircle, Info, ShieldCheck } from 'lucide-react';
import clsx from 'clsx';

interface SeverityBadgeProps {
  severity: Severity;
  size?: 'sm' | 'md';
  showIcon?: boolean;
}

export const SeverityBadge: React.FC<SeverityBadgeProps> = ({
  severity,
  size = 'md',
  showIcon = true,
}) => {
  const normalized = severity.toLowerCase() as Severity;

  const config = {
    critical: {
      label: 'Critical',
      icon: AlertOctagon,
      bg: 'bg-red-50 text-red-800 border-red-200',
      iconColor: 'text-red-600',
    },
    high: {
      label: 'High',
      icon: AlertTriangle,
      bg: 'bg-orange-50 text-orange-800 border-orange-200',
      iconColor: 'text-orange-600',
    },
    medium: {
      label: 'Medium',
      icon: AlertCircle,
      bg: 'bg-amber-50 text-amber-800 border-amber-200',
      iconColor: 'text-amber-600',
    },
    low: {
      label: 'Low',
      icon: Info,
      bg: 'bg-blue-50 text-blue-800 border-blue-200',
      iconColor: 'text-blue-600',
    },
    informational: {
      label: 'Info',
      icon: ShieldCheck,
      bg: 'bg-slate-100 text-slate-700 border-slate-200',
      iconColor: 'text-slate-500',
    },
  }[normalized] || {
    label: severity,
    icon: Info,
    bg: 'bg-slate-100 text-slate-700 border-slate-200',
    iconColor: 'text-slate-500',
  };

  const IconComponent = config.icon;

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 font-medium border rounded-md select-none',
        config.bg,
        size === 'sm' ? 'px-1.5 py-0.5 text-2xs' : 'px-2 py-0.5 text-xs'
      )}
      title={`Severity: ${config.label}`}
    >
      {showIcon && <IconComponent className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />}
      <span>{config.label}</span>
    </span>
  );
};
