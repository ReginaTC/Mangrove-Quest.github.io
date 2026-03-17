import './style.css'
import { pages } from './content.js'

const contentArea = document.querySelector('#content-area');
const navLinks = document.querySelectorAll('#nav-list a');

function renderPage(pageId) {
  const page = pages[pageId] || pages.home;
  
  // Create hero section
  const heroClass = page.fullHeight ? 'hero full-height' : 'hero';
  const heroHtml = `
    <section class="${heroClass}">
      <div class="hero-overlay"></div>
      <img src="${page.heroImage}" alt="${page.heroTitle}" style="position: absolute; width:100%; height:100%; object-fit:cover;">
      <div class="hero-content">
        <h1>${page.heroTitle}</h1>
        <p style="font-size: 1.5rem; color: var(--mangrove-mint);">${page.heroSubtitle}</p>
      </div>
      ${page.showArrow ? '<div class="scroll-arrow" id="scroll-to-content">↓</div>' : ''}
    </section>
  `;
  
  // Create content section
  let containerClass = 'container';
  if (page.fullScreen) containerClass = 'container full-screen';
  else if (page.wide) containerClass = 'container wide';
  
  const contentHtml = `
    <div class="${containerClass}">
      ${page.content}
    </div>
    ${page.fullScreen ? '' : `
      <footer>
        <div class="footer-credits-refined">
          <div class="credits-heading">Project Team</div>
          <div class="credits-names">
            ZHONG Tong • JIANG Xieni • LYU Dingyi • LIU Xianmin • YU Fengming
          </div>
          <div class="credits-attribution">
            <span><strong>Instructor:</strong> Chai ChingSing</span>
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
  // Handle Page Specific Initializations
  if (pageId === 'activity2') {
    initActivity2();
  }
  if (pageId === 'activity5') {
    initActivity5();
  }
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
    link.classList.toggle('active', link.dataset.page === pageId);
  });
  
  // Reset scroll and trigger reveal
  window.scrollTo(0, 0);
  setTimeout(initReveal, 100);
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
  

function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach(reveal => {
    observer.observe(reveal);
  });
}

// Handle routing
function handleRoute() {
  const hash = window.location.hash.substring(1) || 'home';
  renderPage(hash);
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

// Dynamic Hero Background Effect (Subtle movement)
contentArea.addEventListener('mousemove', (e) => {
  const heroImg = document.querySelector('.hero img');
  if (heroImg) {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    heroImg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
  }
});
