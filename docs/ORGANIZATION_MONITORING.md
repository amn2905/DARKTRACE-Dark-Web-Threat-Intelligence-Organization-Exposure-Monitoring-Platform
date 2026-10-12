# Organization Exposure Monitoring
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Overview & Defensive Objective

Organization Exposure Monitoring allows security teams to define an enterprise's external perimeter and receive automated alerts whenever corporate assets are detected in dark-web forums, paste bins, ransomware leak sites, or code repositories.

---

## 2. Organization Schema & Monitored Parameters

Each monitored entity is defined by the `Organization` interface in `src/types/index.ts`:

```typescript
export interface Organization {
  id: string;                      // Unique ID (e.g. 'org-1')
  name: string;                    // Organization name (e.g. 'ExampleBank')
  domain: string;                  // Primary monitored internet domain
  industry: string;                // Industry sector (e.g. 'Financial Services & Banking')
  mentions: number;                // Total dark-web mentions recorded
  threatsCount: number;            // Total active threat incidents
  riskLevel: 'Critical' | 'High' | 'Medium' | 'Low';
  riskScore: number;               // Composite exposure score (0 - 100)
  lastActivity: string;            // Time since last telemetry detection
  status: 'Monitored' | 'Paused' | 'Pending Review';
  credentialsExposed: number;      // Total compromised employee/customer accounts
  iocAssociations: number;         // Total indicators tied to organization
  threatActorsTargeting: number;   // Number of threat actor groups active against org
  exploitReferences: number;       // Exploit discussions referencing org tech stack
  exposureTrend: 'up' | 'down' | 'stable';
}
```

---

## 3. Configured Organizations in Codebase

Six organizations are configured in `src/data/organizations.ts`:

| Organization | Domain | Industry Sector | Mentions | Threats | Risk Level | Score | Exposed Creds | Trend |
|---|---|---|---|---|---|---|---|---|
| **ExampleBank** | `examplebank.example` | Financial Services & Banking | 87 | 14 | **High** | 72 | 48 | `up` |
| **TechNova** | `technova.example` | Cloud Infrastructure & SaaS | 64 | 9 | **Medium** | 58 | 19 | `up` |
| **FinSecure** | `finsecure.example` | Payment Processing & FinTech | 42 | 8 | **High** | 69 | 12 | `stable` |
| **CloudMatrix** | `cloudmatrix.example` | Enterprise IT Hosting | 31 | 4 | **Low** | 34 | 3 | `down` |
| **HealthShield** | `healthshield.example` | Healthcare Technology | 28 | 5 | **Medium** | 52 | 2 | `stable` |
| **ApexLogistics** | `apexlogistics.example` | Global Supply Chain | 19 | 3 | **Low** | 28 | 0 | `down` |

---

## 4. Matching & Correlation Mechanism

Correlation between raw ingested chatter and an organization is represented in each threat's `relevanceAssessment`:

```typescript
relevanceAssessment: {
  domainMatch: boolean;                  // Matches root domain or subdomains
  brandKeywordsMatched: string[];       // Triggered brand identifiers
  employeeCredentialsDetected: boolean;// Discovered corporate email credentials
  infrastructureReferenced: string[];  // Monitored hostnames and IP blocks
}
```

### Matching Dimensions:
1. **Domain Match:** Substring or exact regex matches against corporate domains (`examplebank.example`).
2. **Brand & Asset Keywords:** Matches specific brand terms, internal service abbreviations, or project codenames (`corp-sso`, `eb-internal`).
3. **Credential Detection:** Parsing leaked credential pairs to flag instances where the email domain matches the monitored organization.
4. **Infrastructure Association:** Cross-referencing Autonomous System Numbers (ASNs), public IP ranges, or DNS hostnames against the monitored entity's asset inventory.

---

## 5. UI Presentation & Exposure Velocity

The `OrganizationExposureTable` component on the overview dashboard renders:
- Corporate name and primary monitored domain.
- Dark-web mention count.
- Color-coded risk badge (`Critical` in red, `High` in orange, `Medium` in amber, `Low` in slate).
- Visual trend indicator:
  - **`up`:** Trending upwards (`ArrowUpRight` icon in rose).
  - **`down`:** Trending downwards (`ArrowDownRight` icon in emerald).
  - **`stable`:** Unchanged (`Minus` icon in slate).
- Row click routes to `/organizations/:id` for detailed organizational investigation.
