import './style.css'
import { pages } from './content.js'

const contentArea = document.querySelector('#content-area');
const navLinks = document.querySelectorAll('#nav-list a');
const topNav = document.querySelector('#top-nav');
const navToggle = document.querySelector('#nav-toggle');

// Activity Menu Toggle
const actToggle = document.getElementById('act-toggle');
const actItem = actToggle ? actToggle.closest('.nav-item') : null;

const PAGE_ORDER = ['home', 'lead-in', 'activity1', 'activity2', 'activity3-1', 'activity3-2', 'activity4-1', 'activity4-2', 'activity5', 'activity6', 'rubric', 'reflection'];

const BASE_URL = import.meta.env.BASE_URL;

function resetPageScrollTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function enforceScrollTop(frames = 4) {
  let remaining = frames;
  const tick = () => {
    resetPageScrollTop();
    remaining -= 1;
    if (remaining > 0) requestAnimationFrame(tick);
  };
  tick();
}

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
          <a href="#lead-in" class="hero-start-btn">Start to learn</a>
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

  // Keep root scroll behavior consistent for SPA page swaps.
  document.body.style.overflowY = 'auto';

  if (pageId === 'lead-in') {
    initLeadIn();
  }

function initLeadIn() {
  const revealBtn = document.getElementById('reveal-dyk-btn');
  const dykGroup = document.getElementById('dyk-group');

  if (revealBtn && dykGroup) {
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

  const albumTrack = document.getElementById('mangrove-album-track');
  const prevBtn = document.getElementById('album-prev-btn');
  const nextBtn = document.getElementById('album-next-btn');

  if (window.__leadInAlbumTimer) {
    window.clearInterval(window.__leadInAlbumTimer);
    window.__leadInAlbumTimer = null;
  }

  if (!albumTrack) return;
  const albumItems = Array.from(albumTrack.querySelectorAll('.mangrove-album-item'));

  const calcStep = () => {
    const firstCard = albumTrack.querySelector('.mangrove-album-item');
    if (!firstCard) return Math.max(280, albumTrack.clientWidth * 0.7);
    const style = window.getComputedStyle(albumTrack);
    const gap = parseFloat(style.columnGap || style.gap || '0') || 0;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const scrollNext = () => {
    const max = albumTrack.scrollWidth - albumTrack.clientWidth;
    if (albumTrack.scrollLeft >= max - 4) {
      albumTrack.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }
    albumTrack.scrollBy({ left: calcStep(), behavior: 'smooth' });
  };

  const scrollPrev = () => {
    if (albumTrack.scrollLeft <= 4) {
      const max = albumTrack.scrollWidth - albumTrack.clientWidth;
      albumTrack.scrollTo({ left: Math.max(0, max), behavior: 'smooth' });
      return;
    }
    albumTrack.scrollBy({ left: -calcStep(), behavior: 'smooth' });
  };

  const updateAlbumDepth = () => {
    if (albumItems.length === 0) return;
    const trackRect = albumTrack.getBoundingClientRect();
    const centerX = trackRect.left + trackRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    albumItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const c = rect.left + rect.width / 2;
      const d = Math.abs(c - centerX);
      if (d < closestDistance) {
        closestDistance = d;
        closestIndex = index;
      }
    });

    albumItems.forEach((item, index) => {
      item.classList.remove('is-center', 'is-left', 'is-right', 'is-far');
      if (index === closestIndex) {
        item.classList.add('is-center');
        return;
      }
      if (index === closestIndex - 1) {
        item.classList.add('is-left');
        return;
      }
      if (index === closestIndex + 1) {
        item.classList.add('is-right');
        return;
      }
      item.classList.add('is-far');
    });
  };

  prevBtn?.addEventListener('click', scrollPrev);
  nextBtn?.addEventListener('click', scrollNext);

  const startAutoPlay = () => {
    window.__leadInAlbumTimer = window.setInterval(scrollNext, 3200);
  };
  const stopAutoPlay = () => {
    if (!window.__leadInAlbumTimer) return;
    window.clearInterval(window.__leadInAlbumTimer);
    window.__leadInAlbumTimer = null;
  };

  albumTrack.addEventListener('mouseenter', stopAutoPlay);
  albumTrack.addEventListener('mouseleave', startAutoPlay);
  prevBtn?.addEventListener('mouseenter', stopAutoPlay);
  prevBtn?.addEventListener('mouseleave', startAutoPlay);
  nextBtn?.addEventListener('mouseenter', stopAutoPlay);
  nextBtn?.addEventListener('mouseleave', startAutoPlay);
  albumTrack.addEventListener('scroll', updateAlbumDepth, { passive: true });
  window.addEventListener('resize', updateAlbumDepth);

  updateAlbumDepth();
  startAutoPlay();
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

function initActivity32() {
  const bank = document.getElementById('fc-species-bank');
  const workspace = document.getElementById('fc-workspace');
  const linkLayer = document.getElementById('fc-link-layer');
  const clearBtn = document.getElementById('fc-clear-btn');
  const submitBtn = document.getElementById('fc-submit-btn');
  const feedback = document.getElementById('fc-feedback');

  if (!bank || !workspace || !linkLayer || !clearBtn || !submitBtn || !feedback) return;

  const nodes = new Map(); // species -> { el, x, y }
  const links = new Set(); // "from|to|fromSide|toSide"
  let selectedSource = null;
  let selectedLink = null;
  let activeLinkSource = null;
  let activeLinkSourceSide = null;
  let tempPointer = null;

  const validLinks = new Set([
    '木榄|弧边招潮蟹',
    '藻类|弧边招潮蟹',
    '藻类|牡蛎',
    '浮游生物|牡蛎',
    '弧边招潮蟹|大弹涂鱼',
    '牡蛎|大弹涂鱼',
    '大弹涂鱼|黑脸琵鹭',
    '弧边招潮蟹|黑脸琵鹭',
    '大弹涂鱼|豹猫',
    '大弹涂鱼|柠檬鲨'
  ]);

  const removeNodeBySpecies = (species) => {
    const entry = nodes.get(species);
    if (!entry) return;
    entry.el.remove();
    nodes.delete(species);
    Array.from(links).forEach((pair) => {
      const [from, to] = pair.split('|');
      if (from === species || to === species) links.delete(pair);
    });
    if (selectedSource === species) selectedSource = null;
    renderLinks();
  };

  const ensureMarker = () => {
    if (linkLayer.querySelector('#fc-arrow')) return;
    linkLayer.innerHTML = `
      <defs>
        <marker id="fc-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto-start-reverse">
          <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#1a5c50"></path>
        </marker>
      </defs>
    `;
  };

  const workspaceRect = () => workspace.getBoundingClientRect();

  const clearSelection = () => {
    selectedSource = null;
    workspace.querySelectorAll('.fc-node.selected').forEach((node) => node.classList.remove('selected'));
  };

  const clearLinkSelection = () => {
    selectedLink = null;
  };

  const toWorkspacePoint = (clientX, clientY) => {
    const rect = workspaceRect();
    return {
      x: Math.max(8, Math.min(clientX - rect.left, rect.width - 8)),
      y: Math.max(8, Math.min(clientY - rect.top, rect.height - 8))
    };
  };

  const getAnchorPoint = (species, side = 'right') => {
    const entry = nodes.get(species);
    if (!entry) return null;
    const anchor = entry.el.querySelector(`.fc-node-anchor[data-side="${side}"]`);
    if (!anchor) return { x: entry.x, y: entry.y };
    const wr = workspaceRect();
    const ar = anchor.getBoundingClientRect();
    return {
      x: ar.left + ar.width / 2 - wr.left,
      y: ar.top + ar.height / 2 - wr.top
    };
  };

  const renderLinks = () => {
    ensureMarker();
    const defs = linkLayer.querySelector('defs');
    linkLayer.innerHTML = '';
    if (defs) linkLayer.appendChild(defs);

    const w = workspace.clientWidth;
    const h = workspace.clientHeight;
    linkLayer.setAttribute('viewBox', `0 0 ${w} ${h}`);
    linkLayer.setAttribute('width', String(w));
    linkLayer.setAttribute('height', String(h));

    links.forEach((pair) => {
      const [from, to, fromSide = 'right', toSide = 'left'] = pair.split('|');
      const fromPoint = getAnchorPoint(from, fromSide);
      const toPoint = getAnchorPoint(to, toSide);
      if (!fromPoint || !toPoint) return;

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.classList.add('fc-link');
      if (selectedLink === pair) line.classList.add('selected');
      line.setAttribute('x1', String(fromPoint.x));
      line.setAttribute('y1', String(fromPoint.y));
      line.setAttribute('x2', String(toPoint.x));
      line.setAttribute('y2', String(toPoint.y));
      line.setAttribute('stroke', '#1a5c50');
      line.setAttribute('stroke-width', '2.2');
      line.setAttribute('marker-end', 'url(#fc-arrow)');
      line.setAttribute('stroke-linecap', 'round');
      line.dataset.pair = pair;
      line.addEventListener('click', (e) => {
        e.stopPropagation();
        clearSelection();
        selectedLink = pair;
        renderLinks();
      });
      linkLayer.appendChild(line);
    });

    if (activeLinkSource && tempPointer) {
      const fromPoint = getAnchorPoint(activeLinkSource, activeLinkSourceSide || 'right');
      if (fromPoint) {
        const tempLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        tempLine.setAttribute('x1', String(fromPoint.x));
        tempLine.setAttribute('y1', String(fromPoint.y));
        tempLine.setAttribute('x2', String(tempPointer.x));
        tempLine.setAttribute('y2', String(tempPointer.y));
        tempLine.setAttribute('stroke', '#2a7467');
        tempLine.setAttribute('stroke-width', '1.8');
        tempLine.setAttribute('stroke-dasharray', '6 4');
        tempLine.setAttribute('marker-end', 'url(#fc-arrow)');
        tempLine.setAttribute('stroke-linecap', 'round');
        linkLayer.appendChild(tempLine);
      }
    }
  };

  const updateNodePosition = (species, x, y) => {
    const node = nodes.get(species);
    if (!node) return;
    node.x = x;
    node.y = y;
    node.el.style.left = `${x}px`;
    node.el.style.top = `${y}px`;
    renderLinks();
  };

  const placeNode = (species, x, y) => {
    if (nodes.has(species)) {
      updateNodePosition(species, x, y);
      return;
    }

    const nodeBtn = document.createElement('button');
    nodeBtn.type = 'button';
    nodeBtn.className = 'fc-node';
    nodeBtn.dataset.species = species;
    nodeBtn.innerHTML = `
      <span class="fc-node-label">${species}</span>
      <span class="fc-node-anchor" data-anchor="${species}" data-side="top" title="Drag from here to connect"></span>
      <span class="fc-node-anchor" data-anchor="${species}" data-side="right" title="Drag from here to connect"></span>
      <span class="fc-node-anchor" data-anchor="${species}" data-side="bottom" title="Drag from here to connect"></span>
      <span class="fc-node-anchor" data-anchor="${species}" data-side="left" title="Drag from here to connect"></span>
    `;
    nodeBtn.style.left = `${x}px`;
    nodeBtn.style.top = `${y}px`;

    nodeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (nodeBtn.dataset.justDragged === '1') {
        nodeBtn.dataset.justDragged = '0';
        return;
      }
      clearLinkSelection();
      if (!selectedSource) {
        selectedSource = species;
        nodeBtn.classList.add('selected');
        return;
      }

      if (selectedSource === species) {
        clearSelection();
        return;
      }
      clearSelection();
    });

    const anchors = nodeBtn.querySelectorAll('.fc-node-anchor');
    nodeBtn.addEventListener('mousedown', (e) => {
      const isAnchor = e.target.closest('.fc-node-anchor');
      if (isAnchor) return;
      e.preventDefault();

      const rect = workspaceRect();
      const startX = e.clientX;
      const startY = e.clientY;
      let moved = false;

      const onMove = (evt) => {
        const dx = evt.clientX - startX;
        const dy = evt.clientY - startY;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) moved = true;

        const pt = toWorkspacePoint(evt.clientX, evt.clientY);
        updateNodePosition(species, pt.x, pt.y);
      };

      const onUp = () => {
        if (moved) {
          nodeBtn.dataset.justDragged = '1';
        }
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });

    anchors.forEach((anchor) => {
      anchor.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        activeLinkSource = species;
        activeLinkSourceSide = anchor.dataset.side || 'right';
        tempPointer = toWorkspacePoint(e.clientX, e.clientY);
        renderLinks();

        const onMove = (evt) => {
          tempPointer = toWorkspacePoint(evt.clientX, evt.clientY);
          renderLinks();
        };

        const onUp = (evt) => {
          const targetAnchor = evt.target.closest('.fc-node-anchor');
          if (targetAnchor) {
            const targetSpecies = targetAnchor.dataset.anchor;
            const targetSide = targetAnchor.dataset.side || 'left';
            if (targetSpecies && targetSpecies !== activeLinkSource) {
              links.add(`${activeLinkSource}|${targetSpecies}|${activeLinkSourceSide}|${targetSide}`);
              clearLinkSelection();
              feedback.textContent = 'Link added. Keep building your food chain.';
              feedback.className = 'activity32-feedback info';
            }
          }
          activeLinkSource = null;
          activeLinkSourceSide = null;
          tempPointer = null;
          renderLinks();
          document.removeEventListener('mousemove', onMove);
          document.removeEventListener('mouseup', onUp);
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
      });
    });

    nodes.set(species, { el: nodeBtn, x, y });
    workspace.appendChild(nodeBtn);
    renderLinks();
  };

  bank.querySelectorAll('.fc-species-chip').forEach((chip) => {
    chip.addEventListener('dragstart', (e) => {
      const species = chip.dataset.species;
      if (!species) return;
      e.dataTransfer?.setData('text/plain', species);
      e.dataTransfer.effectAllowed = 'copy';
    });
  });

  workspace.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  });

  workspace.addEventListener('drop', (e) => {
    e.preventDefault();
    const species = e.dataTransfer?.getData('text/plain');
    if (!species) return;
    const rect = workspaceRect();
    const x = Math.max(70, Math.min(e.clientX - rect.left, rect.width - 70));
    const y = Math.max(40, Math.min(e.clientY - rect.top, rect.height - 40));
    placeNode(species, x, y);
    clearLinkSelection();
    feedback.textContent = `${species} placed in workspace.`;
    feedback.className = 'activity32-feedback info';
  });

  workspace.addEventListener('click', () => {
    clearSelection();
    clearLinkSelection();
    renderLinks();
  });

  clearBtn.addEventListener('click', () => {
    nodes.forEach((entry) => entry.el.remove());
    nodes.clear();
    links.clear();
    clearSelection();
    clearLinkSelection();
    renderLinks();
    feedback.textContent = 'Workspace cleared.';
    feedback.className = 'activity32-feedback info';
  });

  if (window.__activity32DeleteHandler) {
    document.removeEventListener('keydown', window.__activity32DeleteHandler);
  }
  window.__activity32DeleteHandler = (e) => {
    if (e.key !== 'Delete' && e.key !== 'Backspace') return;
    if (!selectedSource && !selectedLink) return;
    e.preventDefault();
    if (selectedLink) {
      links.delete(selectedLink);
      clearLinkSelection();
      renderLinks();
      feedback.textContent = 'Selected link removed.';
      feedback.className = 'activity32-feedback info';
      return;
    }
    removeNodeBySpecies(selectedSource);
    clearSelection();
    clearLinkSelection();
    feedback.textContent = 'Selected species removed.';
    feedback.className = 'activity32-feedback info';
  };
  document.addEventListener('keydown', window.__activity32DeleteHandler);

  submitBtn.addEventListener('click', () => {
    const created = Array.from(new Set(Array.from(links).map((item) => item.split('|').slice(0, 2).join('|'))));
    const invalid = created.filter((link) => !validLinks.has(link));
    const validCount = created.length - invalid.length;

    let hasChain3 = false;
    created.forEach((first) => {
      const [, mid] = first.split('|');
      created.forEach((second) => {
        const [head] = second.split('|');
        if (mid === head) hasChain3 = true;
      });
    });

    if (created.length === 0) {
      feedback.textContent = 'No links yet. Build at least one food chain before submitting.';
      feedback.className = 'activity32-feedback warn';
      return;
    }

    if (invalid.length > 0) {
      feedback.textContent = `Not correct yet: ${invalid.length} link(s) do not match the mangrove food chain.`;
      feedback.className = 'activity32-feedback error';
      return;
    }

    if (validCount < 5 || !hasChain3) {
      feedback.textContent = 'Almost there. Add more correct links and make at least one 3-step chain.';
      feedback.className = 'activity32-feedback warn';
      return;
    }

    feedback.textContent = `Great job! ${validCount} valid links. Your food chain is correct.`;
    feedback.className = 'activity32-feedback success';
  });

  window.addEventListener('resize', renderLinks);
  renderLinks();
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
  if (pageId === 'activity2') {
    initActivity2();
  }

  if (pageId === 'activity3-2') {
    initActivity32();
  }

  if (pageId === 'activity5') {
    initActivity5();
  }

  if (pageId === 'activity6') {
    initActivity6();
    initPosterModal();
  }
  
  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${pageId}`;
    link.classList.toggle('active', isActive);
    
    // Auto-expand activity group if an activity is active
    if (isActive && link.closest('#act-sub-list')) {
      actItem?.classList.add('expanded');
    }
  });

  // Reset scroll immediately and once more on next frame to avoid hash/focus overrides.
  resetPageScrollTop();
  requestAnimationFrame(() => resetPageScrollTop());

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

function initPosterModal() {
  const modal = document.getElementById('activity6-poster-modal');
  const openTrigger = document.querySelector('[data-poster-open]');
  const closeTargets = document.querySelectorAll('[data-poster-close]');

  if (!modal || !openTrigger || closeTargets.length === 0) return;

  const openModal = () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  openTrigger.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openModal();
  };

  openTrigger.onkeydown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal();
    }
  };

  closeTargets.forEach((node) => {
    node.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    };
  });

  document.onkeydown = (e) => {
    if (e.key === 'Escape') closeModal();
  };
}
  


// Handle routing
function handleRoute() {
  const hash = window.location.hash.substring(1) || 'home';
  // Guard against browser hash-scroll and history restoration keeping old offset.
  enforceScrollTop();
  renderPage(hash);
  enforceScrollTop();
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
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
