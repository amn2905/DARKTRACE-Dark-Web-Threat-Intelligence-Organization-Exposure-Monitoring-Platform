# Threat Intelligence Model & Telemetry Handling
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Threat Intelligence Categorization

DARKTRACE models cyber threats across eight distinct operational categories defined in `src/types/index.ts`:

```typescript
export type ThreatCategory = 
  | 'Credential Exposure'
  | 'Data Leak'
  | 'Ransomware'
  | 'Exploit'
  | 'Malware'
  | 'Phishing'
  | 'Fraud'
  | 'Organization Mention';
```

### Category Descriptions & Empirical Distribution
Based on the aggregated telemetry defined in `src/data/analytics.ts`:

| Threat Category | Total Incidents | Percentage | Primary Risk Indicator |
|---|---|---|---|
| **Credential Exposure** | 342 | 26.6% | Corporate username/password dumps, auth tokens, SSO ticket leaks. |
| **Data Leak** | 268 | 20.9% | Database samples, customer PII disclosures, financial records. |
| **Ransomware** | 215 | 16.7% | Underground discussions targeting corporate infrastructure and data encryption threats. |
| **Exploit** | 178 | 13.9% | Zero-day and N-day exploit proof-of-concept discussions referencing monitored assets. |
| **Malware** | 142 | 11.1% | Trojan loaders, infostealer delivery campaigns, malicious attachments. |
| **Phishing** | 98 | 7.6% | Cloned brand portals, lookalike domains, credential harvesting kits. |
| **Fraud** | 64 | 5.0% | Spoofed merchant checkout portals, payment gateway impersonation. |
| **Organization Mention** | 42 | 3.3% | Opportunistic port scanning, enumeration, reconnaissance probes. |

---

## 2. Threat Record Structure & Evidence Modeling

Every ingested threat record is represented by the `Threat` interface. Below is an annotated breakdown using sample record `THR-8902` from `src/data/threats.ts`:

```typescript
{
  id: 'THR-8902',
  title: 'Credential exposure discussion',
  category: 'Credential Exposure',
  organization: 'ExampleBank',
  organizationId: 'org-1',
  source: 'Research Source',
  severity: 'high',
  confidence: 92,
  riskScore: 84,
  firstSeen: '2026-09-23 09:12 UTC',
  detectedAt: '8 min ago',
  status: 'Investigating',
  summary: 'Automated telemetry identified a synthetic paste discussion referencing internal domain credentials and SSO configuration tokens formatted as demo strings.',
  
  // Forensic Evidence Block
  evidence: {
    rawSnippet: 'SAMPLE DEMO ENTRY: user_auth_ticket_demo=923847921&target_domain=corp.examplebank.example&vault_role=support_tier2',
    sourcePlatform: 'Authorized Research Source [Demo Index #442]',
    discoveredTimestamp: '2026-09-23 09:24 UTC',
    correlationConfidence: 92,
    notes: 'Synthetic token dump containing placeholder hashes and obfuscated mock emails matching monitored enterprise domain.'
  },
  
  // Correlation & Matching Assessment
  relevanceAssessment: {
    domainMatch: true,
    brandKeywordsMatched: ['ExampleBank', 'eb-internal', 'corp-sso'],
    employeeCredentialsDetected: true,
    infrastructureReferenced: ['auth.examplebank.example', 'vpn.examplebank.example']
  },
  
  // Extracted Technical Indicators
  extractedIndicators: [
    { type: 'DOMAIN', value: 'auth-gateway.examplebank-verify.example' },
    { type: 'IP', value: '198.51.100.42' },
    { type: 'EMAIL', value: 'analyst-demo@examplebank.example' },
    { type: 'SHA256', value: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' }
  ],
  
  // Attribution & Context
  threatActors: ['Nebula Spider', 'Silent Lynx'],
  relatedCVEs: ['CVE-2026-12345', 'CVE-2025-44910'],
  
  // Incident Lifecycle Audit Trail
  timeline: [
    { timestamp: '10:14:02 UTC', event: 'Initial synthetic telemetry alert triggered', actor: 'Automated Collector' },
    { timestamp: '10:22:15 UTC', event: 'Correlation engine confirmed domain string overlap', actor: 'Correlation Rule Engine' },
    { timestamp: '10:28:40 UTC', event: 'Investigator assigned; mock containment workflow initialized', actor: 'Security Analyst' }
  ],
  
  // Multi-Factor Risk Drivers
  riskFactors: {
    organizationRelevance: 'High',
    recency: 'High',
    sourceConfidence: 'Medium',
    iocAssociation: 'High',
    credentialExposure: 'Detected'
  },
  relatedIntelligenceIds: ['THR-8903', 'THR-8891']
}
```

---

## 3. Threat Lifecycle & Investigation Workflow

Threats transition through four formal states managed via `ThreatStatus`:

```
   [ New ]  ──────>  [ Investigating ]  ──────>  [ Resolved ]
      │                                                ▲
      │                                                │
      └────────────────────────────────────────────────┴──> [ False Positive ]
```

1. **`New`:** Telemetry recently ingested; unacknowledged by a SOC analyst.
2. **`Investigating`:** Assigned to an analyst; containment workflows and indicator verification active.
3. **`Resolved`:** Threat mitigated, affected credentials revoked, or malicious infrastructure blocked.
4. **`False Positive`:** Correlation rules determined that matched keywords were coincidental or non-threatening.
