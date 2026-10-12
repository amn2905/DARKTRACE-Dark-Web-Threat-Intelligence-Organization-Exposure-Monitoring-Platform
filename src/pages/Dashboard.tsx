import React, { useState } from 'react';
import { RefreshCw, Clock } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { mockOverviewStats } from '../data/analytics';
import { StatCard } from '../components/common/StatCard';
import { ThreatActivityChart } from '../components/dashboard/ThreatActivityChart';
import { ThreatSeverityDonut } from '../components/dashboard/ThreatSeverityDonut';
import { ThreatCategoriesChart } from '../components/dashboard/ThreatCategoriesChart';
import { OrganizationExposureTable } from '../components/dashboard/OrganizationExposureTable';
import { RecentThreatsTable } from '../components/dashboard/RecentThreatsTable';
import { RecentAlertsPanel } from '../components/dashboard/RecentAlertsPanel';

export const Dashboard: React.FC = () => {
  const { showToast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('Just now');

  const handleRefresh = () => {
    setIsRefreshing(true);
    showToast('Threat intelligence telemetry successfully synchronized with live feeds.', 'success');
    setLastUpdated('Just now');
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Refresh Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-2 border-b border-slate-200/80 gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center shrink-0 shadow-sm border border-slate-800 p-1">
            <img 
              src="/darktrace-logo.png" 
              alt="Darktrace Emblem" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 font-sans">
              Threat Intelligence Overview
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-0.5">
              Monitor emerging threats, exposed data, and organization-specific intelligence.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 self-start md:self-auto">
          {/* Last updated indicator */}
          <div className="text-right hidden sm:block">
            <span className="text-2xs uppercase tracking-wider text-slate-400 font-semibold block">
              Last updated:
            </span>
            <div className="flex items-center gap-1 text-xs font-mono font-medium text-slate-700">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{lastUpdated}</span>
            </div>
          </div>

          {/* Refresh Intelligence button */}
          <button
            type="button"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 disabled:opacity-60 rounded-md shadow-card transition-all"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Synchronizing...' : 'Refresh Intelligence'}</span>
          </button>
        </div>
      </div>

      {/* Six Metric Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {mockOverviewStats.map((stat) => (
          <StatCard
            key={stat.id}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            isPositiveTrend={stat.isPositiveTrend}
            iconName={stat.iconName as any}
          />
        ))}
      </div>

      {/* Charts Row: Threat Activity & Threat Severity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ThreatActivityChart />
        </div>
        <div>
          <ThreatSeverityDonut />
        </div>
      </div>

      {/* Analytics Row: Threat Categories & Organization Exposure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <ThreatCategoriesChart />
        </div>
        <div>
          <OrganizationExposureTable />
        </div>
      </div>

      {/* Bottom Row: Recent Threats Table & Recent Alerts Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentThreatsTable />
        </div>
        <div>
          <RecentAlertsPanel />
        </div>
      </div>
    </div>
  );
};
