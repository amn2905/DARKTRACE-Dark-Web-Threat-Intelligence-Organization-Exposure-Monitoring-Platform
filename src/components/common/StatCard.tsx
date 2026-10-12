import React from 'react';
import { 
  ShieldAlert, 
  Building2, 
  KeyRound, 
  AlertTriangle, 
  Users, 
  Crosshair, 
  ArrowUpRight, 
  ArrowDownRight, 
  Minus 
} from 'lucide-react';

const iconMap = {
  ShieldAlert,
  Building2,
  KeyRound,
  AlertTriangle,
  Users,
  Crosshair,
};

interface StatCardProps {
  label: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  isPositiveTrend?: boolean;
  iconName: keyof typeof iconMap;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  change,
  trend,
  iconName,
}) => {
  const Icon = iconMap[iconName] || ShieldAlert;

  return (
    <div className="group relative bg-white border border-slate-200 rounded-lg p-4 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </span>
        <div className="p-2 rounded-md bg-slate-100/80 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors text-slate-600">
          <Icon className="w-4 h-4" />
        </div>
      </div>

      <div className="mt-3 flex items-baseline justify-between">
        <div className="text-2xl font-bold tracking-tight text-slate-900 font-mono">
          {value}
        </div>

        <div className="flex items-center gap-1 text-xs font-medium">
          {trend === 'up' && (
            <span className="flex items-center text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded">
              <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
              {change}
            </span>
          )}
          {trend === 'down' && (
            <span className="flex items-center text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
              <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />
              {change}
            </span>
          )}
          {trend === 'neutral' && (
            <span className="flex items-center text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
              <Minus className="w-3.5 h-3.5 mr-0.5" />
              {change}
            </span>
          )}
        </div>
      </div>

      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-2xs text-slate-500">
        <span>vs. previous 7-day period</span>
        <span className="text-slate-400 font-medium">Telemetry sync</span>
      </div>
    </div>
  );
};
