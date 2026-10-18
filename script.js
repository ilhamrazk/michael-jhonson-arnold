/**
 * Michael Jhonson Arnold Sirait — Executive Landing Page Scripts
 * Handles navigation, interactive filters, modal state, copy actions, and scroll listeners.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- ELEMENT REFERENCES ---
  const header = document.getElementById('siteHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const caseCards = document.querySelectorAll('.case-card');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const toast = document.getElementById('toastNotification');

  // Modal elements
  const btnBriefingModal = document.getElementById('btnBriefingModal');
  const briefingModal = document.getElementById('briefingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const btnCopyProfile = document.getElementById('btnCopyProfile');

  // Copy buttons
  const copyButtons = document.querySelectorAll('.btn-copy');

  // --- 1. STICKY HEADER & SCROLL EFFECTS ---
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header shadow
    if (scrollPos > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollPos > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Active navigation spy
    updateActiveNavLink();
  });

  // --- 2. ACTIVE NAV LINK ON SCROLL ---
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset + 140;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // --- 3. MOBILE MENU TOGGLE ---
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 4. CASE STUDIES FILTERING ---
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Set active button
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      caseCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 180);
        }
      });
    });
  });

  // --- 5. EXECUTIVE BRIEFING MODAL ---
  function openModal() {
    briefingModal.classList.add('open');
    briefingModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    briefingModal.classList.remove('open');
    briefingModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (btnBriefingModal) {
    btnBriefingModal.addEventListener('click', openModal);
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (briefingModal) {
    briefingModal.addEventListener('click', (e) => {
      if (e.target === briefingModal) {
        closeModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && briefingModal.classList.contains('open')) {
      closeModal();
    }
  });

  // --- 6. TOAST NOTIFICATION UTILITY ---
  let toastTimeout;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // --- 7. COPY TO CLIPBOARD ACTIONS ---
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard`);
        }).catch(() => {
          showToast('Failed to copy');
        });
      }
    });
  });

  // Close modal when contact button inside modal is clicked
  const btnModalContact = document.getElementById('btnModalContact');
  if (btnModalContact) {
    btnModalContact.addEventListener('click', closeModal);
  }

  // Copy Profile Summary in Modal
  if (btnCopyProfile) {
    btnCopyProfile.addEventListener('click', () => {
      const summaryText = `Michael Jhonson Arnold Sirait
Mining Engineer | Geotechnical Radar & Drone-based Blast Specialist
- Education: Institut Teknologi Bandung (ITB), Mining Engineering (2015-2019)
- Experience: GroundProbe (Blasting Engineer, Geotechnical Engineer ~5 years)
- Scope: Australia, APAC, Africa, LATAM
- Radar & Slope: GroundProbe MonitorIQ, 2D Radar, TARP Standardization, Slope Failure Back-Analysis
- Blast & Drone Tech: BlastVision, Flyrock Trajectory, Wall Control, Split Desktop, SHOTplus
- Analytics: Python, SQL, KPI Tracking Dashboards
- Contact: michaeljhonsona@gmail.com`;

      navigator.clipboard.writeText(summaryText).then(() => {
        showToast('Profile summary copied to clipboard!');
      }).catch(() => {
        showToast('Failed to copy');
      });
    });
  }

  // --- 7B. APPLIED ENGINEERING SIMULATORS (FEATURE 1) ---
  // A. Simulator Switcher Tabs
  const tabTarp = document.getElementById('tabTarp');
  const tabBlast = document.getElementById('tabBlast');
  const panelTarp = document.getElementById('panelTarp');
  const panelBlast = document.getElementById('panelBlast');

  if (tabTarp && tabBlast && panelTarp && panelBlast) {
    tabTarp.addEventListener('click', () => {
      tabTarp.classList.add('active');
      tabTarp.setAttribute('aria-selected', 'true');
      tabBlast.classList.remove('active');
      tabBlast.setAttribute('aria-selected', 'false');
      panelTarp.classList.add('active');
      panelBlast.classList.remove('active');
    });

    tabBlast.addEventListener('click', () => {
      tabBlast.classList.add('active');
      tabBlast.setAttribute('aria-selected', 'true');
      tabTarp.classList.remove('active');
      tabTarp.setAttribute('aria-selected', 'false');
      panelBlast.classList.add('active');
      panelTarp.classList.remove('active');
    });
  }

  // B. Slope TARP Radar Simulator State Machine
  const velocitySlider = document.getElementById('velocitySlider');
  const velocityDisplay = document.getElementById('velocityDisplay');
  const invVelocityDisplay = document.getElementById('invVelocityDisplay');
  const gaugeFill = document.getElementById('gaugeFill');
  const tarpBanner = document.getElementById('tarpBanner');
  const tarpCode = document.getElementById('tarpCode');
  const tarpName = document.getElementById('tarpName');
  const kinematicTrend = document.getElementById('kinematicTrend');
  const accessStatus = document.getElementById('accessStatus');
  const actionDescription = document.getElementById('actionDescription');
  const presetButtons = document.querySelectorAll('.preset-btn');

  function updateTarpState(velocity) {
    if (!velocityDisplay) return;

    // Numerical Readouts
    velocityDisplay.innerHTML = `${velocity.toFixed(1)} <span class="unit">mm/day</span>`;
    const invV = velocity > 0 ? (1 / velocity).toFixed(3) : '∞';
    invVelocityDisplay.innerHTML = `${invV} <span class="unit-sm">d/mm</span>`;

    // Gauge bar width (0 to 25 mm/day = 0% to 100%)
    const pct = Math.min(Math.max((velocity / 25.0) * 100, 2), 100);
    gaugeFill.style.width = `${pct}%`;

    // TARP Level Classification
    tarpBanner.classList.remove('level-1', 'level-2', 'level-3', 'level-4');

    if (velocity < 2.0) {
      // Level 1: Normal Baseline
      tarpBanner.classList.add('level-1');
      tarpCode.textContent = 'LEVEL 1';
      tarpName.textContent = 'NORMAL BASELINE';
      kinematicTrend.textContent = 'Linear Steady Creep';
      accessStatus.textContent = 'Unrestricted Access';
      actionDescription.textContent = 'Standard continuous radar scanning. Routine daily reporting to mine operations. Mining fleet operates without bench restriction.';
    } else if (velocity >= 2.0 && velocity < 6.0) {
      // Level 2: Advisory
      tarpBanner.classList.add('level-2');
      tarpCode.textContent = 'LEVEL 2';
      tarpName.textContent = 'ADVISORY (REGRESSIVE CREEP)';
      kinematicTrend.textContent = 'Progressive Inelastic Strain';
      accessStatus.textContent = 'Advisory - Geotech Review';
      actionDescription.textContent = 'Increase radar scan resolution. Geotechnical engineer notified for prism/radar correlation. Check drainage trenches and berm tension cracks.';
    } else if (velocity >= 6.0 && velocity < 15.0) {
      // Level 3: Warning
      tarpBanner.classList.add('level-3');
      tarpCode.textContent = 'LEVEL 3';
      tarpName.textContent = 'WARNING (CRITICAL ACCELERATION)';
      kinematicTrend.textContent = 'Accelerating Non-linear Trend';
      accessStatus.textContent = 'Restricted Access - Spotters Onsite';
      actionDescription.textContent = 'High-risk slope movement detected. Restrict bench personnel access. Dispatch dedicated visual spotters and calibrate site-specific TARP alarm thresholds in MonitorIQ.';
    } else {
      // Level 4: Evacuation
      tarpBanner.classList.add('level-4');
      tarpCode.textContent = 'LEVEL 4';
      tarpName.textContent = 'CRITICAL (IMMINENT FAILURE ONSET)';
      kinematicTrend.textContent = 'Tertiary Creep (1/V → 0)';
      accessStatus.textContent = 'NO ACCESS - FULL EVACUATION';
      actionDescription.textContent = 'CRITICAL FAILURE ONSET! Inverse velocity approaching zero. Trigger audible pit siren immediately, withdraw all personnel and heavy machinery to designated safe boundary.';
    }

    // Sync active state on preset buttons
    presetButtons.forEach(btn => {
      const val = parseFloat(btn.getAttribute('data-val'));
      if (Math.abs(val - velocity) < 0.15) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  if (velocitySlider) {
    velocitySlider.addEventListener('input', (e) => {
      const vel = parseFloat(e.target.value);
      updateTarpState(vel);
    });

    presetButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseFloat(btn.getAttribute('data-val'));
        velocitySlider.value = val;
        updateTarpState(val);
      });
    });
  }

  // C. BlastVision Drone Audit Comparator
  const btnModeDesign = document.getElementById('btnModeDesign');
  const btnModeAudit = document.getElementById('btnModeAudit');
  const visModeBadge = document.getElementById('visModeBadge');
  const visModeSub = document.getElementById('visModeSub');
  const valFlyrock = document.getElementById('valFlyrock');
  const subFlyrock = document.getElementById('subFlyrock');
  const valFrag = document.getElementById('valFrag');
  const subFrag = document.getElementById('subFrag');
  const valBoulder = document.getElementById('valBoulder');
  const subBoulder = document.getElementById('subBoulder');
  const valBackbreak = document.getElementById('valBackbreak');
  const subBackbreak = document.getElementById('subBackbreak');
  const blastBannerTitle = document.getElementById('blastBannerTitle');
  const blastBannerSub = document.getElementById('blastBannerSub');

  if (btnModeDesign && btnModeAudit) {
    btnModeDesign.addEventListener('click', () => {
      btnModeDesign.classList.add('active');
      btnModeAudit.classList.remove('active');

      if (visModeBadge) visModeBadge.textContent = 'Nominal Plan Parameters';
      if (visModeSub) visModeSub.textContent = 'Bench 405-6 Block 3 (SHOTplus CAD)';
      if (valFlyrock) valFlyrock.innerHTML = '300 <span class="unit-sm">meters</span>';
      if (subFlyrock) subFlyrock.textContent = 'Nominal clearance radius';
      if (valFrag) valFrag.innerHTML = '25.0 <span class="unit-sm">cm</span>';
      if (subFrag) subFrag.textContent = 'Target crusher feed curve';
      if (valBoulder) valBoulder.innerHTML = '&lt; 3.0 <span class="unit-sm">%</span>';
      if (subBoulder) subBoulder.textContent = 'Crusher tolerance limit';
      if (valBackbreak) valBackbreak.innerHTML = '&lt; 0.80 <span class="unit-sm">meters</span>';
      if (subBackbreak) subBackbreak.textContent = 'Sub-bench stability limit';
      if (blastBannerTitle) blastBannerTitle.textContent = 'Design Plan Verified';
      if (blastBannerSub) blastBannerSub.textContent = 'Theoretical blasting parameters optimized for powder factor 0.38 kg/m³. Ready for field initiation.';
    });

    btnModeAudit.addEventListener('click', () => {
      btnModeAudit.classList.add('active');
      btnModeDesign.classList.remove('active');

      if (visModeBadge) visModeBadge.textContent = 'Drone Computer Vision Audit';
      if (visModeSub) visModeSub.textContent = 'BlastVision UAV High-Res Photogrammetry';
      if (valFlyrock) valFlyrock.innerHTML = '142 <span class="unit-sm">meters</span>';
      if (subFlyrock) subFlyrock.textContent = 'Max detected throw (-158m Safe)';
      if (valFrag) valFrag.innerHTML = '21.8 <span class="unit-sm">cm</span>';
      if (subFrag) subFrag.textContent = 'Actual diggability (+14% faster loading)';
      if (valBoulder) valBoulder.innerHTML = '1.8 <span class="unit-sm">%</span>';
      if (subBoulder) subBoulder.textContent = 'Zero secondary blasting required';
      if (valBackbreak) valBackbreak.innerHTML = '0.35 <span class="unit-sm">meters</span>';
      if (subBackbreak) subBackbreak.textContent = 'Minimal backbreak, highwall intact';
      if (blastBannerTitle) blastBannerTitle.textContent = 'Post-Blast Audit Conformance: 98.4%';
      if (blastBannerSub) blastBannerSub.textContent = 'Zero perimeter flyrock breach, optimal fragmentation distribution, and sub-bench wall integrity fully preserved.';
    });
  }

  // --- 8. BACK TO TOP ACTION ---
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
