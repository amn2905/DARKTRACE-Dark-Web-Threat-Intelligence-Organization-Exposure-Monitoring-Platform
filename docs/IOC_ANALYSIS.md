# Indicator of Compromise (IOC) Analysis & Handling
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Supported Indicator Types

DARKTRACE defines a strict type union (`IOCType`) in `src/types/index.ts` supporting 7 primary cyber indicator classifications:

```typescript
export type IOCType = 'DOMAIN' | 'IP' | 'URL' | 'EMAIL' | 'SHA256' | 'SHA1' | 'MD5';
```

---

## 2. IOC Technical Specifications & Examples

The table below documents every supported indicator type with real examples from `src/data/iocs.ts`:

| Indicator Type | Syntax / Validation Standard | Repository Example | Associated Threat | Security Use Case |
|---|---|---|---|---|
| **DOMAIN** | RFC 1035 / FQDN format | `auth-gateway.examplebank-verify.example` | `THR-8902` | Blocking malicious DNS lookups, detecting brand lookalikes. |
| **IP** | IPv4 standard dotted decimal (RFC 5737 test range) | `198.51.100.42` | `THR-8902` | Egress firewall blocks, SIEM network connection correlation. |
| **URL** | Full HTTP/HTTPS URI | `https://login-examplebank.phish-demo.example/harvest` | `THR-8891` | Web proxy filtering, URL detonation, perimeter blocking. |
| **EMAIL** | RFC 5322 Address Specification | `security-notify@technova-alert.example` | `THR-8903` | Mail gateway quarantine, spearphishing detection. |
| **SHA256** | 64-character hexadecimal string | `e3b0c44298fc1c149afbf4c8...b855` | `THR-8902` | Endpoint Detection and Response (EDR) file blocking. |
| **SHA1** | 40-character hexadecimal string | `da39a3ee5e6b4b0d3255bfef95601890afd80709` | `THR-8894` | Integrity validation of database leak archives. |
| **MD5** | 32-character hexadecimal string | `d41d8cd98f00b204e9800998ecf8427e` | `THR-8851` | Legacy indicator matching in antivirus and threat feeds. |

---

## 3. Data Representation in Codebase

Every indicator record in `src/data/iocs.ts` conforms to the `IOC` interface:

```typescript
export interface IOC {
  id: string;                      // Unique ID (e.g. 'ioc-101')
  value: string;                   // The actual string (e.g. '198.51.100.42')
  type: IOCType;                   // One of 7 supported types
  confidence: number;              // 0 - 100 source reliability score
  firstSeen: string;               // Discovery timestamp
  lastSeen: string;                // Most recent telemetry observation
  associatedThreatId: string;      // Foreign key linking to Threat record
  associatedThreatTitle: string;   // Contextual title of originating incident
  organization: string;            // Target organization perimeter
  maliciousScore: number;          // 0 - 100 evaluated maliciousness rating
}
```

---

## 4. IOC Extraction and Correlation Methodology

### 4.1 Extraction Workflow
In a complete threat intelligence pipeline, raw posts undergo regex-based indicator extraction:
- **IPv4:** Matches standard IPv4 patterns `\b(?:\d{1,3}\.){3}\d{1,3}\b` (excluding reserved private ranges).
- **Domains & URLs:** Matches valid hostnames and standard URI schemes (`http://`, `https://`).
- **Cryptographic Hashes:** Matches fixed hexadecimal string lengths (MD5: 32 hex, SHA-1: 40 hex, SHA-256: 64 hex).
- **Email Addresses:** Matches standard user@domain format.

### 4.2 Multi-Hop Relational Correlation
In DARKTRACE, an IOC enables multi-hop relational pivoting across the intelligence graph:

```
[IOC: 198.51.100.42]
       │
       ▼ (associatedThreatId)
[Threat: THR-8902 - Credential Exposure Discussion]
       │
       ├─────────────────────────────────┐
       ▼ (organizationId)                ▼ (threatActors)
[Organization: ExampleBank]       [Actor: Nebula Spider]
       │                                 │
       ▼                                 ▼
[Risk Score: 72 (High)]           [Sophistication: Advanced Persistent]
```

---

## 5. Security & Isolation Guidelines

To prevent accidental traffic generation to active malicious infrastructure:
1. **RFC 2606 Compliance:** All demonstration domain indicators utilize the `.example` top-level domain reserved for testing and documentation.
2. **RFC 5737 Compliance:** All IP address indicators are drawn from designated documentation subnets (`198.51.100.0/24` TEST-NET-2, `203.0.113.0/24` TEST-NET-3).
3. **Safe Inspection:** Indicators can be safely investigated and copied without risk of triggering automated malicious beacons.
