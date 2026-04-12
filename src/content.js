export const pages = {
  home: {
    title: "1. Basic Information",
    heroTitle: "Mangrove Quest",
    heroSubtitle: "Explore the Hidden Wonders of the Coastal Forest",
    heroImage: "/assets/mangrove-hero.png",
    content: `
      <div class="home-usage-note">
        <span class="home-usage-note-arrow">↓</span>
        <span>The following content on this page is a usage guide for this courseware.</span>
      </div>

      <div class="card glass">
        <h2>Introductory Note</h2>
        <p>This website is designed to create a self‑directed learning experience that integrates mangrove ecosystem knowledge with gamified experiences and offline practice. Through problem‑based research, AI‑assisted study, and interactive games, students will explore the mangrove environment, including the interdependent relationships between its animals and plants and the ecological challenges it faces.</p>
        <p style="margin-top:1rem;">Combining online learning with fieldwork at a local mangrove park, the course guides students to apply their knowledge by designing a micro-ecosystem bottle and creating an E-poster. This process aims to develop students' abilities in information gathering, hands‑on practice, teamwork, and autonomous learning, while fostering ecological awareness and a sense of environmental citizenship.</p>
      </div>
      <div class="card glass">
        <h2>Course Details</h2>
        <ul style="list-style: none;">
          <li><strong>Subject:</strong> Science</li>
          <li><strong>Topic:</strong> Mangrove Ecosystem Study</li>
          <li><strong>Level/Stream:</strong> 7th Grade</li>
          <li><strong>Lesson Duration:</strong> 8 Class Periods</li>
        </ul>
      </div>
      <div class="card glass">
        <h2>Learner Analysis</h2>
        <h3 style="margin: 1rem 0 0.5rem 0; color: var(--mangrove-accent);">1. Cognitive Foundation</h3>
        <p>Students have learned primary school science and basic Grade 7 biology/geography, with preliminary understanding of climate, ecology, environment, and land-sea distribution. They are able to conduct simple observation and comparison, with basic analytical skills. Thinking is mainly concrete, while abstract thinking is emerging.</p>
        
        <h3 style="margin: 1rem 0 0.5rem 0; color: var(--mangrove-accent);">2. Ability Characteristics</h3>
        <p>Students have initial willingness to cooperate and learn independently; they enjoy games, hands-on activities, and field experiences. However, they are weak in systematic inquiry, data processing, and report writing, requiring step-by-step guidance.</p>
        
        <h3 style="margin: 1rem 0 0.5rem 0; color: var(--mangrove-accent);">3. Affective Domain & Attitude</h3>
        <p>Students are curious about nature and local ecology, with basic environmental awareness. They easily gain a sense of accomplishment through real tasks and achievement displays, making local mangrove-focused and problem-driven learning highly suitable.</p>
        
        <h3 style="margin: 1rem 0 0.5rem 0; color: var(--mangrove-accent);">4. Alignment with Curriculum Standards</h3>
        <p>This interdisciplinary, inquiry-based, practical, and locally rooted curriculum highlights human-earth coordination, fully meeting the needs of core literacy development for Grade 7 students.</p>
      </div>
      <div class="card glass">
        <h2>Lesson Objectives</h2>
        <p>By the end of the lessons, students will be able to:</p>
        <ul style="margin-top: 1rem; margin-left: 1.5rem;">
          <li>Use digital tools and AI to research, analyze, and synthesize information about mangrove ecosystems.</li>
          <li>Conduct authentic field observations using mobile devices to document local biodiversity and environmental conditions.</li>
          <li>Explain the interdependent relationships between animals and plants in mangroves through game-based role-playing.</li>
          <li>Collaborate to investigate a specific species' environmental threats and present findings clearly.</li>
          <li>Apply visual arts skills to design an E-poster that combines scientific knowledge with creative expression for peer sharing.</li>
          <li>Design and construct a micro-ecosystem bottle that demonstrates their understanding of ecosystem balance and proposed solutions to threats.</li>
          <li>Defend their design in a simulated environmental hearing, reflect on their learning journey, and demonstrate enhanced ecological citizenship.</li>
        </ul>
      </div>
      <div class="card glass">
        <h2>Group Members</h2>
        <ul style="list-style: none;">
          <li>ZHONG Tong (1155252981)</li>
          <li>JIANG Xieni (1155252355)</li>
          <li>LYU Dingyi (1155173818)</li>
          <li>LIU Xianmin (1155250994)</li>
          <li>YU Fengming (1155248226)</li>
        </ul>
      </div>
    `
  },
  'lead-in': {
    title: "2. Lead-in",
    heroTitle: "Lead-in",
    heroSubtitle: "The Breathing Forest",
    heroImage: "/assets/lead-in.png",
    content: `
      <h1 class="leadin-main-title">The Breathing Forest</h1>

      <div class="card glass leadin-intro-card">
        <p>Do you know that along the coastline of <strong>Shenzhen Bay</strong>, there is a <strong>"breathing" forest</strong>?</p>
        <p>These forests take root in the <strong>intertidal zone</strong> with strong vitality, serving as an <strong>ecological bridge</strong> between land and sea.</p>
        <p><strong>Mangroves</strong> provide shelter for countless creatures and act as a vital <strong>"green kidney"</strong> for our busy city.</p>
        <p>Today, let's step closer and explore these amazing <strong>coastal guardians</strong>.</p>
      </div>

      <div class="mangrove-album-card">
        <div class="mangrove-album-shell">
          <button id="album-prev-btn" class="mangrove-album-nav" type="button" aria-label="上一组">&lt;&lt;</button>
          <div id="mangrove-album-track" class="mangrove-album-track">
            <figure class="mangrove-album-item">
              <img src="/assets/photos/1.jpg" alt="Mangrove Photo 1">
            </figure>
            <figure class="mangrove-album-item">
              <img src="/assets/photos/2.jpg" alt="Mangrove Photo 2">
            </figure>
            <figure class="mangrove-album-item">
              <img src="/assets/photos/3.jpg" alt="Mangrove Photo 3">
            </figure>
            <figure class="mangrove-album-item">
              <img src="/assets/photos/4.jpg" alt="Mangrove Photo 4">
            </figure>
            <figure class="mangrove-album-item">
              <img src="/assets/photos/5.jpg" alt="Mangrove Photo 5">
            </figure>
            <figure class="mangrove-album-item">
              <img src="/assets/photos/6.jpg" alt="Mangrove Photo 6">
            </figure>
            <figure class="mangrove-album-item">
              <img src="/assets/photos/7.jpg" alt="Mangrove Photo 7">
            </figure>
            <figure class="mangrove-album-item">
              <img src="/assets/photos/8.jpg" alt="Mangrove Photo 8">
            </figure>
          </div>
          <button id="album-next-btn" class="mangrove-album-nav" type="button" aria-label="下一组">&gt;&gt;</button>
        </div>
      </div>
      
      <div class="card glass" style="border-left: 4px solid var(--mangrove-accent);">
        <h2>🤔 THINK</h2>
        <p style="font-size: 1.2rem; font-weight: 600; color: #000000;">Why are these <span style="color: #2e8b57;">green</span> forests called mangroves (which means "<span style="color: #d9534f;">red</span> forest" in Chinese)?</p>
        <button class="reveal-dyk-btn" id="reveal-dyk-btn">
          <span>Discover the Answer</span>
          <i>✨</i>
        </button>
      </div>

      <!-- Do You Know & Call to Action (Initially Hidden Group) -->
      <div id="dyk-group" class="dyk-card-hidden">
        <!-- Card 1: The Answer -->
        <div class="card glass" id="dyk-card" style="margin-bottom: 2rem;">
          <h2>💡 Do You Know?</h2>
          <div class="dyk-text-top">
            <p>When an apple is cut open, the flesh will gradually turn brown. This is because the apple contains <strong>tannin</strong>, which oxidizes when exposed to air.</p>
            <p style="margin-top:1.2rem;">The content of tannin in mangrove plants is extremely high—this is their natural defense. When injured, they turn <strong>dark red</strong> as the tannin oxidizes, making the tree appear to "bleed".</p>
            <p style="margin-top:1rem;">This striking red reaction is exactly why they are named <strong>"Red Forest"</strong> (Mangroves).</p>
          </div>

          <div class="dyk-gallery">
            <div class="dyk-image-box">
              <img src="/assets/did_you_know_apple.png" alt="Apple Oxidation">
              <div class="dyk-label">Apple Oxidation (10 mins)</div>
            </div>
            <div class="dyk-image-box">
              <img src="/assets/did_you_know_tree.png" alt="Mangrove Tannin">
              <div class="dyk-label">Mangrove Tannin Oxidation</div>
            </div>
          </div>
        </div>

        <!-- Card 2: The Call to Action -->
        <div class="card glass" style="text-align: center; border-top: 4px solid var(--mangrove-gold); padding: 3rem;">
          <p style="font-style: italic; margin-bottom: 1.5rem; font-size: 1.1rem; color: var(--text-muted);">Actually, there are many secrets hidden in the mangrove forest, which you need to explore and discover by yourselves. Are you ready to know these special plants and their neighbors?</p>
          <h3 style="color: var(--mangrove-deep); letter-spacing: 2px; font-size: 1.8rem; margin: 0;">📢 LET'S START YOUR MANGROVE QUEST!</h3>
        </div>
      </div>
    `
  },
  activity1: {
    title: "3.1 Activity 1: Knowledge Hunt",
    heroTitle: "Activity 1",
    heroSubtitle: "Knowledge Hunt: AI Research",
    heroImage: "/assets/activity1.png",
    content: `
      <div class="centered-content" style="text-align: center;">
        <div class="guide-speech">
          Get ready to dive into the amazing mangrove world!
        </div>

        <div class="card glass">
          <h2>🤔 Think & Watch</h2>
          <p>Watch this exciting video and think about these questions as you go:</p>
          
          <div class="bubble-container">
            <div class="question-bubble">
              <div class="question-bubble-text">What plants and animals live here? What do they look like?</div>
            </div>
            <div class="question-bubble">
              <div class="question-bubble-text">How do they survive in salty water, mud, and changing tides?</div>
            </div>
            <div class="question-bubble">
              <div class="question-bubble-text">What connections exist between plants and animals? Who helps whom?</div>
            </div>
            <div class="question-bubble">
              <div class="question-bubble-text">What problems do mangroves face? What do humans do?</div>
            </div>
            <div class="question-bubble">
              <div class="question-bubble-text">Why are mangroves so important?</div>
            </div>
          </div>
        </div>

        <div class="guide-speech">
          Let's start! Click the video below ⬇️
        </div>

        <div class="video-player-wrap">
          <div class="video-container">
            <iframe 
              src="https://www.youtube.com/embed/OWlHyKQCh5Q" 
              frameborder="0" allowfullscreen>
            </iframe>
          </div>
        </div>

        <p class="reveal" style="font-style: italic; color: var(--mangrove-mint); margin: 2rem 0; font-size: 1.1rem;">
          After watching, share your most curious new questions in the discussion forum!
        </p>

        <div class="card glass">
          <h2>Discussion Forum</h2>
          <div class="padlet-container">
            <iframe
              src="https://padlet.com/embed/zu68jiwownbdxb3c"
              allowfullscreen
              allow="camera; microphone; geolocation"
              style="width: 100%; height: 100%; border: none;"
            >
            </iframe>
          </div>
        </div>

        <div class="guide-speech">
          Ask the AI Assistant if you want to explore deeper!
        </div>

        <div class="card glass">
          <h2>Mangrove Quest AI Guide</h2>
          <div class="ai-interactive-layout" style="display: block;">
            <div class="ai-iframe-container">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/Dffwd61dvQ7oqb59QonhA"
                width="100%"
                height="100%"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    `
  },
  activity2: {
    title: "3.2 Activity 2: Role-playing Game",
    heroTitle: "Activity 2",
    heroSubtitle: "Role-playing Game: Roles of the Forest",
    heroImage: "/assets/activity2.png",
    content: `
      <div class="centered-content" style="text-align: center;">
        <div class="guide-speech">
          This 14-minute video shows the exciting "dinner time" in mangroves – so lively!
        </div>

        <div class="video-player-wrap">
          <div class="video-container">
            <iframe
              src="https://www.youtube.com/embed/m4xhZ6v2eN8"
              frameborder="0" allowfullscreen>
            </iframe>
          </div>
        </div>

        <div class="guide-speech" style="margin: 3rem auto 2rem auto;">
          Your group creative challenge ⬇️<br />
          Work with your group to create a short, fun voice-over for one mangrove clip.
        </div>

        <div class="two-column-layout">
          <div class="column-glass bubble-list-card">
            <h3>Super Flexible Styles:</h3>
            <ul>
              <li>Classic narration (like a nature documentary host explaining what’s happening)</li>
              <li>Fun role-play dialogue (e.g., the fiddler crab complaining to the mudskipper, “Hey, the tide is coming too fast!” or birds chatting while hunting)</li>
              <li>Add humor, personification, or cool facts you’ve learned – make it your own!</li>
            </ul>
          </div>

          <div class="column-glass bubble-list-card">
            <h3>Quick Steps:</h3>
            <ul>
              <li>Watch together (mute OK) and note interesting parts + timestamps.</li>
              <li>Pick a ~3-min clip and one focus animal. Write start/end times (e.g., 2:10–5:00).</li>
              <li>Write a short, fun script.</li>
              <li>Record your voices over the clip (mute original sound). Use CapCut, Voice Recorder, etc.</li>
              <li>Upload to class Drive or discussion area. Name it like “GroupX_FiddlerCrab.mp4”.</li>
            </ul>
          </div>
        </div>

        <div class="upload-section">
          <h3 style="color: var(--mangrove-accent); margin-bottom: 1.5rem;">Mangrove Quest - Upload your video</h3>
          <div class="padlet-embed" style="border:1px solid rgba(0,0,0,0.1);border-radius:2px;box-sizing:border-box;overflow:hidden;position:relative;width:100%;background:#F4F4F4">
            <p style="padding:0;margin:0">
              <iframe src="https://padlet.com/embed/51wc4j5atj0tn5um" frameborder="0" allow="camera;microphone;geolocation;display-capture;clipboard-write" style="width:100%;height:608px;display:block;padding:0;margin:0"></iframe>
            </p>
            <div style="display:flex;align-items:center;justify-content:end;margin:0;padding:8px 8px 8px 0">
              <a href="https://padlet.com?ref=embed" style="display:flex;align-items:center;gap:5px;flex-grow:0;margin:0;border:none;padding:0;text-decoration:none" target="_blank">
                <span aria-hidden style="color:#9E9E9E;font-size:10px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,sans-serif;line-height:1">Made with</span>
                <img src="https://padlet.net/emails/padlet_email_logo_2026_text-dark-200.png" height="12" style="padding:0;margin:0;background:0 0;border:none;box-shadow:none;display:block" alt="Padlet 上的创作">
              </a>
            </div>
          </div>
          <p class="reveal" style="font-style: italic; color: #000; margin: 2rem 0 0 0; font-size: 1.1rem;">
            After uploading, feel free to share in the discussion:<br />
            Which animal did you choose?<br />
            What made your narration fun or special?
          </p>
        </div>
      </div>
    `
  },
  'activity3-1': {
    title: "3.3.1 Activity 3.1: Field Expedition",
    heroTitle: "Activity 3.1",
    heroSubtitle: "Field Expedition: Nature's Playground",
    heroImage: "/assets/activity3-1.png",
    fullHeight: true,
    showArrow: true,
    fullScreen: true,
    content: `
      <div class="card glass activity31-card">
        <div id="activity31-fullscreen-target" class="activity31-frame-shell">
          <button id="activity31-fullscreen-btn" class="iframe-fullscreen-btn" type="button" aria-label="Enter fullscreen mode">
            Fullscreen
          </button>
          <iframe
            src="https://6rzr9888rn.coze.site/"
            style="width: 100%; height: 100%; border: none;"
            allow="microphone; camera; geolocation; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    `
  },
  'activity3-2': {
    title: "3.3.2 Activity 3.2: Concept Map",
    heroTitle: "Activity 3.2",
    heroSubtitle: "Concept Map: Mapping Connections",
    heroImage: "/assets/activity3-2.png",
    content: `
      <div class="card glass">
        <h2>Concept Map Creation</h2>
        <div class="two-column-layout" style="margin-top: 1.2rem; align-items: flex-start;">
          <div style="flex: 1.05;">
            <h3 style="color: var(--mangrove-deep); margin-bottom: 1rem;">Background & Task</h3>
            <p>We have gained a basic understanding of the species related to mangroves after our initial study. Please work in small groups, combine the knowledge of ecosystems we have learned from the textbook (pages 85-88), and draw a concept map on the structure and function of mangrove ecosystems.</p>

            <ul style="margin: 1.5rem 0; padding-left: 1.5rem;">
              <li style="margin-bottom: 0.75rem;">Use the <strong>Food Chain Builder below on this page</strong> to create your map.</li>
              <li>Consider ecological relationships between different animals and their relationships with the environment.</li>
            </ul>
          </div>

          <div style="flex: 0.95;">
            <div class="image-card">
              <img src="https://drive.google.com/thumbnail?id=1EsjnzoRyxNOs5Ck4TLWg9iX8Ind35_m9&sz=w1000" alt="Concept Map Example" style="height: auto; object-fit: contain; padding: 0;">
              <div class="image-caption">Example Concept Map</div>
            </div>
          </div>
        </div>

        <div class="requirement-box" style="width: min(980px, 96%); margin: 1.2rem auto 1.2rem auto;">
          <h4>⏱️ Creation Requirements</h4>
          <ul>
            <li>You are given <strong>30 minutes</strong> for the creation of the initial concept map.</li>
            <li>You need to have <strong>at least 5 elements</strong> in your concept map.</li>
          </ul>
        </div>

      </div>

      <div class="card glass">
        <h3 style="color: var(--mangrove-deep); margin: 0 0 0.9rem;">Food Chain Builder</h3>
        <p style="margin-bottom: 1.2rem; color: var(--text-muted);">
          Drag species from the left library into the workspace. Then drag from one species anchor point to another species anchor point to create an arrow link. Submit when finished and the system will check your food chain.
        </p>

        <div class="activity32-tool">
          <aside class="activity32-library">
            <h3>Species Library</h3>
            <p class="activity32-tip">Drag these into the workspace:</p>
            <div id="fc-species-bank" class="activity32-species-bank">
              <button type="button" class="fc-species-chip" draggable="true" data-species="木榄"><span class="fc-species-emoji" aria-hidden="true">🌳</span><span>Mangrove (Kandelia obovata) 木榄</span></button>
              <button type="button" class="fc-species-chip" draggable="true" data-species="藻类"><span class="fc-species-emoji" aria-hidden="true">🌿</span><span>Algae 藻类</span></button>
              <button type="button" class="fc-species-chip" draggable="true" data-species="浮游生物"><span class="fc-species-emoji" aria-hidden="true">🫧</span><span>Plankton 浮游生物</span></button>
              <button type="button" class="fc-species-chip" draggable="true" data-species="牡蛎"><span class="fc-species-emoji" aria-hidden="true">🦪</span><span>Oyster 牡蛎</span></button>
              <button type="button" class="fc-species-chip" draggable="true" data-species="弧边招潮蟹"><span class="fc-species-emoji" aria-hidden="true">🦀</span><span>Arc-Edged Fiddler Crab 弧边招潮蟹</span></button>
              <button type="button" class="fc-species-chip" draggable="true" data-species="大弹涂鱼"><span class="fc-species-emoji" aria-hidden="true">🐟</span><span>Giant Mudskipper 大弹涂鱼</span></button>
              <button type="button" class="fc-species-chip" draggable="true" data-species="黑脸琵鹭"><span class="fc-species-emoji" aria-hidden="true">🐦</span><span>Black-faced Spoonbill 黑脸琵鹭</span></button>
              <button type="button" class="fc-species-chip" draggable="true" data-species="豹猫"><span class="fc-species-emoji" aria-hidden="true">🐆</span><span>Leopard Cat 豹猫</span></button>
              <button type="button" class="fc-species-chip" draggable="true" data-species="柠檬鲨"><span class="fc-species-emoji" aria-hidden="true">🦈</span><span>Lemon Shark 柠檬鲨</span></button>
            </div>
          </aside>

          <section class="activity32-work">
            <h3>Work Area</h3>
            <div id="fc-workspace" class="activity32-workspace">
              <svg id="fc-link-layer" class="activity32-link-layer" aria-hidden="true"></svg>
              <div class="activity32-workspace-hint">Drop species here and drag anchors to connect</div>
            </div>
            <div class="activity32-tool-actions">
              <button id="fc-clear-btn" type="button" class="activity32-action">Clear All</button>
              <button id="fc-submit-btn" type="button" class="activity32-action primary">Submit</button>
            </div>
            <div id="fc-feedback" class="activity32-feedback" aria-live="polite"></div>
          </section>
        </div>
      </div>
    `
  },
  activity4: {
    title: "3.4 Activity 4: Coastal Guardians",
    heroTitle: "Activity 4",
    heroSubtitle: "Coastal Guardians: Field Investigation",
    heroImage: "/assets/activity4.png",
    content: `
      <div class="card glass">
        <h2>Investigation Overview</h2>
        <div class="two-column-layout activity4-overview-layout">
          <div class="activity4-overview-text">
            <h3 style="color: var(--mangrove-deep); margin-bottom: 1rem;">Investigation Tasks</h3>
            <ul style="padding-left: 1.35rem; margin-bottom: 1rem;">
              <li style="margin-bottom: 0.65rem; line-height: 1.45;">Work in groups and each group should arrange the division of labor by themselves.</li>
              <li style="margin-bottom: 0.65rem; line-height: 1.45;">Use the map independently, determine the route based on the destination - <strong>Mangrove Science and Culture Museum</strong> and set up environmental data collection points to provide environmental data support for the production of ecological bottles.</li>
              <li style="margin-bottom: 0.65rem; line-height: 1.45;">Take photos of the environmental pollution and invasive species encountered on the route and mark their positions on the map. After returning to school, pin the photos at the corresponding positions.</li>
              <li style="line-height: 1.45;">Visit the Mangrove Science and Culture Museum at the end of the route and make records of the relevant knowledge.</li>
            </ul>
          </div>
          
          <div class="activity4-overview-media">
            <div class="image-card activity4-map-card">
              <img src="https://drive.google.com/thumbnail?id=1qB5dxWTrKEgFPZUWd18k3UqWgZ3LY1sG&sz=w1000" alt="Mangrove Floor Plan">
              <div class="image-caption">Floor Plan & Route Map</div>
            </div>
            <div class="time-note">
              ⏱️ Note: You need to complete the tasks and arrive at the Mangrove Science Museum (Administration Building) within 2 hours.
            </div>
          </div>
        </div>

        <div class="safety-warning">
          <h3>⚠️ Safety Instructions</h3>
          <div class="safety-grid">
            <div class="safety-item">
              <h4>1. Tidal Safety (Most Important)</h4>
              <ul>
                <li>Know the time of high tide and return to the shore in advance.</li>
                <li>The tide rises rapidly. Low-lying areas may be flooded within half an hour. Do not venture too far into the mudflat.</li>
                <li>If the water level rises, evacuate immediately. If trapped, remain calm and immediately call for rescue.</li>
              </ul>
            </div>
            
            <div class="safety-item">
              <h4>2. Mudflat Walking Safety</h4>
              <ul>
                <li>The mudflat is soft and prone to sinking. Walk slowly and cautiously.</li>
                <li>Do not act alone. Travel in groups and look out for each other.</li>
                <li>If you get stuck, lower your center of gravity and slowly lift your feet.</li>
              </ul>
            </div>

            <div class="safety-item">
              <h4>3. Protection & Insects</h4>
              <ul>
                <li>Wear long sleeves and pants to prevent stings.</li>
                <li>Bring insect repellent to prevent mosquito and snake bites.</li>
                <li>Do not touch unfamiliar creatures.</li>
              </ul>
            </div>

            <div class="safety-item">
              <h4>4. Weather Management</h4>
              <ul>
                <li>Evacuate immediately in case of heavy rain or strong convective weather.</li>
                <li>The mudflat may be a lightning strike zone during thunderstorms.</li>
                <li>Protect yourself from the sun to prevent heatstroke.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="card glass activity4-tool-card">
        <h3 style="color: var(--mangrove-deep); margin-bottom: 0.85rem;">Digital Investigation Tool</h3>
        <p style="margin-bottom: 0.85rem; color: var(--text-muted);">
          In this interface, use your group's field observations to build a species map.
        </p>
        <ul style="padding-left: 1.2rem; margin-bottom: 1rem;">
          <li style="margin-bottom: 0.55rem;">Based on on-site observations, drag species from the left panel.</li>
          <li style="margin-bottom: 0.55rem;">Place each species on the corresponding location on the map.</li>
          <li style="margin-bottom: 0.55rem;">Discuss as a group and adjust positions according to evidence.</li>
          <li>Before submitting, check whether all placements match your field notes.</li>
        </ul>
        <div class="activity4-tool-frame-wrap">
          <iframe
            src="https://qq3w69fg8p.coze.site/"
            title="Activity 4 Digital Investigation Tool"
            class="activity4-tool-frame"
            loading="lazy"
            referrerpolicy="no-referrer"
          ></iframe>
        </div>
        <p style="margin-top: 0.75rem; font-size: 0.92rem;">
          If the embedded view does not load, open it directly:
          <a href="https://qq3w69fg8p.coze.site/" target="_blank" rel="noopener noreferrer">Open Tool in New Window</a>
        </p>
      </div>
    `
  },
  activity5: {
    title: "3.5 Activity 5.1: Micro-Ecosystem",
    heroTitle: "Activity 5.1",
    heroSubtitle: "Micro-Ecosystem Project",
    heroImage: "/assets/activity5.png",
    content: `
      <h2 class="activity5-phase-title">Project Phase 1: Design & Setup</h2>

      <div class="card glass activity5-module">
        <h3 style="color: #000; margin-bottom: 1rem;">Task Description</h3>
        <ul style="padding-left: 1.5rem;">
          <li style="margin-bottom: 1rem; line-height: 1.6;">Design a mangrove micro-ecosystem bottle that can be observed stably for about 30 days and that demonstrates 2-3 key features of mangrove environments.</li>
          <li style="margin-bottom: 1rem; line-height: 1.6;">Under legal and low-disturbance conditions, prioritize either "mangrove-themed materials" or "mangrove ecological substitute materials".</li>
          <li style="margin-bottom: 1rem; line-height: 1.6;">Use continuous records to explain sedimentation, surface film formation, decomposition, evaporation, and salinity change inside the bottle.</li>
          <li style="line-height: 1.6;">Record process and form a PPT on the changes of the micro-ecosystem bottle and your findings. Upload it to the web page and present in the class.</li>
        </ul>
      </div>

      <div class="card glass activity5-guide-block activity5-module">
        <h3 style="color: #000; margin-bottom: 1rem;">Observation Guide</h3>
        <div class="image-card" style="margin-top: 0;">
          <img src="/assets/activity5.1.jpg" alt="Micro-Ecosystem Time-lapse Guide" style="height: auto; max-height: 560px; object-fit: contain; padding: 0;">
          <div class="image-caption">Micro-Ecosystem Time-lapse Guide</div>
        </div>
        <div class="image-card" style="margin-top: 1rem;">
          <img src="/assets/activity5.1-2" alt="Activity 5.1 Tips" style="height: auto; max-height: 560px; object-fit: contain; padding: 0;">
          <div class="image-caption">Tips</div>
        </div>
      </div>

      <div class="safety-warning activity5-module">
        <h3>⚠️ Legal and Sampling Reminder</h3>
        <div class="safety-grid">
          <div class="safety-item">
            <ul>
              <li>Inside the Futian mangrove reserve, no one may dig sediment, pick plants, catch wildlife, or collect specimens without authorization.</li>
              <li>Classroom materials should come mainly from legal nurseries, partner organizations, teaching samples, or aquarium supplies.</li>
              <li>The basic version of the bottle should not center on wild animals and should not introduce live organisms of unknown origin.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card glass activity5-section activity5-prompts activity5-module">
        <h3 style="color: #000; margin-bottom: 1rem;">Discussion & Presentation Prompts</h3>
        <div class="bubble-container">
          <div class="question-bubble">
            <div class="question-bubble-text">Which key environmental features of mangroves does your bottle simulate?</div>
          </div>
          <div class="question-bubble">
            <div class="question-bubble-text">Why did your group choose these materials? Which are legally sourced?</div>
          </div>
          <div class="question-bubble">
            <div class="question-bubble-text">What changes related to salinity or decomposition appear in your records?</div>
          </div>
          <div class="question-bubble">
            <div class="question-bubble-text">How would you improve stability without increasing ecological disturbance?</div>
          </div>
        </div>
      </div>

      <div class="card glass activity5-section activity5-module activity5-materials-shell">
        <div class="two-column-layout activity5-materials-submission">
        <div style="flex: 1;" class="activity5-materials">
          <h3 style="color: #000; margin-bottom: 1rem;">Materials</h3>
          <div class="activity5-material-zone">
            <p class="activity5-materials-note">Choose one of the reference guides below before preparing your bottle and slides.</p>
            <div class="activity5-material-btns">
              <a href="https://docs.google.com/document/d/1bbfHCz7OabnNbDhTY8VleXl0fUPv0Aqz/edit?usp=drive_link" class="activity5-material-btn" target="_blank">Reference Material 1</a>
              <a href="https://docs.google.com/document/d/1AY_x-lhBbrP5DRDwLPytSJ3fqsXnGvrQ/edit?usp=drive_link" class="activity5-material-btn" target="_blank">Reference Material 2</a>
            </div>
          </div>
        </div>

        <div style="flex: 1;" class="activity5-upload activity5-submission">
          <h3 style="color: #000; margin-bottom: 1rem;">Submission</h3>
          <div class="upload-zone" id="ppt-drop-zone">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📊</div>
            <div class="upload-instruction" id="ppt-instruction">Upload your Presentation (PPT/PDF)</div>
            <input type="file" id="ppt-input" accept=".ppt, .pptx, .pdf" style="display: none;">
            <button class="action-btn" id="ppt-btn">Select File</button>
            <div id="ppt-name-display"></div>
          </div>
        </div>
        </div>
      </div>
    `
  },
  activity6: {
    title: "3.6 Activity 5.2: Environmental Hearing",
    heroTitle: "Activity 5.2",
    heroSubtitle: "Environmental Hearing",
    heroImage: "/assets/activity6.png",
    content: `
      <h2 class="activity5-phase-title">Phase 2: Research & E-Poster</h2>

      <div class="card glass activity5-module">
        <h3 style="color: #000; margin-bottom: 1rem;">Task Description</h3>
        <p style="color: #000; margin-bottom: 1rem; line-height: 1.7;">
          Each group, based on the data and findings from the field investigation, selected a specific species (Mangroves, Algae, Fiddler crabs, Mudskippers, Chinese pond heron, Black-faced spoonbill, or Leopard cats) and conducted in-depth research on the main threats it faces.
        </p>
        <ul style="padding-left: 1.5rem;">
          <li style="margin-bottom: 0.75rem; line-height: 1.6;">Use libraries, the internet, and AI-assisted tools to investigate how pollution and invasive species disrupt ecosystem stability.</li>
          <li style="margin-bottom: 0.75rem; line-height: 1.6;">Design a comprehensive E-poster presenting your findings and proposed solutions.</li>
          <li style="line-height: 1.6;">Prepare for the simulated environmental hearing and peer review.</li>
        </ul>
      </div>

      <div class="card glass activity5-section activity5-module activity5-materials-shell">
        <div class="two-column-layout activity5-materials-submission">
          <div style="flex: 1;" class="activity5-upload activity5-submission">
            <h3 style="color: #000; margin-bottom: 1rem;">Submission</h3>
            <div class="upload-zone" id="activity6-drop-zone">
              <div class="status-icon" id="a6-status-icon">📁</div>
              <div class="spinner" id="a6-loading-spinner" style="display: none;"></div>
              <div class="upload-text" id="a6-upload-text">Drag and drop your research files here<br>or click to browse</div>
              <div class="file-info-card" id="a6-file-info-card" style="display: none;">
                Document Ready:<br><span id="a6-file-name-display"></span>
              </div>
              <input type="file" id="a6-fileInput" style="display: none;">
              <button class="action-btn" id="a6-smart-btn">Select File</button>
              <div class="result-msg" id="a6-result-msg" style="display: none;"></div>
            </div>
          </div>

          <div style="flex: 1;" class="activity5-materials">
            <h3 style="color: #000; margin-bottom: 1rem;">Example E-Poster</h3>
            <div class="activity5-material-zone" style="border: 0; background: transparent; padding: 0;">
              <div class="image-card poster-modal-trigger" data-poster-open tabindex="0" role="button" aria-label="Open full-screen poster" style="height: auto; margin-bottom: 0;">
                <img src="/assets/Poster.jpg" alt="Example E-poster" style="height: auto; max-height: 600px; object-fit: contain;">
                <div class="image-caption">Sample Conservation Poster Layout</div>
              </div>
              <p style="margin-top: 0.75rem; color: var(--text-muted); font-size: 0.92rem; text-align: right;">Source: Shenzhen Futian Mangrove Ecological Park</p>
            </div>
          </div>
        </div>
      </div>

      <div id="activity6-poster-modal" class="poster-modal">
        <div class="poster-modal-backdrop" data-poster-close aria-hidden="true"></div>
        <div class="poster-modal-content">
          <button type="button" class="poster-modal-close" data-poster-close aria-label="Close">×</button>
          <img src="/assets/Poster.jpg" alt="Example E-poster full preview">
        </div>
      </div>
    `
  },
  rubric: {
    title: "4. Evaluation Rubric",
    heroTitle: "Evaluation",
    heroSubtitle: "Evaluation Rubrics",
    heroImage: "/assets/rubric.png",
    wide: true,
    content: `
      <div class="card glass">
        <h2>Assessment Framework</h2>
        <p style="margin-bottom: 2rem; opacity: 0.9; line-height: 1.6;">
          This assessment rubric is designed for evaluating students’ performance across learning activities. A 5-level scale is used to assess how well students understand the mangrove ecosystem, identify real-world issues, and communicate evidence-based ideas and solutions.
        </p>
        
        <div class="rubric-container">
          <table class="rubric-table">
            <thead>
              <tr>
                <th>Criteria / Activity</th>
                <th style="width: 80px; text-align: center;">Weight</th>
                <th class="level-header">5<br>Excellent</th>
                <th class="level-header">4<br>Good</th>
                <th class="level-header">3<br>Satisfactory</th>
                <th class="level-header">2<br>Basic</th>
                <th class="level-header">1<br>Needs Imp.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Introduction & Knowledge Building</strong><br><small>Mangrove env, species, ecological value</small></td>
                <td style="text-align: center;"><span class="weight-badge">10%</span></td>
                <td class="level-cell">Accurately explains key species & intertidal features; raises meaningful questions.</td>
                <td class="level-cell">Understands most key ideas and answers most questions well.</td>
                <td class="level-cell">Shows basic understanding.</td>
                <td class="level-cell">Understands only limited info; needs prompting.</td>
                <td class="level-cell">Weak understanding of core ideas.</td>
              </tr>
              <tr>
                <td><strong>Game (Role-play)</strong><br><small>Animal habits and environmental interactions</small></td>
                <td style="text-align: center;"><span class="weight-badge">15%</span></td>
                <td class="level-cell">Uses ecological knowledge accurately to complete storyline and interactions.</td>
                <td class="level-cell">Completes storyline well; shows good understanding.</td>
                <td class="level-cell">Completes the basic task.</td>
                <td class="level-cell">Limited participation and weak understanding.</td>
                <td class="level-cell">Unable to complete the task effectively.</td>
              </tr>
              <tr>
                <td><strong>Concept Map Creation</strong><br><small>Building accurate food chain/web relationships</small></td>
                <td style="text-align: center;"><span class="weight-badge">10%</span></td>
                <td class="level-cell">Concept map is complete, logical, and scientifically accurate.</td>
                <td class="level-cell">Mostly complete with generally correct links.</td>
                <td class="level-cell">Basic relationships are shown.</td>
                <td class="level-cell">Incomplete or partly inaccurate.</td>
                <td class="level-cell">Confusing and mostly inaccurate.</td>
              </tr>
              <tr>
                <td><strong>Field Investigation</strong><br><small>Observation, measurement, and evidence</small></td>
                <td style="text-align: center;"><span class="weight-badge">20%</span></td>
                <td class="level-cell">Careful observation, complete records, strong data and photo evidence.</td>
                <td class="level-cell">Mostly complete records and successful completion of main tasks.</td>
                <td class="level-cell">Basic observation and recording completed.</td>
                <td class="level-cell">Limited investigation and insufficient records.</td>
                <td class="level-cell">Field task not completed effectively.</td>
              </tr>
              <tr>
                <td><strong>Inquiry Workshop</strong><br><small>Real-world problem research and analysis</small></td>
                <td style="text-align: center;"><span class="weight-badge">15%</span></td>
                <td class="level-cell">Clear problem focus, strong evidence, and clear analysis.</td>
                <td class="level-cell">Fairly complete research around the chosen problem.</td>
                <td class="level-cell">Basic research and explanation provided.</td>
                <td class="level-cell">Shallow inquiry with limited evidence.</td>
                <td class="level-cell">Unclear inquiry focus and little analysis.</td>
              </tr>
              <tr>
                <td><strong>Eco-box Workshop</strong><br><small>Design, creation, and ecological logic</small></td>
                <td style="text-align: center;"><span class="weight-badge">15%</span></td>
                <td class="level-cell">Well-designed eco-box with clear explanation of ecological components.</td>
                <td class="level-cell">Fairly complete design with basic explanation.</td>
                <td class="level-cell">Basic design and explanation completed.</td>
                <td class="level-cell">Rough design with weak explanation.</td>
                <td class="level-cell">Little connection between design and learning.</td>
              </tr>
              <tr>
                <td><strong>E-Poster & Presentation</strong><br><small>Communicating findings and peer defense</small></td>
                <td style="text-align: center;"><span class="weight-badge">15%</span></td>
                <td class="level-cell">Clear, persuasive presentation and confident, accurate responses.</td>
                <td class="level-cell">Mostly complete presentation and answers major questions well.</td>
                <td class="level-cell">Basic presentation completed.</td>
                <td class="level-cell">Unclear presentation and weak response to questions.</td>
                <td class="level-cell">Unable to present ideas clearly.</td>
              </tr>
            </tbody>
            <tfoot>
              <tr style="border-top: 2px solid var(--mangrove-teal);">
                <td colspan="2" style="text-align: right; font-weight: 700; padding: 1.5rem;">Total Possible:</td>
                <td colspan="5" style="padding: 1.5rem; color: var(--mangrove-accent); font-weight: 700;">100% Score Potential</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    `
  },
  reflection: {
    title: "5. Post Lesson Reflection",
    heroTitle: "Reflection",
    heroSubtitle: "Post Lesson Reflection",
    heroImage: "/assets/reflection.png",
    content: `
      <div class="card glass">
        <h2>Reflecting on Your Journey</h2>
        <p style="margin-bottom: 2rem; opacity: 0.9; line-height: 1.6;">
          It is important that we post lesson reflection to consolidate what we have learned, especially about the process we have gone through.
        </p>
        
        <div style="background: rgba(255, 255, 255, 0.05); padding: 2rem; border-radius: 16px; border: 1px solid var(--glass-border);">
          <ol style="padding-left: 1.5rem; color: #000000;">
            <li style="margin-bottom: 1.5rem; line-height: 1.6;">
              Throughout the entire project, which part was the most challenging for you? How did you deal with it, and what new understanding did this experience give you about yourself?
            </li>
            <li style="margin-bottom: 1.5rem; line-height: 1.6;">
              Besides learning about mangroves, in what other areas have you grown through this project? (For example: research skills, hands-on abilities, communication skills, teamwork skills, etc.)
            </li>
            <li style="line-height: 1.6;">
              When listening to your peers share their gains and achievements, was there anyone or any particular viewpoint that impressed you deeply and even made you reflect on yourself?
            </li>
          </ol>
        </div>

        <p style="margin-top: 2.5rem; font-weight: 700; color: var(--mangrove-accent); text-align: center; font-size: 1.2rem;">
          ✨ Please write your answer in your blog.
        </p>
      </div>
    `
  }
};
