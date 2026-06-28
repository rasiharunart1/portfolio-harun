/**
 * Main Application Logic - Harun Ar Rasyid Portfolio
 * Binds environment configurations dynamically to the custom HTML page layout
 */

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Initialize configuration loader
    const env = await window.PortfolioConfig.init();

    // 2. Render dynamic content
    renderSiteMetadata(env);
    renderGeneralInfo(env);
    renderAssets(env);
    renderProjects();
    renderContactAndSocials(env);

    // 3. Initialize dynamic UI interactions & scroll animations
    initMenuInteractions();
    initScrollAnimations();
});

/**
 * Updates page title and SEO metadata
 */
function renderSiteMetadata(env) {
    const title = env.SITE_TITLE || "Harun Ar Rasyid";
    document.title = title;

    // Update meta descriptions dynamically
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', env.SITE_DESCRIPTION || "Portfolio Website");
}

/**
 * Updates text-based values across the page (Logo, Hero, Stats, Footer)
 */
function renderGeneralInfo(env) {
    const name = env.SITE_NAME || "Harun Ar Rasyid";
    
    // Split name into parts for styled logo and hero heading
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0];
    const restName = nameParts.slice(1).join(' ');

    // logo binding
    const logoEl = document.getElementById('nav-logo');
    if (logoEl) {
        logoEl.innerHTML = `${firstName} <span>${restName}</span>`;
    }

    // Hero title binding
    const heroNameEl = document.getElementById('hero-name');
    if (heroNameEl) {
        heroNameEl.innerHTML = `${firstName}<br>${restName}`;
    }

    // Bind subtitle and bios
    bindText('hero-subtitle', env.SITE_ROLE);
    bindText('hero-bio', env.SITE_BIO);
    bindText('footer-site-name', name);

    // Binds CV download href
    const cvBtn = document.getElementById('hero-cv-btn');
    if (cvBtn) {
        cvBtn.href = env.LINK_DOWNLOAD_CV || "#";
        if (!env.LINK_DOWNLOAD_CV || env.LINK_DOWNLOAD_CV === "#") {
            cvBtn.addEventListener('click', (e) => {
                if (env.LINK_DOWNLOAD_CV === "#") {
                    e.preventDefault();
                    alert('Add your CV download link in the .env file (LINK_DOWNLOAD_CV)');
                }
            });
        }
    }

    // Footer Copyright current year
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

/**
 * Sets the profile image dynamically or shows the fallback outline placeholder
 */
function renderAssets(env) {
    const profileImg = document.getElementById('profile-img');
    const placeholder = document.getElementById('profile-placeholder');

    if (profileImg && env.IMAGE_PROFILE && env.IMAGE_PROFILE.trim() !== "") {
        profileImg.src = env.IMAGE_PROFILE;
        profileImg.alt = env.SITE_NAME || "Profile Image";
        
        // When loaded successfully, show image and hide placeholder icon
        profileImg.onload = () => {
            profileImg.style.display = "block";
            if (placeholder) placeholder.style.display = "none";
        };

        profileImg.onerror = () => {
            console.warn("Could not load IMAGE_PROFILE path. Displaying placeholder.");
            profileImg.style.display = "none";
            if (placeholder) placeholder.style.display = "flex";
        };
    } else {
        if (profileImg) profileImg.style.display = "none";
        if (placeholder) placeholder.style.display = "flex";
    }
}

/**
 * Builds the projects grid dynamically based on .env definitions
 */
function renderProjects() {
    const projects = window.PortfolioConfig.getProjects();
    const container = document.getElementById('projects-grid');
    const projectNumEl = document.getElementById('stat-projects');

    if (projectNumEl) {
        projectNumEl.textContent = `${projects.length}+`;
    }

    if (!container) return;

    if (projects.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--surface); border: 1.5px dashed var(--border); border-radius: var(--radius);">
                <p style="color: var(--text-2);">Belum ada proyek aktif. Silakan tambahkan proyek di file .env</p>
            </div>
        `;
        return;
    }

    container.innerHTML = ""; // Clear loader placeholder

    projects.forEach((project, idx) => {
        const card = document.createElement('div');
        card.className = `project-card fade-up d${(idx % 3) + 1}`;

                // Dynamic Tag HTML list
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

                // Status Badge Logic
        let statusBadgeHTML = "";
        if (project.status.toLowerCase() === "active") {
            statusBadgeHTML = `<div class="status-badge status-active"><span class="status-dot"></span> Active</div>`;
        } else {
            statusBadgeHTML = `<div class="status-badge status-completed">Completed</div>`;
        }

        // Universal Media Embed parsing (YouTube, Instagram, Facebook, TikTok)
        const media = getMediaEmbed(project);
        let mediaHTML = media.html;
        let isEmbed = media.isEmbed;
        let imgContainerStyle = isEmbed ? "border: none; position: relative;" : "";
        
        // Fallback placeholder container in case project image fails to load
        const fallbackHTML = `
            <div class="project-fallback-img" style="display: ${isEmbed || project.image ? 'none' : 'flex'}; flex-direction: column; align-items: center; justify-content: center; gap: 10px; height: 100%; width: 100%;">
                <div class="project-img-icon"><i class="fa-solid fa-code"></i></div>
                <span class="project-img-label">${project.title}</span>
            </div>
        `;

        // Dynamic Buttons Generation
        let buttonsHTML = "";
        if (project.github && project.github !== "#" && project.github.trim() !== "") {
            buttonsHTML += `<a href="${project.github}" target="_blank" class="proj-btn filled"><i class="fa-brands fa-github"></i> GitHub</a>`;
        }
        if (project.demo && project.demo !== "#" && project.demo.trim() !== "") {
            buttonsHTML += `<a href="${project.demo}" target="_blank" class="proj-btn"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo / Link</a>`;
        }
        // Fallback to url if no specific buttons are generated
        if (!buttonsHTML && project.url && project.url !== "#" && project.url.trim() !== "") {
            buttonsHTML += `<a href="${project.url}" target="_blank" class="proj-btn filled"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Project</a>`;
        }

        card.innerHTML = `
            <div class="project-img" style="${imgContainerStyle}">
                ${mediaHTML}
                ${isEmbed ? '' : fallbackHTML}
            </div>
            <div class="project-body">
                <span class="project-cat">${project.category}</span>
                ${statusBadgeHTML}
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-stack">${tagsHTML}</div>
                <div class="project-btns">
                    ${buttonsHTML}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
// Inject styled CSS for video thumbnails and play overlays dynamically
const videoStyle = document.createElement('style');
videoStyle.textContent = `
  .video-thumbnail-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      cursor: pointer;
      display: block;
      overflow: hidden;
  }
  .video-thumbnail-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
  }
  .video-thumbnail-wrapper:hover img {
      transform: scale(1.05);
  }
  .play-btn-overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 52px;
      height: 52px;
      background: var(--accent, #B8743C);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 16px;
      border: 2px solid #fff;
      box-shadow: 0 4px 10px rgba(0,0,0,0.25);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .video-thumbnail-wrapper:hover .play-btn-overlay {
      background: var(--text-1, #2B2926);
      transform: translate(-50%, -50%) scale(1.1);
  }
`;
document.head.appendChild(videoStyle);

/**
 * Click handler to swap YouTube thumbnail with autoplaying video iframe
 */
window.playVideo = function(element, videoId) {
    const container = element.parentElement;
    container.style.border = "none";
    container.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 100%; height: 100%; border: none; position: absolute; top:0; left:0;"></iframe>`;
};

/**
 * Universal Media Embed Parser
 * Checks if the project has a video or image link from social media platforms,
 * and outputs the corresponding iframe player or static thumbnail cover.
 */
function getMediaEmbed(project) {
    const url = (project.video || project.image || "").trim();
    if (!url) {
        return { isEmbed: false, html: "" };
    }

    // 1. YouTube Video (Show high-quality cover thumbnail, click to play)
    const ytReg = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const ytMatch = url.match(ytReg);
    if (ytMatch && ytMatch[2].length === 11) {
        const videoId = ytMatch[2];
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        return {
            isEmbed: true,
            html: `
                <div class="video-thumbnail-wrapper" onclick="playVideo(this, '${videoId}')">
                    <img src="${thumbnailUrl}" alt="${project.title}">
                    <div class="play-btn-overlay">
                        <i class="fa-solid fa-play" style="margin-left: 3px;"></i>
                    </div>
                </div>
            `
        };
    }

    // 2. Instagram Post / Reel
    const igReg = /(?:instagram\.com)\/(?:p|reel)\/([^/?#&]+)/i;
    const igMatch = url.match(igReg);
    if (igMatch) {
        const postId = igMatch[1];
        return {
            isEmbed: true,
            html: `<iframe src="https://www.instagram.com/p/${postId}/embed" frameborder="0" scrolling="no" allowtransparency="true" style="width: 100%; height: 100%; border: none; position: absolute; top:0; left:0;"></iframe>`
        };
    }

    // 3. Facebook Post
    if (url.includes('facebook.com')) {
        const encodedUrl = encodeURIComponent(url);
        return {
            isEmbed: true,
            html: `<iframe src="https://www.facebook.com/plugins/post.php?href=${encodedUrl}&show_text=false&width=auto" frameborder="0" scrolling="no" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" style="width: 100%; height: 100%; border: none; position: absolute; top:0; left:0;"></iframe>`
        };
    }

    // 4. TikTok Video
    const ttReg = /tiktok\.com\/@[\w.-]+\/video\/(\d+)/i;
    const ttMatch = url.match(ttReg);
    if (ttMatch) {
        const videoId = ttMatch[1];
        return {
            isEmbed: true,
            html: `<iframe src="https://www.tiktok.com/embed/v2/${videoId}" frameborder="0" allowfullscreen style="width: 100%; height: 100%; border: none; position: absolute; top:0; left:0;"></iframe>`
        };
    }

    // 5. Default Image load
    if (project.image && project.image.trim() !== "") {
        return {
            isEmbed: false,
            html: `<img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
        };
    }

    return { isEmbed: false, html: "" };
}

/**
 * Renders contact details and updates social links
 */
function renderContactAndSocials(env) {
    // 1. Text bindings
    bindText('contact-email-link', env.CONTACT_EMAIL);
    bindText('contact-phone-link', env.CONTACT_PHONE);
    bindText('contact-location-text', env.CONTACT_LOCATION);

    // 2. Email href links
    const contactEmailLink = document.getElementById('contact-email-link');
    if (contactEmailLink && env.CONTACT_EMAIL) {
        contactEmailLink.href = `mailto:${env.CONTACT_EMAIL}`;
    }
    const heroEmailBtn = document.getElementById('hero-email-btn');
    if (heroEmailBtn && env.CONTACT_EMAIL) {
        heroEmailBtn.href = `mailto:${env.CONTACT_EMAIL}`;
    }

    // 3. Phone href link
    const contactPhoneLink = document.getElementById('contact-phone-link');
    if (contactPhoneLink && env.CONTACT_PHONE) {
        // Strip out non-numeric for telephone protocol but keep +
        const cleanedPhone = env.CONTACT_PHONE.replace(/[^\d+]/g, '');
        contactPhoneLink.href = `tel:${cleanedPhone}`;
    }

    // 4. Social links anchors (Hero socials)
    bindSocialLink('social-github', env.CONTACT_GITHUB);
    bindSocialLink('social-linkedin', env.CONTACT_LINKEDIN);
    bindSocialLink('social-email', env.CONTACT_EMAIL ? `mailto:${env.CONTACT_EMAIL}` : null);
    bindSocialLink('social-instagram', env.CONTACT_INSTAGRAM);
    bindSocialLink('social-whatsapp', env.CONTACT_WHATSAPP);

    // 5. Footer socials mapping
    bindSocialLink('footer-github', env.CONTACT_GITHUB);
    bindSocialLink('footer-linkedin', env.CONTACT_LINKEDIN);
    bindSocialLink('footer-email', env.CONTACT_EMAIL ? `mailto:${env.CONTACT_EMAIL}` : null);
}

/**
 * Binds text content to elements safely
 */
function bindText(id, value) {
    const element = document.getElementById(id);
    if (element && value) {
        element.textContent = value;
    }
}

/**
 * Updates link href and displays social element if URL exists
 */
function bindSocialLink(id, url) {
    const element = document.getElementById(id);
    if (!element) return;

    if (url && url.trim() !== "" && url !== "#") {
        element.href = url;
        element.style.display = "inline-flex";
    } else {
        element.style.display = "none";
    }
}

/**
 * Toggles responsive menu on mobile sizes
 */
function initMenuInteractions() {
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksAnchors = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navLinks.classList.toggle('mobile-open');
            
            if (isOpen) {
                // Apply dynamic styles for dropdown menu overlay
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'var(--bg)';
                navLinks.style.padding = '24px';
                navLinks.style.borderBottom = '1px solid var(--border)';
                navLinks.style.gap = '16px';
                navLinks.style.boxShadow = 'var(--shadow)';
            } else {
                navLinks.removeAttribute('style');
            }
        });

        // Close menu when clicking link items on mobile sizes
        navLinksAnchors.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('mobile-open')) {
                    navLinks.classList.remove('mobile-open');
                    navLinks.removeAttribute('style');
                }
            });
        });

        // Close menu when clicking outside header
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('mobile-open') && !e.target.closest('nav')) {
                navLinks.classList.remove('mobile-open');
                navLinks.removeAttribute('style');
            }
        });
    }
}

/**
 * Tracks viewport and applies .visible class to .fade-up cards as they scroll in
 */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-up');
    
    // Fallback if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
        fadeElements.forEach(el => el.classList.add('visible'));
        return;
    }

    const observerOptions = {
        root: null, // use browser viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% element visibility to trigger
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        scrollObserver.observe(el);
    });
}
