# Developer & Extension Guide
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Codebase Architecture Principles

1. **Strict TypeScript Typing:** Never bypass types with `any`. All intelligence records must conform to interfaces defined in `src/types/index.ts`.
2. **Atomic Component Design:** Common UI elements (badges, cards, loaders) belong in `src/components/common/`. Dashboard-specific analytical charts belong in `src/components/dashboard/`.
3. **Responsive & Enterprise Styling:** Use Tailwind utility classes following the color tokens defined in `tailwind.config.js` (`brand`, `navy`, `severity`).

---

## 2. Common Extension Scenarios

### 2.1 Adding a New Threat Category
1. Open `src/types/index.ts` and add the category to the `ThreatCategory` type union:
   ```typescript
   export type ThreatCategory = 
     | 'Credential Exposure'
     | ...
     | 'Supply Chain Compromise';
   ```
2. Open `src/data/analytics.ts` and update `mockThreatCategoriesDistribution`:
   ```typescript
   { category: 'Supply Chain Compromise', count: 72 },
   ```
3. Open `src/components/dashboard/ThreatCategoriesChart.tsx` and assign a corresponding hex color in the `colors` palette array.

### 2.2 Adding a New Monitored Organization
1. Open `src/data/organizations.ts`.
2. Add a new object conforming to the `Organization` interface:
   ```typescript
   {
     id: 'org-7',
     name: 'QuantumDefense',
     domain: 'quantumdefense.example',
     industry: 'Defense & Aerospace',
     mentions: 53,
     threatsCount: 11,
     riskLevel: 'Critical',
     riskScore: 89,
     lastActivity: '4 min ago',
     status: 'Monitored',
     credentialsExposed: 31,
     iocAssociations: 94,
     threatActorsTargeting: 3,
     exploitReferences: 4,
     exposureTrend: 'up',
   },
   ```

### 2.3 Adding a New Indicator of Compromise (IOC)
1. Open `src/data/iocs.ts`.
2. Append a new typed indicator record linked to an existing threat:
   ```typescript
   {
     id: 'ioc-110',
     value: 'c2-drop.quantumdefense-verify.example',
     type: 'DOMAIN',
     confidence: 94,
     firstSeen: '2026-09-23 11:30 UTC',
     lastSeen: '6 min ago',
     associatedThreatId: 'THR-8903',
     associatedThreatTitle: 'Ransomware targeting discussion',
     organization: 'QuantumDefense',
     maliciousScore: 92,
   },
   ```

### 2.4 Implementing a Phase Placeholder View
To convert a placeholder page (e.g., `ThreatIntelligencePage` in `src/pages/Placeholders.tsx`) into a full view:
1. Create a new file `src/pages/ThreatIntelligence.tsx`.
2. Import `mockThreats` from `src/data/threats`.
3. Construct the table layout using standard enterprise table styling (`enterprise-card`, `enterprise-table-th`, `enterprise-table-td`).
4. In `src/App.tsx`, update the route import:
   ```typescript
   import { ThreatIntelligence } from './pages/ThreatIntelligence';
   // Replace placeholder route element
   <Route path="threat-intelligence" element={<ThreatIntelligence />} />
   ```
