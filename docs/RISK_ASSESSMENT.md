# Risk Assessment & Severity Classification
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Risk Scoring Reality in Current Implementation

> [!NOTE]
> **Implementation Clarification:**
> In the current implementation of DARKTRACE, quantitative risk scores (0–100) are **statically pre-assigned within the telemetry dataset** rather than dynamically computed through a runtime JavaScript mathematical algorithm. However, every threat record encodes a structured `riskFactors` profile establishing a multi-variable qualitative model.

---

## 2. Multi-Factor Qualitative Risk Framework

The data model defines five core categorical risk factors in each `Threat` record:

```typescript
riskFactors: {
  organizationRelevance: 'High' | 'Medium' | 'Low';
  recency: 'High' | 'Medium' | 'Low';
  sourceConfidence: 'High' | 'Medium' | 'Low';
  iocAssociation: 'High' | 'Medium' | 'Low';
  credentialExposure: 'Detected' | 'Not Detected';
}
```

### Factor Analysis & Empirical Weighting:

| Risk Factor | Possible Values | Empirical Influence | Codebase Evidence |
|---|---|---|---|
| **Credential Exposure** | `'Detected'`, `'Not Detected'` | **Highest impact**; presence of credentials directly elevates threat to High or Critical. | `THR-8902` features `'Detected'`, resulting in risk score `84`. |
| **Organization Relevance** | `'High'`, `'Medium'`, `'Low'` | **High impact**; dictates whether corporate assets are directly targeted or merely referenced. | High relevance threats (`THR-8903`) maintain risk scores >= `80`. |
| **Recency** | `'High'`, `'Medium'`, `'Low'` | **Moderate impact**; immediate threats demand prioritized operational response. | Threats detected minutes ago are prioritized over historical chatter. |
| **Source Confidence** | `'High'`, `'Medium'`, `'Low'` | **Reliability modifier**; scales with telemetry source validation. | Vetted sources (`src-1`, `src-2`) produce higher confidence ratings. |
| **IOC Association** | `'High'`, `'Medium'`, `'Low'` | **Actionability factor**; determines if technical blocklists can be deployed. | Correlated IOCs provide concrete containment opportunities. |

---

## 3. Severity Tiers & UI Encodings

Risk scores are categorized into five distinct operational severity tiers, visually enforced through `SeverityBadge.tsx` and `tailwind.config.js`:

| Score Range | Severity Level | Hex Color | Background Class | Icon | Example Record |
|---|---|---|---|---|---|
| **90 – 100** | **Critical** | `#dc2626` | `bg-red-50 text-red-800` | `AlertOctagon` | `THR-8903` (Ransomware targeting, score: 91) |
| **70 – 89** | **High** | `#ea580c` | `bg-orange-50 text-orange-800` | `AlertTriangle` | `THR-8902` (Credential dump, score: 84) |
| **50 – 69** | **Medium** | `#ca8a04` | `bg-amber-50 text-amber-800` | `AlertCircle` | `THR-8891` (Executive phishing kit, score: 68) |
| **20 – 49** | **Low** | `#2563eb` | `bg-blue-50 text-blue-800` | `Info` | `THR-8874` (Perimeter port scan, score: 42) |
| **0 – 19** | **Informational** | `#64748b` | `bg-slate-100 text-slate-700` | `ShieldCheck` | Informational security notices |

---

## 4. Planned Algorithmic Formula (Future Scope)

To transition from static assignment to runtime calculation, the following weighted mathematical model is planned for the backend engine:

$$\text{Risk Score} = \min\left(100, \left( w_1 \cdot C_{\text{cred}} + w_2 \cdot R_{\text{org}} + w_3 \cdot T_{\text{rec}} + w_4 \cdot S_{\text{conf}} + w_5 \cdot I_{\text{ioc}} \right) \times 100 \right)$$

Where weights are normalized such that $\sum w_i = 1.0$:
- $w_1 = 0.35$ (Credential Exposure)
- $w_2 = 0.25$ (Organization Relevance)
- $w_3 = 0.15$ (Recency)
- $w_4 = 0.15$ (Source Confidence)
- $w_5 = 0.10$ (IOC Actionability)
