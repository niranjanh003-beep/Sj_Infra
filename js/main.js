/* ============================================================
   SJ INFRA — SHARED SITE BEHAVIOR
   ============================================================ */

function currentPage(){
  const p = window.location.pathname.split("/").pop() || "index.html";
  return p;
}

function relPrefix(){
  // pages inside /services/ or /projects/ need ../ to reach root assets
  return window.location.pathname.includes("/services/") || window.location.pathname.includes("/projects/") ? "../" : "";
}

function renderHeader(){
  const root = relPrefix();
  const page = currentPage();
  const header = document.getElementById("site-header");
  if(!header) return;

  const links = MAIN_NAV_LINKS.map(l => {
    const href = root + l.href;
    const isActive = page === l.href ? " active" : "";
    return `<a href="${href}" class="${isActive.trim()}">${l.label}</a>`;
  }).join("");

  const mobileLinks = NAV_LINKS.map(l => `<a href="${root + l.href}">${l.label}</a>`).join("");

  header.innerHTML = `
    <div class="container">
      <a href="${root}index.html" class="brand">
        <span class="brand-mark-chip"><img src="${root}images/logo.jpg" alt="SJ Infra logo"></span>
        <span class="brand-text"><strong>SJ Infra</strong><span>${SITE.place.toUpperCase()}</span></span>
      </a>
      <nav class="main-nav" aria-label="Primary">${links}</nav>
      <div class="nav-cta">
        <a class="btn btn-outline on-dark" href="${root}calculator.html">Get Estimate</a>
        <a class="btn btn-gold" href="${root}contact.html">Start Project</a>
        <button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;

  const mobileMenu = document.getElementById("mobileMenu");
  if(mobileMenu){
    mobileMenu.innerHTML = `
      ${mobileLinks}
      <div class="mobile-menu-foot">
        <a href="tel:+91${SITE.phone}">${SITE.phoneDisplay}</a>
        <a href="mailto:${SITE.email}">${SITE.email}</a>
      </div>
    `;
  }

  const toggle = document.getElementById("menuToggle");
  toggle.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    toggle.classList.remove("is-open");
    document.body.style.overflow = "";
  }));

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-solid", window.scrollY > 40);
  }, { passive:true });
  header.classList.toggle("is-solid", window.scrollY > 40);
}

function renderFooter(){
  const root = relPrefix();
  const footer = document.getElementById("site-footer");
  if(!footer) return;

  const serviceLinks = SERVICES.map(s => `<a href="${root}services/${s.id}.html">${s.title}</a>`).join("");
  const areaLinks = SITE.serviceAreas.slice(0,6).map(a => `<span style="display:block;padding:6px 0;font-size:14px;">${a}</span>`).join("");

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="${root}index.html" class="brand" style="margin-bottom:18px;">
            <span class="brand-mark-chip"><img src="${root}images/logo.jpg" alt="SJ Infra logo"></span>
            <span class="brand-text"><strong>SJ Infra</strong><span>${SITE.place.toUpperCase()}</span></span>
          </a>
          <p class="muted" style="max-width:34ch; margin-top:18px; color:rgba(247,245,239,.65); font-size:14px;">
            A turnkey construction studio crafting homes, interiors and commercial spaces across Ballari — with transparent, itemised pricing and honest engineering.
          </p>
          <div style="display:flex; gap:14px; margin-top:22px;">
            <a href="${SITE.facebook}" target="_blank" rel="noopener" aria-label="Facebook" style="width:38px;height:38px;border:1px solid rgba(247,245,239,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;">f</a>
            <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram" style="width:38px;height:38px;border:1px solid rgba(247,245,239,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;">ig</a>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          ${serviceLinks}
        </div>
        <div>
          <h4>Company</h4>
          <a href="${root}about.html">About Us</a>
          <a href="${root}process.html">Our Process</a>
          <a href="${root}projects.html">Projects</a>
          <a href="${root}innovation.html">Innovation</a>
          <a href="${root}gallery.html">Gallery</a>
          <a href="${root}faq.html">FAQ</a>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <a href="tel:+91${SITE.phone}">${SITE.phoneDisplay}</a>
          <a href="mailto:${SITE.email}">${SITE.email}</a>
          <a href="https://maps.google.com/?q=${SITE.mapsQuery}" target="_blank" rel="noopener">${SITE.address}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} SJ Infra, Ballari. All rights reserved.</span>
        <span>Built for SJ Infra &mdash; a Ballari construction & interiors studio.</span>
      </div>
    </div>
  `;
}

function renderFloatingContact(){
  const el = document.getElementById("floatingContact");
  if(!el) return;
  el.innerHTML = `
    <a class="fab fab-wa" href="https://wa.me/91${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10 9 9.5 7.8 9.3 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>
    </a>
    <a class="fab fab-call" href="tel:+91${SITE.phone}" aria-label="Call SJ Infra">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.7 5 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1z"/></svg>
    </a>
  `;
}

function initRevealOnScroll(){
  const items = document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window) || items.length === 0){
    items.forEach(i => i.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold:0.15 });
  items.forEach(i => io.observe(i));
}

function initFAQAccordion(){
  document.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-q");
    const ans = item.querySelector(".faq-a");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach(o => {
        o.classList.remove("is-open");
        o.querySelector(".faq-a").style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add("is-open");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  });
}

function initTestimonialSlider(){
  const track = document.getElementById("testiTrack");
  const dotsWrap = document.getElementById("testiDots");
  if(!track) return;
  let idx = 0;
  function render(){
    const t = TESTIMONIALS[idx];
    track.innerHTML = `
      <p class="testi-quote">&ldquo;${t.quote}&rdquo;</p>
      <p class="testi-name">${t.name}</p>
    `;
    if(dotsWrap){
      dotsWrap.innerHTML = TESTIMONIALS.map((_,i) => `<button class="dot ${i===idx?'is-active':''}" data-i="${i}" aria-label="Testimonial ${i+1}"></button>`).join("");
      dotsWrap.querySelectorAll(".dot").forEach(d => d.addEventListener("click", () => { idx = +d.dataset.i; render(); }));
    }
  }
  render();
  setInterval(() => { idx = (idx+1) % TESTIMONIALS.length; render(); }, 6000);
}

function initContactForm(){
  const form = document.getElementById("contactForm");
  if(!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const success = document.getElementById("formSuccess");
    form.style.display = "none";
    if(success) success.classList.add("is-shown");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderFloatingContact();
  initRevealOnScroll();
  initFAQAccordion();
  initTestimonialSlider();
  initContactForm();
});
