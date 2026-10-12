import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Search,
  Bell,
  HelpCircle,
  Settings,
  ChevronRight,
  ExternalLink,
  X
} from 'lucide-react';
import { mockAlerts } from '../../data/alerts';

interface TopNavbarProps {
  onOpenSearch: () => void;
  onToggleMobileMenu?: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({ onOpenSearch }) => {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  // Generate dynamic breadcrumb
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const routeNames: Record<string, string> = {
    dashboard: 'Overview',
    'threat-intelligence': 'Threat Intelligence',
    organizations: 'Monitored Organizations',
    'threat-actors': 'Threat Actors',
    iocs: 'IOC Intelligence',
    exploits: 'Exploit Intelligence',
    alerts: 'Security Alerts',
    'threat-graph': 'Threat Relationship Graph',
    analytics: 'Analytics & Telemetry',
    reports: 'Intelligence Reports',
    sources: 'Intelligence Sources',
    monitoring: 'Live Monitoring',
    settings: 'Settings & Preferences',
    help: 'Documentation & Help',
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-6 flex items-center justify-between sticky top-0 z-20 shadow-2xs">
      {/* Left: Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs">
        <Link 
          to="/dashboard" 
          className="flex items-center gap-2 font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <img 
            src="/darktrace-logo.png" 
            alt="DarkTrace" 
            className="w-4 h-4 object-contain rounded-xs" 
          />
          <span className="font-semibold font-mono">DarkTrace</span>
        </Link>

        {pathSegments.length === 0 || (pathSegments.length === 1 && pathSegments[0] === 'dashboard') ? (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-900">Overview</span>
          </>
        ) : (
          pathSegments.map((segment, idx) => {
            const isLast = idx === pathSegments.length - 1;
            const displayName = routeNames[segment] || segment;

            return (
              <React.Fragment key={segment}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                {isLast ? (
                  <span className="font-semibold text-slate-900 capitalize">
                    {displayName}
                  </span>
                ) : (
                  <span className="font-medium text-slate-500 hover:text-slate-800 transition-colors capitalize">
                    {displayName}
                  </span>
                )}
              </React.Fragment>
            );
          })
        )}
      </nav>

      {/* Center & Right: Global Search & Quick Actions */}
      <div className="flex items-center gap-3">
        {/* Global Search Trigger */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex items-center gap-3 px-3 py-1.5 w-60 md:w-80 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 text-xs transition-all shadow-2xs group text-left"
          title="Global Search (Ctrl + K)"
        >
          <Search className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
          <span className="flex-1 truncate">Search threats, IOCs, orgs...</span>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-2xs font-mono font-medium text-slate-500 bg-white border border-slate-200 rounded shadow-2xs">
            Ctrl K
          </kbd>
        </button>

        {/* Notification Bell with Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            title="Notifications"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-lg shadow-dropdown p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-slate-800">Alert Notifications</span>
                  <span className="text-2xs font-mono px-1.5 py-0.2 bg-rose-100 text-rose-700 rounded-full font-bold">
                    {mockAlerts.length}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowNotifications(false)}
                  className="text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto py-1">
                {mockAlerts.slice(0, 4).map((alert) => (
                  <div key={alert.id} className="py-2 px-1 hover:bg-slate-50 rounded transition-colors text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-2xs font-bold uppercase tracking-wider text-rose-600">
                        {alert.severity}
                      </span>
                      <span className="text-2xs text-slate-400">{alert.createdAt}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-800 line-clamp-1 mt-0.5">
                      {alert.title}
                    </p>
                    <p className="text-2xs text-slate-500">{alert.organization}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100 text-center">
                <Link
                  to="/alerts"
                  onClick={() => setShowNotifications(false)}
                  className="text-xs font-medium text-brand-600 hover:text-brand-800 flex items-center justify-center gap-1"
                >
                  View All Alerts <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Quick Settings Link */}
        <Link
          to="/settings"
          className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          title="Settings & Appearance"
          aria-label="Settings"
        >
          <Settings className="w-4 h-4" />
        </Link>

        {/* Help Link */}
        <Link
          to="/help"
          className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          title="Help & Documentation"
          aria-label="Help"
        >
          <HelpCircle className="w-4 h-4" />
        </Link>

        {/* Vertical divider */}
        <div className="h-5 w-px bg-slate-200" />

        {/* Top Analyst Capsule */}
        <div className="flex items-center gap-2 pl-1">
          <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-semibold text-xs flex items-center justify-center border border-slate-700 shadow-2xs">
            SA
          </div>
          <div className="hidden lg:block text-left">
            <span className="text-xs font-semibold text-slate-800 block leading-tight">
              Security Analyst
            </span>
            <span className="text-2xs text-slate-400 block">Analyst &bull; Tier 2</span>
          </div>
        </div>
      </div>
    </header>
  );
};
