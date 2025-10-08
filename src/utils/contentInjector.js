// src/utils/contentInjector.js
// This script automatically replaces hardcoded content with CMS content
// WITHOUT touching any components!

class ContentInjector {
  constructor() {
    this.content = {};
    this.observers = [];
    this.init();
  }

  async init() {
    await this.loadAllContent();
    this.startAutoReplace();
    this.setupHotReload();
  }

  async loadAllContent() {
    const timestamp = new Date().getTime();

    try {
      // Load all content files
      const [
        navbar,
        homepageHero,
        homepageSearch,
        homepageProperties,
        homepageWhyChoose,
        about,
        houseSections,
        faqs,
        roomsIntro,
        roomsTabs,
        roomsFaqs,
        servicesIntro,
        servicesList,
        gallery,
        travel,
        travelDescription,
        testimonials,
        footer,
        buttons,
        labels,
      ] = await Promise.all([
        fetch(`/content/navbar.json?t=${timestamp}`).then((r) => r.json()),
        fetch(`/content/homepage-hero.json?t=${timestamp}`).then((r) =>
          r.json()
        ),
        fetch(`/content/homepage-search.json?t=${timestamp}`).then((r) =>
          r.json()
        ),
        fetch(`/content/homepage-properties.json?t=${timestamp}`).then((r) =>
          r.json()
        ),
        fetch(`/content/homepage-why-choose.json?t=${timestamp}`).then((r) =>
          r.json()
        ),
        fetch(`/content/about.json?t=${timestamp}`).then((r) => r.json()),
        fetch(`/content/house-sections.json?t=${timestamp}`).then((r) =>
          r.json()
        ),
        fetch(`/content/faqs.json?t=${timestamp}`).then((r) => r.json()),
        fetch(`/content/rooms-intro.json?t=${timestamp}`).then((r) => r.json()),
        fetch(`/content/rooms-tabs.json?t=${timestamp}`).then((r) => r.json()),
        fetch(`/content/rooms-faqs.json?t=${timestamp}`).then((r) => r.json()),
        fetch(`/content/services-intro.json?t=${timestamp}`).then((r) =>
          r.json()
        ),
        fetch(`/content/services-list.json?t=${timestamp}`).then((r) =>
          r.json()
        ),
        fetch(`/content/gallery.json?t=${timestamp}`).then((r) => r.json()),
        fetch(`/content/travel.json?t=${timestamp}`).then((r) => r.json()),
        fetch(`/content/travel-description.json?t=${timestamp}`).then((r) =>
          r.json()
        ),
        fetch(`/content/testimonials.json?t=${timestamp}`).then((r) =>
          r.json()
        ),
        fetch(`/content/footer.json?t=${timestamp}`).then((r) => r.json()),
        fetch(`/content/buttons.json?t=${timestamp}`).then((r) => r.json()),
        fetch(`/content/labels.json?t=${timestamp}`).then((r) => r.json()),
      ]);

      // Load service pages
      const servicePages = {};
      for (let i = 1; i <= 8; i++) {
        servicePages[i] = await fetch(
          `/content/service-${i}.json?t=${timestamp}`
        ).then((r) => r.json());
      }

      // Load properties
      const properties = {};
      for (let i = 1; i <= 7; i++) {
        properties[i] = await fetch(
          `/content/property-${i}.json?t=${timestamp}`
        ).then((r) => r.json());
      }

      this.content = {
        navbar,
        homepage: {
          hero: homepageHero,
          search: homepageSearch,
          properties: homepageProperties,
          whyChoose: homepageWhyChoose,
        },
        about,
        houseSections,
        faqs,
        rooms: { intro: roomsIntro, tabs: roomsTabs, faqs: roomsFaqs },
        services: { intro: servicesIntro, list: servicesList },
        servicePages,
        gallery,
        travel,
        travelDescription,
        properties,
        testimonials,
        footer,
        buttons,
        labels,
      };

      console.log("✅ Content loaded successfully");
      return true;
    } catch (error) {
      console.error("❌ Error loading content:", error);
      return false;
    }
  }

  startAutoReplace() {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () =>
        this.replaceContent()
      );
    } else {
      this.replaceContent();
    }

    // Watch for dynamic content changes (React rendering)
    const observer = new MutationObserver(() => {
      this.replaceContent();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    this.observers.push(observer);
  }

  replaceContent() {
    // Replace text content based on data attributes or patterns
    this.replaceNavbar();
    this.replaceHeroSection();
    this.replaceFooter();
    this.replaceTestimonials();
    this.replaceButtons();
    this.replaceImages();
  }

  replaceNavbar() {
    if (!this.content.navbar) return;

    // Replace logo
    const logos = document.querySelectorAll(
      'img[src*="logo"], img[alt*="logo" i]'
    );
    logos.forEach((img) => {
      if (img.src !== this.content.navbar.logo) {
        img.src = this.content.navbar.logo;
      }
    });

    // Replace nav links
    const navLinks = document.querySelectorAll("nav a, header a");
    const linkTexts = this.content.navbar.links.map((l) => l.text);

    navLinks.forEach((link, idx) => {
      if (this.content.navbar.links[idx]) {
        link.textContent = this.content.navbar.links[idx].text;
        link.href = this.content.navbar.links[idx].url;
      }
    });
  }

  replaceHeroSection() {
    if (!this.content.homepage?.hero) return;

    // Replace hero title
    const heroTitles = document.querySelectorAll("h1");
    heroTitles.forEach((h1) => {
      if (
        h1.textContent.includes("Welcome") ||
        h1.textContent.includes("hotel")
      ) {
        h1.textContent = this.content.homepage.hero.mainTitle;
      }
    });

    // Replace hero subtitle
    const heroSubtitles = document.querySelectorAll("p");
    heroSubtitles.forEach((p) => {
      if (
        p.textContent.includes("luxury") ||
        p.textContent.includes("comfort")
      ) {
        p.textContent = this.content.homepage.hero.subtitle;
      }
    });

    // Replace video
    const videos = document.querySelectorAll("video source, video");
    videos.forEach((video) => {
      if (video.tagName === "VIDEO") {
        video.src = this.content.homepage.hero.videoUrl;
      } else {
        video.setAttribute("src", this.content.homepage.hero.videoUrl);
      }
    });
  }

  replaceFooter() {
    if (!this.content.footer) return;

    // Replace footer text
    const footerText = document.querySelectorAll("footer p, footer span");
    footerText.forEach((el) => {
      const text = el.textContent.trim();

      // Replace phone
      if (text.includes("+62") || text.includes("Phone")) {
        el.textContent = el.textContent.replace(
          /\+62[0-9\s\-]+/,
          this.content.footer.phone
        );
      }

      // Replace copyright
      if (text.includes("Rights Reserved")) {
        el.textContent = `© ${this.content.footer.copyright}`;
      }

      // Replace address
      if (text.includes("Jl.") || text.includes("Seminyak")) {
        el.textContent = this.content.footer.address;
      }
    });

    // Replace footer heading
    const footerHeadings = document.querySelectorAll("footer h3, footer h4");
    footerHeadings.forEach((h) => {
      if (h.textContent.includes("About")) {
        h.textContent = this.content.footer.aboutHeading;
      }
      if (h.textContent.includes("Contact")) {
        h.textContent = this.content.footer.contactHeading;
      }
    });
  }

  replaceTestimonials() {
    if (!this.content.testimonials) return;

    // Replace testimonial heading
    const testimonialHeadings = document.querySelectorAll("h2, h3");
    testimonialHeadings.forEach((h) => {
      if (h.textContent.includes("Testimonial")) {
        h.textContent = this.content.testimonials.heading;
      }
    });
  }

  replaceButtons() {
    if (!this.content.buttons) return;

    const buttons = document.querySelectorAll('button, .btn, [role="button"]');
    buttons.forEach((btn) => {
      const text = btn.textContent.trim().toLowerCase();

      if (text.includes("book now")) {
        btn.textContent = this.content.buttons.bookNow;
      } else if (text.includes("check availability")) {
        btn.textContent = this.content.buttons.checkAvailability;
      } else if (text.includes("search")) {
        btn.textContent = this.content.buttons.search;
      } else if (text.includes("view more")) {
        btn.textContent = this.content.buttons.viewMore;
      }
    });
  }

  replaceImages() {
    // Replace images with data-cms attributes
    const images = document.querySelectorAll("img[data-cms-image]");
    images.forEach((img) => {
      const cmsKey = img.getAttribute("data-cms-image");
      const keys = cmsKey.split(".");
      let value = this.content;

      for (const key of keys) {
        value = value?.[key];
      }

      if (value && typeof value === "string") {
        img.src = value;
      }
    });
  }

  setupHotReload() {
    window.addEventListener("message", async (event) => {
      if (event.data === "cms-content-updated") {
        console.log("🔄 CMS content updated, reloading...");
        await this.loadAllContent();
        this.replaceContent();
      }
    });
  }

  destroy() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// Auto-initialize when script loads
if (typeof window !== "undefined") {
  window.contentInjector = new ContentInjector();
}

export default ContentInjector;
