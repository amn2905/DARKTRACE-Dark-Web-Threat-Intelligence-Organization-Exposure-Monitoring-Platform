import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  ShieldAlert,
  Building2,
  Users,
  Crosshair,
  Bug,
  Bell,
  Network,
  BarChart3,
  FileText,
  Database,
  Radio,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggleCollapse }) => {
  const mainNavItems = [
    { label: 'Overview', to: '/dashboard', icon: LayoutDashboard },
    { label: 'Threat Intelligence', to: '/threat-intelligence', icon: ShieldAlert },
    { label: 'Organizations', to: '/organizations', icon: Building2 },
    { label: 'Threat Actors', to: '/threat-actors', icon: Users },
    { label: 'IOC Intelligence', to: '/iocs', icon: Crosshair },
    { label: 'Exploit Intelligence', to: '/exploits', icon: Bug },
    { label: 'Alerts', to: '/alerts', icon: Bell, badge: '5' },
    { label: 'Threat Graph', to: '/threat-graph', icon: Network },
    { label: 'Analytics', to: '/analytics', icon: BarChart3 },
    { label: 'Reports', to: '/reports', icon: FileText },
  ];

  const telemetryNavItems = [
    { label: 'Sources', to: '/sources', icon: Database },
    { label: 'Monitoring', to: '/monitoring', icon: Radio, badge: 'Live' },
  ];

  const systemNavItems = [
    { label: 'Settings', to: '/settings', icon: Settings },
    { label: 'Help & Docs', to: '/help', icon: HelpCircle },
  ];

  return (
    <aside
      className={clsx(
        'relative bg-white border-r border-slate-200 flex flex-col h-screen transition-all duration-300 z-30 select-none shadow-xs',
        collapsed ? 'w-18' : 'w-64'
      )}
    >
      {/* Brand Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-slate-200">
        <NavLink to="/dashboard" className="flex items-center gap-3 overflow-hidden group">
          <div className="w-9 h-9 rounded-lg bg-slate-950 flex items-center justify-center shrink-0 shadow-sm border border-slate-850 overflow-hidden group-hover:border-brand-500/50 transition-colors">
            <img 
              src="/darktrace-logo.png" 
              alt="Darktrace Emblem" 
              className="w-full h-full object-contain p-0.5" 
            />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <span className="font-bold text-sm tracking-wider text-slate-900 font-mono block leading-tight group-hover:text-brand-600 transition-colors">
                DARKTRACE
              </span>
              <span className="text-2xs font-medium text-slate-500 uppercase tracking-wider block truncate">
                Dark Web Intelligence
              </span>
            </div>
          )}
        </NavLink>

        {/* Collapse button */}
        <button
          type="button"
          onClick={onToggleCollapse}
          className="hidden md:flex items-center justify-center p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation Links Area */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {/* Main Section */}
        <div>
          {!collapsed && (
            <div className="px-2 pb-2 text-2xs font-semibold text-slate-400 uppercase tracking-wider">
              Core Intelligence
            </div>
          )}
          <nav className="space-y-1">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      'group relative flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors',
                      isActive
                        ? 'bg-slate-900 text-white shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    )
                  }
                  title={collapsed ? item.label : undefined}
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={clsx(
                          'w-4 h-4 shrink-0 transition-colors',
                          isActive ? 'text-brand-400' : 'text-slate-400 group-hover:text-slate-600'
                        )}
                      />
                      {!collapsed && (
                        <span className="truncate flex-1">{item.label}</span>
                      )}
                      {!collapsed && item.badge && (
                        <span
                          className={clsx(
                            'px-1.5 py-0.5 rounded text-2xs font-mono font-semibold',
                            isActive ? 'bg-brand-500 text-white' : 'bg-rose-100 text-rose-700'
                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                      {collapsed && item.badge && (
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Divider & Telemetry Section */}
        <div className="pt-2 border-t border-slate-200/80">
          {!collapsed && (
            <div className="px-2 pb-2 text-2xs font-semibold text-slate-400 uppercase tracking-wider">
              Telemetry & Sensors
            </div>
          )}
          <nav className="space-y-1">
            {telemetryNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      'group relative flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors',
                      isActive
                        ? 'bg-slate-900 text-white shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    )
                  }
                  title={collapsed ? item.label : undefined}
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={clsx(
                          'w-4 h-4 shrink-0 transition-colors',
                          isActive ? 'text-brand-400' : 'text-slate-400 group-hover:text-slate-600'
                        )}
                      />
                      {!collapsed && (
                        <span className="truncate flex-1">{item.label}</span>
                      )}
                      {!collapsed && item.badge && (
                        <span className="px-1.5 py-0.5 rounded text-2xs font-mono font-medium bg-emerald-100 text-emerald-700 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Divider & System Section */}
        <div className="pt-2 border-t border-slate-200/80">
          {!collapsed && (
            <div className="px-2 pb-2 text-2xs font-semibold text-slate-400 uppercase tracking-wider">
              Platform
            </div>
          )}
          <nav className="space-y-1">
            {systemNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      'group relative flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors',
                      isActive
                        ? 'bg-slate-900 text-white shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    )
                  }
                  title={collapsed ? item.label : undefined}
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={clsx(
                          'w-4 h-4 shrink-0 transition-colors',
                          isActive ? 'text-brand-400' : 'text-slate-400 group-hover:text-slate-600'
                        )}
                      />
                      {!collapsed && (
                        <span className="truncate flex-1">{item.label}</span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Analyst Profile Section */}
      <div className="p-3 border-t border-slate-200 bg-slate-50/70">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-700 font-semibold text-xs">
              SA
            </div>
            <span
              className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"
              title="Analyst Status: Online"
            />
          </div>

          {!collapsed && (
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-slate-900 truncate">
                  Security Analyst
                </span>
                <UserCheck className="w-3 h-3 text-brand-600" />
              </div>
              <div className="flex items-center gap-1.5 text-2xs text-slate-500">
                <span>Tier-2 Analyst</span>
                <span>&bull;</span>
                <span className="text-emerald-600 font-medium">Online</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
