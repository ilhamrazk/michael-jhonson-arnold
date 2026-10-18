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
