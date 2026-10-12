# Data Models & Schemas
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Domain Types Overview

All domain entities are strictly typed in `src/types/index.ts`. Below are the complete TypeScript definitions:

---

## 2. Core Entities

### 2.1 Threat
```typescript
export interface Threat {
  id: string;
  title: string;
  category: ThreatCategory;
  organization: string;
  organizationId: string;
  source: string;
  severity: Severity;
  confidence: number; // 0 - 100
  riskScore: number;  // 0 - 100
  firstSeen: string;
  detectedAt: string;
  status: ThreatStatus;
  summary: string;
  evidence: {
    rawSnippet: string;
    sourcePlatform: string;
    discoveredTimestamp: string;
    correlationConfidence: number;
    notes: string;
  };
  relevanceAssessment: {
    domainMatch: boolean;
    brandKeywordsMatched: string[];
    employeeCredentialsDetected: boolean;
    infrastructureReferenced: string[];
  };
  extractedIndicators: {
    type: 'DOMAIN' | 'IP' | 'URL' | 'EMAIL' | 'SHA256' | 'SHA1' | 'MD5';
    value: string;
  }[];
  threatActors: string[];
  relatedCVEs: string[];
  timeline: {
    timestamp: string;
    event: string;
    actor?: string;
  }[];
  riskFactors: {
    organizationRelevance: 'High' | 'Medium' | 'Low';
    recency: 'High' | 'Medium' | 'Low';
    sourceConfidence: 'High' | 'Medium' | 'Low';
    iocAssociation: 'High' | 'Medium' | 'Low';
    credentialExposure: 'Detected' | 'Not Detected';
  };
  relatedIntelligenceIds: string[];
}
```

### 2.2 Organization
```typescript
export interface Organization {
  id: string;
  name: string;
  domain: string;
  industry: string;
  mentions: number;
  threatsCount: number;
  riskLevel: 'Critical' | 'High' | 'Medium' | 'Low';
  riskScore: number;
  lastActivity: string;
  status: 'Monitored' | 'Paused' | 'Pending Review';
  credentialsExposed: number;
  iocAssociations: number;
  threatActorsTargeting: number;
  exploitReferences: number;
  exposureTrend: 'up' | 'down' | 'stable';
}
```

### 2.3 ThreatActor
```typescript
export interface ThreatActor {
  id: string;
  name: string;
  aliases: string[];
  associatedThreatsCount: number;
  organizationsTargetedCount: number;
  iocCount: number;
  confidence: number;
  lastSeen: string;
  origin: string;
  motivation: string;
  sophistication: 'Low' | 'Medium' | 'High' | 'Advanced Persistent';
  overview: string;
  targetedSectors: string[];
  associatedThreatIds: string[];
  riskScore: number;
}
```

### 2.4 Indicator of Compromise (IOC)
```typescript
export type IOCType = 'DOMAIN' | 'IP' | 'URL' | 'EMAIL' | 'SHA256' | 'SHA1' | 'MD5';

export interface IOC {
  id: string;
  value: string;
  type: IOCType;
  confidence: number;
  firstSeen: string;
  lastSeen: string;
  associatedThreatId: string;
  associatedThreatTitle: string;
  organization: string;
  maliciousScore: number; // 0 - 100
}
```

### 2.5 Exploit
```typescript
export interface Exploit {
  id: string;
  cveId: string;
  title: string;
  severity: Severity;
  technology: string;
  mentionsCount: number;
  organizationsAffected: string[];
  firstSeen: string;
  riskScore: number;
  cvss: number;
  summary: string;
  patchStatus: 'Available' | 'Mitigation Proposed' | 'Zero-Day / Unpatched';
}
```

### 2.6 Alert
```typescript
export interface Alert {
  id: string;
  title: string;
  severity: Severity;
  organization: string;
  organizationId: string;
  riskScore: number;
  createdAt: string;
  status: ThreatStatus;
  summary: string;
  threatId?: string;
}
```

### 2.7 SourceFeed
```typescript
export interface SourceFeed {
  id: string;
  name: string;
  type: 'Research Dataset' | 'Public Intelligence Feed' | 'Authorized Research Source' | 'Security News Feed';
  classification: 'Demo' | 'Research' | 'Authorized';
  reliability: number; // 0-100
  recordsCount: number;
  lastChecked: string;
  status: 'Active' | 'Degraded' | 'Offline';
  description: string;
}
```
