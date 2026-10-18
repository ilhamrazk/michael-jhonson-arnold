# FEATURE SPECIFICATION: Feature 1 — Interactive Technical Widgets (Slope TARP & Drone Blast Simulator)

> **Branch:** `feature/interactive-simulators`  
> **Status:** Specification & Architecture Draft  
> **Target Files:** `index.html`, `style.css`, `script.js`  
> **Design Theme:** McKinsey Executive Style (Navy `#07162C`, Cobalt `#0066CC`, White `#FFFFFF`, Slate `#F8FAFC`)

---

## 1. Executive Purpose & Business Value

In the mining and geosciences industry, hiring managers and technical directors (at companies like PTFI / Freeport, GroundProbe, BHP, Rio Tinto, Orica) evaluate candidates based on **concrete technical competence** rather than generic claims.

Michael Jhonson Arnold Sirait's two distinct specialties are:
1. **Radar-based Geotechnical Early-Warning & TARP Calibration** (GroundProbe MonitorIQ)
2. **Drone-based Post-Blast Analytics & Wall Control** (BlastVision)

Feature 1 introduces a dedicated, high-impact interactive section:  
**"Applied Engineering Laboratory & Interactive Simulators"** (`#simulators`), featuring two switchable, data-driven simulation widgets:

1. **Widget A: Slope Stability TARP Matrix Simulator (Fukuzono / Inverse Velocity Early Warning)**
2. **Widget B: BlastVision Drone Computer Vision & Fragmentation Comparator**

---

## 2. Widget Specifications

### Widget A: Slope Stability TARP Matrix Simulator
* **Concept:** Interactive slope monitoring gauge simulating GroundProbe MonitorIQ radar telemetry.
* **Inputs:**
  * Velocity Slider: `0.0 mm/day` to `25.0 mm/day`
  * Scenario Presets (Quick Buttons):
    * *Baseline Operations* (0.8 mm/day)
    * *Seasonal Rainfall Creep* (3.4 mm/day)
    * *Progressive Displacement* (8.2 mm/day)
    * *Critical Acceleration / Failure Onset* (19.5 mm/day)
* **Real-time Outputs & State Machine:**
  * **Level 1 — GREEN (Normal Baseline | < 2.0 mm/day):**
    * Radar Status: Standard continuous scanning.
    * Mine Action: Normal heavy equipment operations, routine daily reporting.
  * **Level 2 — AMBER (Advisory / Creep | 2.0 – 6.0 mm/day):**
    * Radar Status: Increase scan resolution, verify prism/radar correlation.
    * Mine Action: Notify geotechnical on-call engineer, check drainage and crack meters.
  * **Level 3 — ORANGE (Warning / High Velocity | 6.0 – 15.0 mm/day):**
    * Radar Status: Continuous velocity trending, calibrate local alarm thresholds in MonitorIQ.
    * Mine Action: Restrict bench access, position dedicated visual spotters, standby equipment haulage.
  * **Level 4 — RED (Critical / Evacuation | > 15.0 mm/day):**
    * Radar Status: Rapid acceleration, inverse velocity ($1/V \to 0$).
    * Mine Action: Immediate pit floor evacuation, audible siren activation, safe perimeter cordon.
* **Telemetry Displays:**
  * Live Velocity Gauge (Digital readout with animated indicator needle/meter)
  * Inverse Velocity Status ($1/V$)
  * Time-to-Failure (TTF) Forecast Estimate indicator
  * Standardized SOP Response Checklist according to Australian/Indonesian mining codes

---

### Widget B: BlastVision Drone Post-Blast Analysis Comparator
* **Concept:** Interactive engineering comparison demonstrating how drone computer vision audits drilling & blasting outcomes against nominal design.
* **Modes / Toggles:**
  * Mode 1: *Nominal Blast Design (Pre-Blast CAD/SHOTplus)*
  * Mode 2: *Drone BlastVision Audit (Post-Blast Photogrammetry)*
* **Visual & Data Displays:**
  * **Blast Pattern Collar Variance:** Planned collar grid vs. actual hole deviation (+0.18 m average).
  * **Flyrock Trajectory & Safety Buffer:** Nominal 300 m exclusion envelope vs. maximum detected flyrock throw distance (142 m). Safety margin verified: +158 m.
  * **Rock Fragmentation Distribution (Split Desktop curve):**
    * Target $K_{50}$: 25 cm $\to$ Actual: 21.8 cm (Optimized shovel digging rate)
    * Oversized Boulder Ratio: 1.8% (Well within the < 3.0% crusher feed tolerance)
  * **Wall Control & Backbreak Assessment:**
    * Highwall crest damage: 0.35 m (Minimal backbreak, sub-bench stability preserved).

---

## 3. UI/UX & Information Architecture

### Placement in Page Flow:
The interactive simulator section will be placed right between **Section 3 (Core Pillars)** and **Section 4 (Career Track Record)**:
```
[ Hero Section ]
       ↓
[ Executive Thesis ]
       ↓
[ Core Pillars ]
       ↓
>>> [ NEW SECTION: Applied Engineering Lab & Interactive Simulators ] <<<
       ↓
[ Career Track ]
       ↓
[ Case Studies ]
       ↓
[ Technical Toolkit ]
       ↓
[ Contact & Briefing Modal ]
```

### Visual Styling:
* Navy background surface container (`var(--navy-dark)`) with high-contrast data readouts and sleek borders, creating the feel of a control room / executive engineering terminal.
* High-legibility mono font (`JetBrains Mono`) for telemetry numbers and units.
* Pill-shaped segmented tabs for switching between **"TARP Radar Simulator"** and **"BlastVision Audit Comparator"**.

---

## 4. Implementation Steps

1. **HTML Markup (`index.html`):**
   * Insert `<section class="section section-simulators" id="simulators">` containing:
     * Section header with badge `Live Engineering Demonstration`
     * Tab switch: `TARP Matrix Radar Simulator` vs `BlastVision Drone Audit`
     * Container A: Velocity slider, gauge bar, 4 scenario presets, live status badge, and protocol action card.
     * Container B: Blast design vs drone audit comparator, metric variance table, and safety verification badge.
   * Add `#simulators` link to top navigation and mobile drawer.

2. **Styling (`style.css`):**
   * Add dedicated styling for `.section-simulators`, `.simulator-terminal`, `.radar-gauge`, `.tarp-status-indicator`, `.scenario-presets`, and `.blast-comparator`.
   * Include responsive rules for tablet and mobile screens.

3. **Interactivity (`script.js`):**
   * Tab switcher logic between TARP simulator and BlastVision comparator.
   * Event listener on velocity range slider updating gauge percentage, numeric readouts, and TARP level (1 to 4) with color transitions.
   * Preset buttons click handlers setting specific velocity values.
   * BlastVision toggle button updating the visual audit metrics and variance indicators.

---

## 5. Acceptance & Verification Criteria

- [ ] Velocity slider updates values and states in real-time smoothly (< 16ms render loop).
- [ ] Four TARP levels transition correctly with distinct visual colors:
  - Green (`#10b981`), Amber (`#f59e0b`), Orange (`#f97316`), Red (`#ef4444`).
- [ ] Preset buttons accurately update the slider position and trigger corresponding TARP states.
- [ ] BlastVision audit comparator switches between "Design Nominal" and "Drone Audit" seamlessly.
- [ ] Layout is responsive on mobile (single column) and desktop (control dashboard layout).
- [ ] All code conforms to existing vanilla JS/CSS architecture without external dependencies.
