# PROJECT BLUEPRINT: Michael Jhonson Arnold Sirait — Executive Landing Page

> **Tujuan Dokumen:**  
> File ini berisi seluruh konteks, data CV, arsitektur informasi, sistem desain (McKinsey Style), copy teks siap pakai, dan panduan implementasi teknis. Model AI mana pun dapat mengeksekusi pembuatan landing page ini secara mandiri (*one-shot* atau *step-by-step*) tanpa kehilangan konteks.

---

## 1. Project Overview & Objective

* **Subjek:** Michael Jhonson Arnold Sirait (Mining Engineer, Geotechnical & Blasting Specialist at GroundProbe).
* **Objective:** Personal executive landing page / portfolio untuk menarik *prospective employers*, mining tech companies, dan *executive hiring managers* di kawasan Indonesia & APAC (Freeport McMoRan / PTFI, BHP, Rio Tinto, Vale, Adaro, Orica, Thiess, dll.).
* **Unique Value Proposition (UVP):**  
  Menjembatani dua pilar pertambangan yang jarang dikuasai satu orang sekaligus:
  1. **Geotechnical Radar Monitoring & TARP Early Warning** (GroundProbe MonitorIQ, kestabilan lereng, analisis deformasi batuan).
  2. **Drone-based Post-Blast Analytics** (BlastVision, flyrock control, blast pattern, fragmentasi, wall control).
  3. **Data Science & Operational Visibility** (Python, SQL, automated KPI dashboards, kolaborasi R&D).
* **Tone & Style:** Professional, authoritative, clean, data-driven, terinspirasi dari gaya **McKinsey & Company / Bain / BCG Insights**.

---

## 2. Profile Data (Extracted from CV)

* **Full Name:** Michael Jhonson Arnold Sirait
* **Email:** michaeljhonsona@gmail.com
* **Location:** Balikpapan / Jakarta, Indonesia
* **Education:**
  * **Institut Teknologi Bandung (ITB)** — Bachelor Degree in Mining Engineering (2015 – 2019) | GPA: 3.00/4.00
  * **Thesis:** *Comparison of Operation Costs for Different Blasting Geometry in Bench 405-6 Block 3 Quarry D, PT Indocement Tunggal Prakarsa, Citeureup*
  * **Certification/Course:** Shift Academy Data Science Bootcamp (SQL, Python, Machine Learning) (2021)
* **Languages:** English (Advanced / Professional), Bahasa Indonesia (Native)

### Professional Experience Record:
1. **GroundProbe, Balikpapan**
   * **Blasting Engineer** *(Apr 2025 – Present)*:
     * Post-blast analysis teknis (flyrock, blast pattern, wall control) via BlastVision.
     * Membuat & mengelola centralized dashboard & database tracking reporting volume dan turnaround time lintas site klien.
     * Kolaborasi dengan tim R&D untuk fitur analisa baru berbasis *client feedback*.
     * Presentasi teknis & promosi BlastVision untuk klien tambang di Indonesia dan internasional.
   * **Geotechnical Engineer** *(Oct 2023 – Mar 2025)*:
     * Remote monitoring, alarm validation, reporting via MonitorIQ; mentoring junior engineer.
     * On-site technical support, training site engineers, standarisasi TARP (*Trigger Action Response Plan*).
     * Studi visibilitas penempatan radar & *back-analysis* keruntuhan lereng historis untuk menurunkan kriteria alarm spesifik (*site-specific thresholds*).
   * **Junior Geotechnical Engineer** *(Apr 2022 – Sep 2023)*:
     * Remote monitoring deformasi lereng & *fall-of-ground* via MonitorIQ untuk klien Australia, Afrika, APAC, dan LATAM.
     * Kontrol kualitas bulanan (*monthly QC*) 2D radar lintas Balikpapan Monitoring Center (spatial data, aerial imagery, DXF alignment).
   * **Graduate Geotechnical Engineer** *(Oct 2021 – Mar 2022)*:
     * Validasi alarm TARP, monitoring 8 unit radar, pelaporan harian tren deformasi batuan.
2. **PT LAPI ITB — Research Assistant** *(Oct 2019 – Jan 2020)*:
   * Analisis kestabilan lereng & boulder di PT MSS Quarry.
   * Kinematic & numerical slope stability analysis (Dips, Slide - FoS).
   * Estimasi fragmentasi boulder pasca-peledakan dengan Split Desktop.
   * Simulasi lintasan jatuhan batu (*RocFall*) untuk proteksi pemukiman warga sekitar tambang.
3. **Quantus Consultants Indonesia — Technical Analyst** *(Apr 2020 – Aug 2020)*:
   * Kontribusi pada FS (*Feasibility Study*) & AMDAL untuk perusahaan tambang besar Indonesia.
4. **Laboratorium Geomekanika & Peralatan Tambang ITB — Lab Assistant** *(Dec 2018 – Dec 2019)*:
   * Pengujian geoteknik: UCS, Triaxial, Direct Shear, PLI, Physical Properties.
5. **PT ANTAM Tbk — Engineering Intern** *(Jul 2018 – Aug 2018)*:
   * Face mapping, Rock Mass Rating (RMR), perhitungan *ground support* (Q-system). Perhitungan teoritis bahan peledak.

---

## 3. Design System & Aesthetics (McKinsey Style)

### A. Palet Warna (White & Blue Executive Palette)
```css
:root {
  /* Brand Primary */
  --color-navy-dark: #07162c;      /* Deep McKinsey Midnight Navy */
  --color-navy: #0b2545;           /* Primary Heading Navy */
  --color-navy-light: #134074;     /* Secondary Navy / Card Accents */
  
  /* Brand Accent */
  --color-blue-accent: #0066cc;    /* Professional Cobalt Blue (CTA & Highlights) */
  --color-blue-subtle: #e8f1fd;    /* Soft Ice Blue Tint for Badges/Tags */
  --color-blue-glow: rgba(0, 102, 204, 0.12);
  
  /* Neutrals & Surfaces */
  --color-bg-white: #ffffff;       /* Pure Crisp White */
  --color-bg-slate: #f7f9fc;       /* Off-white / Architecture Slate */
  --color-border: #e2e8f0;         /* Hairline Crisp Border */
  --color-text-main: #1a202c;      /* High-contrast Charcoal Body */
  --color-text-muted: #5a6a85;     /* Executive Subtitle Grey */
  --color-text-light: #8fa0b8;     /* Metadata Grey */
}
```

### B. Tipografi
* **Heading / Editorial:** `Newsreader`, `Merriweather`, atau `Georgia`, serif (mencerminkan publikasi eksekutif McKinsey Quarterly / Financial Times).
* **Body / Data / UI:** `Plus Jakarta Sans` atau `Inter`, sans-serif (modern, ultra-clean, legibilitas tinggi pada tabel dan metrik).

### C. UI & Visual Principles
1. **Whitespace Generous:** Hindari layout padat. Berikan ruang nafas yang elegan.
2. **Hairline Precision Borders:** Kartu menggunakan border `1px solid var(--color-border)` tanpa shadow tebal/norak.
3. **Data-Centric KPI Callouts:** Angka statistik disajikan besar (*e.g., 5+ Years, 4 Continents, 8+ Radar Fleets*) dengan label kecil di bawahnya.
4. **Structured Framework Format:** Tampilkan proyek dengan metode *STAR* atau *Context $\rightarrow$ Engineering Action $\rightarrow$ Measured Impact*.
5. **Micro-interactions:** Transisi halus 0.2s pada link dan tombol, status badge modern, kartu hover terangkat tipis (2-3px).

---

## 4. File Structure to Generate

```
d:\Ilham Harazki\Belajar Vibe Code\michael-jhonson-arnold\
├── index.html                   # Semantic, SEO-ready, single-page executive landing page
├── style.css                    # Vanilla CSS, fully responsive, McKinsey design system
├── script.js                   # Interactive filters, modal / drawer, smooth scroll, copy actions
├── init.md                      # Blueprint ini
└── CV_Michael Jhonson Arnold Sirait_PTFI Application.pdf # File CV asli (tersedia di folder)
```

---

## 5. Information Architecture & Sections Breakdown

### Section 1: Executive Top Navigation
* **Left:** `Michael J. A. Sirait` | `<span class="badge">Mining & Geotech Engineer</span>`
* **Center Links:** `Overview`, `Core Pillars`, `Career Track`, `Case Studies`, `Toolkit`
* **Right Actions:**
  * `Download CV (PDF)` (Tombol outline, download langsung `CV_Michael Jhonson Arnold Sirait_PTFI Application.pdf`)
  * `Contact` (Tombol solid blue accent)

### Section 2: Executive Hero
* **Pill Tag:** `● AVAILABLE FOR STRATEGIC TECHNICAL ROLES IN INDONESIA & APAC`
* **Hero Headline:**  
  *"Bridging Slope Stability and Precision Blasting Through Applied Mining Technology."*
* **Lead Paragraph:**  
  *"Mining Engineer from ITB with ~5 years of specialized experience in radar-based slope deformation monitoring (MonitorIQ) and drone-based post-blast intelligence (BlastVision) across Tier-1 operations in Australia, Africa, APAC, and LATAM."*
* **Key Metric Highlights (4-column strip):**
  1. `~5 Years` — Mining Geotech & Blasting Experience
  2. `4 Continents` — Global Client Advisory (APAC, Australia, Africa, LATAM)
  3. `ITB Mining` — Top Tier Mining Engineering Alum (Blasting Thesis)
  4. `Dual Domain` — Radar Stability & Drone BlastVision Specialist

### Section 3: Executive Thesis & About
* Menjelaskan mengapa perpaduan Geotech + Blasting + Data menghasilkan efisiensi biaya tambang dan keselamatan operasional (*Zero Fall-of-Ground Incident Target*).
* Kutipan/prinsip teknis: *"Accurate blast design protects wall integrity; continuous radar monitoring secures operational continuity."*

### Section 4: The 3 Core Pillars of Value (Card Grid)
1. **Pillar I: Drone-Based Blast Optimization (BlastVision)**
   * Post-blast drone analytics, flyrock risk mitigation, blast pattern deviation analysis, and wall control assessment.
2. **Pillar II: Geotechnical Radar & TARP Calibration**
   * Real-time slope deformation monitoring using GroundProbe MonitorIQ, radar placement visibility analysis, and site-specific alarm threshold design.
3. **Pillar III: Mining Data Systems & R&D Integration**
   * Centralized KPI tracking dashboards, operational turnaround time reduction, and translating client operational needs into software R&D improvements.

### Section 5: Career Track & Global Operational Footprint
Timeline interaktif dari 2018 hingga Present:
* **GroundProbe** — Blasting Engineer *(2025–Present)*
* **GroundProbe** — Geotechnical Engineer *(2023–2025)*
* **GroundProbe** — Junior & Graduate Geotechnical Engineer *(2021–2023)*
* **Quantus Consultants & PT LAPI ITB** *(2019–2020)*
* **PT Antam Tbk & Geomechanics ITB** *(2018–2019)*

### Section 6: Technical Case Studies (Interactive Cards)
* **Case Study A: Operational Visibility & BlastVision Scalability at GroundProbe**
  * *Challenge:* Managing growing volume of post-blast reports across diverse mine sites without clear turnaround visibility.
  * *Solution:* Built a centralized dashboard and tracking database for BlastVision reporting workflows and interfaced with R&D for feature iteration.
  * *Impact:* Optimized turnaround time, transparent SLA tracking for global mining clients.
* **Case Study B: Radar Placement Visibility & Historical Slope Failure Back-Analysis**
  * *Challenge:* Client mine site required customized early-warning alarm criteria to detect wall movements before catastrophic failure.
  * *Solution:* Conducted radar coverage and visibility line-of-sight studies, back-analyzed previous failure telemetry in MonitorIQ, and derived refined velocity thresholds.
  * *Impact:* Formulated a standardized TARP for site personnel, significantly improving proactive safety response.
* **Case Study C: Rockfall Trajectory Simulation & Buffer Ditch Design (PT MSS / LAPI ITB)**
  * *Challenge:* Protect nearby community residential zones from boulder rollouts caused by quarry blasting on high bench slopes.
  * *Solution:* Kinematic & numerical analysis (Dips, Slide) combined with Split Desktop boulder size distribution and RocFall trajectory 2D modeling.
  * *Impact:* Validated ditch geometry capacity to capture 100% of simulated bouncing boulders, guaranteeing community safety compliance.

### Section 7: Technical Toolkit & Methodologies
* **Geotechnical Software:** GroundProbe MonitorIQ, Rocscience Slide, Rocscience Unwedge, Rocscience Dips, RocFall.
* **Blasting & Fragmentation:** BlastVision, Split Desktop, Orica SHOTplus.
* **Data Science & Analytics:** Python, SQL, Git, KPI Dashboards, Shift Academy ML.
* **Standards & Methodologies:** TARP Protocol Design, Scan Line Survey, RMR & Q-System, Point Load Index, UCS & Triaxial Testing.

### Section 8: Executive Footer & Direct Contact
* Direct Email: `michaeljhonsona@gmail.com`
* Location: `Balikpapan & Jakarta, Indonesia (Open to APAC Relocation / Travel)`

---

## 6. Implementation Instructions for the Coding Model

1. **Keep it Vanilla & Fast:** Gunakan Semantic HTML5, CSS3 murni (tanpa dependensi framework berat seperti React atau Tailwind CDN kecuali Google Fonts `Newsreader` & `Plus Jakarta Sans`), dan Vanilla JavaScript ringan.
2. **Responsive by Default:** Pastikan tampilan rapi di mobile (375px), tablet (768px), dan widescreen desktop (1440px).
3. **No Placeholders:** Jangan gunakan teks latin "Lorem Ipsum" atau gambar placeholder kosong. Seluruh teks diambil dari CV dan dirapikan secara profesional.
4. **Interactive Filters:** Berikan filter kategori sederhana (All, Blasting, Geotech, Data) pada bagian Case Studies / Experience agar interaktif.
5. **Download CV Link:** Arahkan link unduh CV langsung ke file lokal `./CV_Michael Jhonson Arnold Sirait_PTFI Application.pdf`.
6. **SEO & Accessibility:** Sertakan title tag yang deskriptif, meta description, semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`), dan warna kontras rasio WCAG AAA.
