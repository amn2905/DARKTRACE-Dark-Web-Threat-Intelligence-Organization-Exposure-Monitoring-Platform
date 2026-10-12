import type { ThreatActivityDataPoint, ThreatSeverityCount, ThreatCategoryCount, TimeRangeFilter } from '../types';

export const mockThreatActivity: Record<TimeRangeFilter, ThreatActivityDataPoint[]> = {
  '24H': [
    { time: '00:00', threats: 42, critical: 4, high: 14, medium: 16, low: 8 },
    { time: '03:00', threats: 38, critical: 3, high: 11, medium: 15, low: 9 },
    { time: '06:00', threats: 55, critical: 6, high: 18, medium: 21, low: 10 },
    { time: '09:00', threats: 89, critical: 12, high: 32, medium: 31, low: 14 },
    { time: '12:00', threats: 114, critical: 16, high: 41, medium: 39, low: 18 },
    { time: '15:00', threats: 98, critical: 14, high: 35, medium: 34, low: 15 },
    { time: '18:00', threats: 82, critical: 9, high: 28, medium: 30, low: 15 },
    { time: '21:00', threats: 64, critical: 7, high: 22, medium: 23, low: 12 },
  ],
  '7D': [
    { time: 'Thu', threats: 172, critical: 18, high: 58, medium: 64, low: 32 },
    { time: 'Fri', threats: 210, critical: 24, high: 72, medium: 76, low: 38 },
    { time: 'Sat', threats: 130, critical: 12, high: 42, medium: 52, low: 24 },
    { time: 'Sun', threats: 115, critical: 10, high: 36, medium: 48, low: 21 },
    { time: 'Mon', threats: 245, critical: 31, high: 88, medium: 84, low: 42 },
    { time: 'Tue', threats: 268, critical: 35, high: 96, medium: 91, low: 46 },
    { time: 'Wed', threats: 294, critical: 42, high: 104, medium: 98, low: 50 },
  ],
  '30D': [
    { time: 'W1', threats: 980, critical: 112, high: 320, medium: 374, low: 174 },
    { time: 'W2', threats: 1120, critical: 135, high: 390, medium: 415, low: 180 },
    { time: 'W3', threats: 1240, critical: 148, high: 430, medium: 452, low: 210 },
    { time: 'W4', threats: 1284, critical: 162, high: 452, medium: 460, low: 210 },
  ],
  '90D': [
    { time: 'Month 1', threats: 3420, critical: 390, high: 1180, medium: 1250, low: 600 },
    { time: 'Month 2', threats: 3890, critical: 440, high: 1340, medium: 1420, low: 690 },
    { time: 'Month 3', threats: 4210, critical: 510, high: 1480, medium: 1510, low: 710 },
  ],
};

export const mockThreatSeverityDistribution: ThreatSeverityCount[] = [
  { name: 'Critical', severity: 'critical', count: 162, percentage: 12.6, color: '#dc2626' },
  { name: 'High', severity: 'high', count: 452, percentage: 35.2, color: '#ea580c' },
  { name: 'Medium', severity: 'medium', count: 460, percentage: 35.8, color: '#ca8a04' },
  { name: 'Low', severity: 'low', count: 165, percentage: 12.9, color: '#2563eb' },
  { name: 'Informational', severity: 'informational', count: 45, percentage: 3.5, color: '#64748b' },
];

export const mockThreatCategoriesDistribution: ThreatCategoryCount[] = [
  { category: 'Credential Exposure', count: 342 },
  { category: 'Data Leak', count: 268 },
  { category: 'Ransomware', count: 215 },
  { category: 'Exploit', count: 178 },
  { category: 'Malware', count: 142 },
  { category: 'Phishing', count: 98 },
  { category: 'Fraud', count: 64 },
  { category: 'Organization Mention', count: 42 },
];

export const mockOverviewStats = [
  {
    id: 'stat-active-threats',
    label: 'Active Threats',
    value: '1,284',
    change: '+12.4%',
    trend: 'up' as const,
    isPositiveTrend: false, // in cybersecurity, more threats is negative/red or neutral
    iconName: 'ShieldAlert',
  },
  {
    id: 'stat-org-mentions',
    label: 'Organization Mentions',
    value: '327',
    change: '+8.7%',
    trend: 'up' as const,
    isPositiveTrend: false,
    iconName: 'Building2',
  },
  {
    id: 'stat-exposed-credentials',
    label: 'Exposed Credentials',
    value: '84',
    change: '+5.2%',
    trend: 'up' as const,
    isPositiveTrend: false,
    iconName: 'KeyRound',
  },
  {
    id: 'stat-high-risk-intel',
    label: 'High-Risk Intelligence',
    value: '46',
    change: '+14.1%',
    trend: 'up' as const,
    isPositiveTrend: false,
    iconName: 'AlertTriangle',
  },
  {
    id: 'stat-threat-actors',
    label: 'Threat Actors',
    value: '73',
    change: '+3.8%',
    trend: 'up' as const,
    isPositiveTrend: false,
    iconName: 'Users',
  },
  {
    id: 'stat-iocs-identified',
    label: 'IOCs Identified',
    value: '2,846',
    change: '+18.6%',
    trend: 'up' as const,
    isPositiveTrend: true, // more IOCs identified can represent discovery capability
    iconName: 'Crosshair',
  },
];
