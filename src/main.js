import './style.css'
import { pages } from './content.js'

const contentArea = document.querySelector('#content-area');
const navLinks = document.querySelectorAll('#nav-list a');
const topNav = document.querySelector('#top-nav');
const navToggle = document.querySelector('#nav-toggle');

// Activity Menu Toggle
const actToggle = document.getElementById('act-toggle');
const actItem = actToggle ? actToggle.closest('.nav-item') : null;

const PAGE_ORDER = ['home', 'lead-in', 'activity1', 'activity2', 'activity3-1', 'activity3-2', 'activity4', 'activity5', 'activity6', 'rubric', 'reflection'];

const BASE_URL = import.meta.env.BASE_URL;

function resolvePath(path) {
  if (typeof path !== 'string') return path;
  if (path.startsWith('/') && !path.startsWith('//')) {
    // Vite base already includes trailing slash, e.g., /subpath/
    return BASE_URL + path.substring(1);
  }
  return path;
}

function renderPage(pageId) {
  const page = pages[pageId] || pages.home;
  
  // Create hero section
  const isHome = pageId === 'home' || !pageId;
  const heroClass = isHome ? (page.fullHeight ? 'hero full-height' : 'hero') : 'hero subpage';
  
  if (isHome) {
    document.body.classList.remove('is-subpage');
  } else {
    document.body.classList.add('is-subpage');
  }
  
  const heroHtml = `
    <section class="${heroClass}">
      ${isHome ? `
        <div class="hero-overlay"></div>
        <img src="${resolvePath(page.heroImage)}" alt="${page.heroTitle}" style="position: absolute; width:100%; height:100%; object-fit:cover;">
        <div class="hero-content">
          <h1>${page.heroTitle}</h1>
          <p style="font-size: 1.5rem; color: var(--mangrove-mint);">${page.heroSubtitle}</p>
        </div>
        ${page.showArrow ? '<div class="scroll-arrow" id="scroll-to-content">↓</div>' : ''}
      ` : `
        <div class="subpage-header-container">
          <h1 class="subpage-header-title">${page.heroTitle}</h1>
          <span class="subpage-header-divider"></span>
          <p class="subpage-header-subtitle">${page.heroSubtitle}</p>
        </div>
      `}
    </section>
  `;
  
  // Create content section
  let containerClass = 'container';
  if (page.fullScreen) containerClass = 'container full-screen';
  else if (page.wide) containerClass = 'container wide';
  
  const finalContent = page.content.replace(/\/assets\//g, resolvePath('/assets/'));
  
  const currentIndex = PAGE_ORDER.indexOf(pageId);
  const nextPageId = currentIndex < PAGE_ORDER.length - 1 ? PAGE_ORDER[currentIndex + 1] : null;
  const nextPage = nextPageId ? pages[nextPageId] : null;
  
  const prevPageId = currentIndex > 0 ? PAGE_ORDER[currentIndex - 1] : null;
  const prevPage = prevPageId ? pages[prevPageId] : null;

  const contentHtml = `
    <div class="${containerClass}">
      ${finalContent}
      
      ${(nextPage || prevPage) ? `
        <div class="next-task-container" style="justify-content: ${!prevPage ? 'flex-end' : (!nextPage ? 'flex-start' : 'space-between')}">
          ${prevPage ? `
            <a href="#${prevPageId}" class="last-activity-btn">
              <div class="next-task-arrow" style="transform: rotate(180deg)">→</div>
              <span>${prevPageId === 'home' ? 'Back Home' : `Last: ${prevPage.heroTitle}`}</span>
            </a>
          ` : ''}
          
          ${nextPage ? `
            <a href="#${nextPageId}" class="next-task-btn">
              <span>${isHome ? 'Start to Learn' : `Next: ${nextPage.heroTitle}`}</span>
              <div class="next-task-arrow">→</div>
            </a>
          ` : ''}
        </div>
      ` : ''}
    </div>
    ${page.fullScreen ? '' : `
      <footer>
        <div class="footer-credits-refined">
          <div class="credits-heading">Project Team</div>
          <div class="credits-names">
            ZHONG Tong • JIANG Xieni • LYU Dingyi • LIU Xianmin • YU Fengming
          </div>
          <div class="credits-attribution">
            <span class="attribution-role"><strong>Instructor</strong></span>
            <span class="attribution-person">Prof. Chai ChingSing</span>
            <span class="attribution-person">Gao Lei</span>
            <span class="attribution-divider">|</span>
            <span>Chinese University of Hong Kong</span>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Mangrove Quest. All rights reserved.</p>
        </div>
      </footer>
    `}
  `;
  
  contentArea.innerHTML = heroHtml + contentHtml;
  
  // Handle scripts in injected content (SPA innerHTML fix)
  contentArea.querySelectorAll('script').forEach(oldScript => {
    const newScript = document.createElement('script');
    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });

  // Handle Scroll Arrow
  if (page.showArrow) {
    document.getElementById('scroll-to-content').addEventListener('click', () => {
      const target = document.querySelector(`.${containerClass.split(' ')[0]}`);
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Handle Scrollbars
  if (page.fullScreen) {
    document.body.style.overflowY = 'hidden';
    // Small delay to allow initial render then lock if we are already at section
    // Actually, usually we want to allow scrolling BETWEEN hero and content, 
    // but the content itself shouldn't have a double scrollbar.
    // Given the request "不要有滑动块", if the page is full-screen, we might want to hide root scrollbar.
    // But if we have a hero, we need to scroll to content.
    // Let's keep overflow auto but the container itself is clipped.
    document.body.style.overflowY = 'auto'; 
  } else {
  if (pageId === 'lead-in') {
    initLeadIn();
  }
}

function initLeadIn() {
  const revealBtn = document.getElementById('reveal-dyk-btn');
  const dykGroup = document.getElementById('dyk-group');
  
  if (!revealBtn || !dykGroup) return;
  
  revealBtn.addEventListener('click', () => {
    dykGroup.classList.remove('dyk-card-hidden');
    dykGroup.classList.add('dyk-card-visible');
    
    // Smooth scroll to the card group
    setTimeout(() => {
      dykGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
    
    // Optionally change button text or hide it
    revealBtn.innerHTML = '<span>Answer Revealed</span> <i>✨</i>';
    revealBtn.style.opacity = '0.5';
    revealBtn.style.pointerEvents = 'none';
  });
}

function syncActivity31FullscreenButton() {
  const btn = document.getElementById('activity31-fullscreen-btn');
  const target = document.getElementById('activity31-fullscreen-target');
  if (!btn || !target) return;

  const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
  const isFullscreen = fullscreenElement === target;

  btn.textContent = isFullscreen ? 'Exit Fullscreen' : 'Fullscreen';
  btn.setAttribute('aria-label', isFullscreen ? 'Exit fullscreen mode' : 'Enter fullscreen mode');
}

function initActivity2() {
  const container = document.querySelector('.ezfd-form');
  if (!container) return;
  
  const uuid = container.getAttribute('data-form-uuid');
  if (!uuid) return;

  // Check if iframe already exists to prevent duplicate
  if (container.querySelector('iframe')) return;

  const iframe = document.createElement('iframe');
  iframe.src = `https://app.ezfiledrop.com/embed/${uuid}`;
  iframe.style.width = '100%';
  iframe.style.height = '900px'; // Expanded to show full form without scrollbars
  iframe.style.border = 'none';
  iframe.style.borderRadius = '16px';
  iframe.style.background = 'rgba(255, 255, 255, 0.8)'; // Subtle white base to ensure readability within glass shell
  
  container.appendChild(iframe);
}

function initActivity5() {
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_WSzwP-usK8_fL76XnWZz3ND05dec41tXQaOOx2Eth7JN_OxSDyejSiVWlVQI-Ca0mQ/exec";

  const pptInput = document.getElementById('ppt-input');
  const pptNameDisplay = document.getElementById('ppt-name-display');
  const pptBtn = document.getElementById('ppt-btn');
  const pptInstruction = document.getElementById('ppt-instruction');

  if (!pptInput || !pptBtn) return;

  let selectedFile = null;

  pptBtn.addEventListener('click', () => {
    if (pptBtn.textContent === "Select File" || pptBtn.textContent === "Try Again") {
      pptInput.click();
    } else if (pptBtn.textContent === "Submit Presentation" && selectedFile) {
      startUpload();
    }
  });

  pptInput.addEventListener('change', function () {
    if (this.files && this.files.length > 0) {
      selectedFile = this.files[0];
      pptNameDisplay.textContent = "Selected: " + selectedFile.name;
      pptInstruction.style.display = 'none';
      pptBtn.textContent = "Submit Presentation";
      pptBtn.style.backgroundColor = "var(--mangrove-accent)";
      pptNameDisplay.style.color = "var(--mangrove-mint)";
    }
  });

  function startUpload() {
    pptBtn.disabled = true;
    pptBtn.textContent = "Uploading...";
    pptBtn.style.opacity = "0.5";
    pptNameDisplay.textContent = "Uploading... Please do not close the page.";
    
    const reader = new FileReader();
    reader.onload = function (e) {
      const base64Data = e.target.result;
      const payload = {
        fileName: selectedFile.name,
        fileData: base64Data
      };
      
      fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          pptNameDisplay.style.color = "#4caf50";
          pptNameDisplay.textContent = "✅ Success! Presentation saved.";
          pptBtn.style.display = 'none';
        } else {
          throw new Error(data.message);
        }
      })
      .catch(error => {
        pptNameDisplay.style.color = "#f44336";
        pptNameDisplay.textContent = "❌ Upload failed. Check connection.";
        pptBtn.disabled = false;
        pptBtn.textContent = "Try Again";
        pptBtn.style.opacity = "1";
        console.error("Error:", error);
      });
    };
    reader.readAsDataURL(selectedFile);
  }
}
  if (pageId === 'activity6') {
    initActivity6();
  }
  
  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${pageId}`;
    link.classList.toggle('active', isActive);
    
    // Auto-expand activity group if an activity is active
    if (isActive && link.closest('#act-sub-list')) {
      actItem?.classList.add('expanded');
    }
  });

  // Reset scroll
  window.scrollTo(0, 0);

  // Close nav on navigation
  topNav.classList.add('nav-hidden');
  navToggle.classList.remove('active');
}

function initActivity6() {
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxkGrmK-xVNAlbtc7R25bWTCaLOfmIi6VOyws6HHSQfn27vHZsykipnBed4hQbuNO33-A/exec";

  const fileInput = document.getElementById('a6-fileInput');
  const statusIcon = document.getElementById('a6-status-icon');
  const uploadText = document.getElementById('a6-upload-text');
  const fileInfoCard = document.getElementById('a6-file-info-card');
  const fileNameDisplay = document.getElementById('a6-file-name-display');
  const smartBtn = document.getElementById('a6-smart-btn');
  const loadingSpinner = document.getElementById('a6-loading-spinner');
  const resultMsg = document.getElementById('a6-result-msg');

  if (!fileInput || !smartBtn) return;

  let selectedFile = null;

  smartBtn.addEventListener('click', () => {
    if (!selectedFile) {
      fileInput.click();
    } else {
      startUpload();
    }
  });

  fileInput.addEventListener('change', function () {
    if (this.files && this.files.length > 0) {
      selectedFile = this.files[0];
      uploadText.style.display = 'none';
      fileInfoCard.style.display = 'block';
      fileNameDisplay.textContent = selectedFile.name;
      statusIcon.textContent = "📄";
      smartBtn.textContent = "Confirm & Upload";
      smartBtn.classList.add('btn-ready');
      resultMsg.style.display = 'none';
    }
  });

  function startUpload() {
    if (!selectedFile) return;

    smartBtn.disabled = true;
    smartBtn.textContent = "Uploading...";
    smartBtn.classList.remove('btn-ready');
    smartBtn.classList.add('btn-uploading');
    statusIcon.style.display = 'none';
    fileInfoCard.style.display = 'none';
    loadingSpinner.style.display = 'block';
    uploadText.style.display = 'block';
    uploadText.innerHTML = "Submitting to Drive...<br>Please wait.";

    const reader = new FileReader();
    reader.onload = function (e) {
      const base64Data = e.target.result;
      const payload = {
        fileName: selectedFile.name,
        fileData: base64Data
      };

      fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        loadingSpinner.style.display = 'none';
        uploadText.style.display = 'none';
        resultMsg.style.display = 'block';

        if (data.status === "success") {
          statusIcon.style.display = 'block';
          statusIcon.textContent = "✅";
          resultMsg.textContent = "Success! Saved to Drive.";
          resultMsg.className = "result-msg msg-success";
          smartBtn.style.display = 'none';
        } else {
          showError("Error: " + data.message);
        }
      })
      .catch(error => {
        loadingSpinner.style.display = 'none';
        showError("Upload failed.");
        console.error(error);
      });
    };
    reader.readAsDataURL(selectedFile);
  }

  function showError(msgText) {
    statusIcon.style.display = 'block';
    statusIcon.textContent = "❌";
    resultMsg.style.display = 'block';
    resultMsg.textContent = msgText;
    resultMsg.className = "result-msg msg-error";
    smartBtn.disabled = false;
    smartBtn.textContent = "Try Again";
    smartBtn.classList.remove('btn-uploading');
  }
}
  


// Handle routing
function handleRoute() {
  const hash = window.location.hash.substring(1) || 'home';
  renderPage(hash);
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', () => {
  handleRoute();
  // Start with nav hidden for clean editorial look
  topNav.classList.add('nav-hidden');
});

// Navigation Toggle Logic
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  topNav.classList.toggle('nav-hidden');
});

// Activity Sub-menu Logic
actToggle?.addEventListener('click', (e) => {
  e.stopPropagation();
  actItem?.classList.toggle('expanded');
});

// Close nav when clicking outside on mobile or tablet
document.addEventListener('click', (e) => {
  if (!topNav.contains(e.target) && !navToggle.contains(e.target)) {
    topNav.classList.add('nav-hidden');
    navToggle.classList.remove('active');
  }
});

// Dynamic Hero Background Effect (Subtle movement)
contentArea.addEventListener('mousemove', (e) => {
  const heroImg = document.querySelector('.hero img');
  if (heroImg) {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    heroImg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
  }
});

contentArea.addEventListener('click', async (e) => {
  const btn = e.target.closest('#activity31-fullscreen-btn');
  if (!btn) return;

  const target = document.getElementById('activity31-fullscreen-target');
  if (!target) return;

  try {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
    const isFullscreen = fullscreenElement === target;

    if (isFullscreen) {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    } else if (target.requestFullscreen) {
      await target.requestFullscreen();
    } else if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
    }
  } catch (error) {
    console.error('Native fullscreen failed for Activity 3.1:', error);
  } finally {
    syncActivity31FullscreenButton();
  }
});

document.addEventListener('fullscreenchange', syncActivity31FullscreenButton);
document.addEventListener('webkitfullscreenchange', syncActivity31FullscreenButton);
