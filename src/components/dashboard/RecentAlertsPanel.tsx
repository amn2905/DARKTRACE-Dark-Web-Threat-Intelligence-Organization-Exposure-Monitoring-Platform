import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mockAlerts } from '../../data/alerts';
import { SeverityBadge } from '../common/SeverityBadge';
import { StatusBadge } from '../common/StatusBadge';
import { Bell, ArrowRight, ShieldAlert } from 'lucide-react';

export const RecentAlertsPanel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="enterprise-card p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-rose-50 text-rose-600">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Recent Alerts</h3>
              <p className="text-2xs text-slate-500">Security priority alert queue</p>
            </div>
          </div>
          <Link
            to="/alerts"
            className="text-xs font-semibold text-brand-600 hover:text-brand-800 flex items-center gap-1"
          >
            All Alerts <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="mt-3 divide-y divide-slate-100">
          {mockAlerts.slice(0, 4).map((alert) => (
            <div
              key={alert.id}
              onClick={() => navigate('/alerts')}
              className="py-3 first:pt-1 last:pb-1 group cursor-pointer hover:bg-slate-50/70 -mx-2 px-2 rounded-md transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <SeverityBadge severity={alert.severity} size="sm" />
                <span className="text-2xs text-slate-400 font-mono">{alert.createdAt}</span>
              </div>

              <h4 className="text-xs font-semibold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-1">
                {alert.title}
              </h4>

              <div className="mt-1.5 flex items-center justify-between text-2xs">
                <span className="font-medium text-slate-500">{alert.organization}</span>
                <StatusBadge status={alert.status} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100">
        <button
          type="button"
          onClick={() => navigate('/alerts')}
          className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-md border border-slate-200 transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
        >
          <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
          Triage Security Alert Queue
        </button>
      </div>
    </div>
  );
};
