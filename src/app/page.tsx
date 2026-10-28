'use client';

import React, { useEffect, useState } from 'react';

type MandateCategory = 'all' | 'cmo' | 'enterprise' | 'global';

interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  summary: string;
  location: string;
  tenure: string;
  category: MandateCategory[];
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'toastmasters-vp',
    organization: 'Toastmasters International',
    role: 'VP of Public Relations',
    summary:
      'Executive Committee Member of Greater Portland Toastmasters overseeing digital presence, brand management, and media relations.',
    location: 'United States',
    tenure: 'July 2026 - Present',
    category: ['cmo'],
  },
  {
    id: 'oum-cmo',
    organization: 'Oceania University of Medicine',
    role: 'Chief Marketing Officer',
    summary:
      'Led marketing, communications, and admissions operations across five countries, building the pipeline infrastructure that converted brand awareness into 128% matriculant growth and serving as COO succession designee.',
    location: 'United States',
    tenure: 'Jan 2022 - Jan 2026',
    category: ['cmo', 'global'],
  },
  {
    id: 'oum-dir-admissions',
    organization: 'Oceania University of Medicine',
    role: 'Director of Marketing, Communications, and Admissions',
    summary:
      'Unified admissions and marketing operations to align prospect outreach with institutional enrollment goals.',
    location: 'Portland, Maine',
    tenure: 'Oct 2021 - Dec 2021',
    category: ['cmo', 'global'],
  },
  {
    id: 'oum-dir-process',
    organization: 'Oceania University of Medicine',
    role: 'Director of Marketing, Communications, and Process',
    summary:
      'Rebuilt cross-functional marketing and communications workflows across international operating regions.',
    location: 'United States',
    tenure: 'Jan 2021 - Sept 2021',
    category: ['cmo', 'global'],
  },
  {
    id: 'nonprofit-consultant',
    organization: 'Non-Profit Organization',
    role: 'Marketing & Organizational Development Consultant',
    summary:
      'Served as marketing strategist for a mission-driven nonprofit. Led brand positioning and communications, collaborated with leadership on change management transitions, and applied organizational development frameworks.',
    location: 'Portland, Maine',
    tenure: 'Feb 2011 - Dec 2020',
    category: ['cmo', 'enterprise'],
  },
  {
    id: 'gartner-proposal-mgr',
    organization: 'Gartner, Inc.',
    role: 'Senior IT Proposal Manager',
    summary:
      'Led the end-to-end development of competitive IT proposals ranging from $100K to $15M and crafted client-focused win strategies for public and private sector clients.',
    location: 'Portland, Oregon',
    tenure: 'Feb 2002 - Nov 2010',
    category: ['enterprise'],
  },
  {
    id: 'gartner-senior-editor',
    organization: 'Gartner, Inc.',
    role: 'Senior Editor',
    summary:
      'Managed public and private sector proposals, ensuring clarity, quality, and consistency while collaborating with diverse teams to simplify processes.',
    location: 'San Diego, California',
    tenure: 'Jan 2000 - Jan 2002',
    category: ['enterprise'],
  },
  {
    id: 'united-nations',
    organization: 'United Nations',
    role: 'Curriculum Developer & Project Manager',
    summary:
      'Developed an online refugee awareness curriculum for high school students and managed an international project team of designers, engineers, and instructors.',
    location: 'Portland, Oregon',
    tenure: 'July 1999 - Dec 1999',
    category: ['global'],
  },
  {
    id: 'peace-corps',
    organization: 'U.S. Peace Corps',
    role: 'English Teacher',
    summary:
      'Taught English at a high school, organized a healthcare education summer camp, and secured grant funding to bring local infrastructure to EU standards.',
    location: 'Czernichow, Poland',
    tenure: 'July 1997 - June 1999',
    category: ['global'],
  },
  {
    id: 'jagiellonian',
    organization: 'Jagiellonian University',
    role: 'Faculty Lecturer, Human Rights',
    summary:
      'Lectured in Human Rights at Jagiellonian University in Krakow Old Town during international service in Poland.',
    location: 'Krakow, Poland',
    tenure: 'Jan 1998 - Dec 1998',
    category: ['global'],
  },
];

const LENS_METADATA: Record<
  MandateCategory,
  { label: string; focus: string }
> = {
  all: {
    label: 'All Mandates (10)',
    focus:
      'Showing all 10 roles across 25+ years: Peace Corps, United Nations, Gartner, Consulting, and CMO / COO Succession Designee.',
  },
  cmo: {
    label: 'CMO & Growth (5)',
    focus:
      'Executive leadership in brand positioning, enrollment pipelines (128% matriculant growth), and strategic communications.',
  },
  enterprise: {
    label: 'Enterprise & Advisory (3)',
    focus:
      'Nearly two decades of competitive IT proposal strategy ($100K to $15M at Gartner) and organizational consulting.',
  },
  global: {
    label: 'Global & Academic (6)',
    focus:
      'Cross-border operations across five countries, United Nations curriculum leadership, and service in Poland.',
  },
};

export default function PortfolioPage() {
  const [activeLens, setActiveLens] = useState<MandateCategory>('all');

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window)
    ) {
      return;
    }

    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px 160px 0px', threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredExperience =
    activeLens === 'all'
      ? EXPERIENCE_ITEMS
      : EXPERIENCE_ITEMS.filter((item) => item.category.includes(activeLens));

  return (
    <>
      <header className="site-header">
        <a href="#top" className="small" style={{ fontWeight: 600 }}>
          Grace Beber · Portland, Maine
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about" className="link small">
            About
          </a>
          <a href="#work" className="link small">
            Selected Impact
          </a>
          <a href="#experience" className="link small">
            Experience
          </a>
          <a href="#skills" className="link small">
            Skills
          </a>
          <a href="#contact" className="link small">
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        {/* 1. HERO / INTRO SECTION */}
        <section className="hero-section" aria-label="Introduction">
          <div className="monument-row">
            <h1
              className="monument-title"
              data-rise
              style={{ '--i': 0 } as React.CSSProperties}
            >
              Grace Beber
            </h1>
            <figure className="monument-glyph shutter-load">
              <img
                src="/images/coast-lighthouse.jpg"
                alt="Red and white coastal lighthouse above the shoreline"
                width={1200}
                height={900}
                fetchPriority="high"
              />
            </figure>
          </div>

          <div className="grid-two-anchor">
            <div
              className="anchor-left hero-facts-list"
              data-rise
              style={{ '--i': 2 } as React.CSSProperties}
            >
              <div>
                <p className="lead nums" style={{ fontWeight: 600 }}>
                  128% Matriculant Growth
                </p>
                <p className="small muted">
                  Rebuilt marketing and admissions pipeline across five
                  countries at Oceania University of Medicine.
                </p>
              </div>
              <div>
                <p className="lead nums" style={{ fontWeight: 600 }}>
                  $100K to $15M Proposals
                </p>
                <p className="small muted">
                  Spent nearly eleven years at Gartner leading enterprise IT
                  proposal strategy and competitive positioning.
                </p>
              </div>
              <div>
                <p className="lead nums" style={{ fontWeight: 600 }}>
                  25+ Years in Leadership
                </p>
                <p className="small muted">
                  Peace Corps to United Nations, Gartner, Consulting, and CMO /
                  COO Succession Designee.
                </p>
              </div>
            </div>

            <div
              className="anchor-right hero-copy-stack"
              data-rise
              style={{ '--i': 3 } as React.CSSProperties}
            >
              <p className="lead">
                CMO and VP of Marketing &amp; Strategy in the Portland, Maine
                Metropolitan Area. I help organizations connect strategy to the
                market and align people, priorities, and execution behind it.
              </p>

              <p className="body-copy muted">
                Growth, Innovation &amp; Strategic Communications · AI
                Generalist · Leading Global Organizations Through Change.
              </p>

              <div className="hero-actions">
                <a
                  href="https://www.linkedin.com/in/grace-beber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Connect on LinkedIn
                </a>
                <a href="#experience" className="button-surface">
                  Explore Career Record
                </a>
              </div>

              <figure className="hero-wide-photo">
                <img
                  src="/images/coast-pier.jpg"
                  alt="Wooden coastal pier extending into calm Atlantic waters"
                  width={1600}
                  height={1067}
                  className="slow-drift"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="section-surface wrap section-pad">
          <div className="grid-two-anchor">
            <div className="anchor-left" data-reveal>
              <h2 className="head">Executive Profile</h2>
              <div className="about-fact-stack">
                <div>
                  <p className="body-copy" style={{ fontWeight: 600 }}>
                    Portland, Maine Metropolitan Area
                  </p>
                  <p className="small muted">
                    Operating across the United States and five international
                    markets
                  </p>
                </div>
                <div>
                  <p className="body-copy" style={{ fontWeight: 600 }}>
                    CMO &amp; COO Succession Designee
                  </p>
                  <p className="small muted">
                    Expanding leadership beyond marketing into enterprise
                    strategy and operations
                  </p>
                </div>
                <div>
                  <p className="body-copy" style={{ fontWeight: 600 }}>
                     Focus Organizations
                  </p>
                  <p className="small muted">
                    Global organizations, universities, consulting firms, and
                    mission-driven institutions
                  </p>
                </div>
              </div>
            </div>

            <div className="anchor-right about-main-stack" data-reveal>
              <p className="lead">
                My career has taken me from the Peace Corps to the United
                Nations, Gartner, consulting, and serving as CMO and COO
                succession designee. Different organizations, different
                challenges, with one consistent thread: turning complex ideas
                into clear positioning, meaningful connection, and measurable
                growth.
              </p>

              <p className="body-copy">
                I bring together marketing, strategy, communications, growth,
                and organizational leadership to help organizations clarify
                where they stand, understand where they are going, and build the
                alignment to get there. I am most energized by opportunities
                where marketing shapes strategy beyond promotion, strengthens an
                organization&apos;s market position, and drives sustainable
                growth.
              </p>

              <div className="credentials-two-col">
                <div className="credential-col">
                  <h3 className="lead">Education</h3>
                  <div>
                    <p className="body-copy" style={{ fontWeight: 600 }}>
                      Alliant International University
                    </p>
                    <p className="small muted">
                      Master of Arts (MA), Organizational Behavior
                    </p>
                  </div>
                  <div>
                    <p className="body-copy" style={{ fontWeight: 600 }}>
                      Santa Clara University
                    </p>
                    <p className="small muted">
                      Bachelor of Science (BS), Psychology &amp; Minor in
                      Environmental Studies
                    </p>
                  </div>
                </div>

                <div className="credential-col">
                  <h3 className="lead">Certifications</h3>
                  <p className="small">
                    <strong>Introduction to Claude Cowork</strong> · Certificate
                    of Completion
                  </p>
                  <p className="small">
                    <strong>Generative AI for Business Leaders</strong> ·
                    Certificate
                  </p>
                  <p className="small">
                    <strong>AI for Organizational Leaders</strong> · Microsoft
                    and LinkedIn
                  </p>
                  <p className="small">
                    <strong>Registered Yoga Teacher (RYT®)</strong> · Yoga
                    Alliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SELECTED IMPACT / PROJECTS SECTION */}
        <section id="work" className="wrap section-pad">
          <div className="grid-two-anchor" data-reveal>
            <div className="anchor-left">
              <h2 className="head">Selected Mandate Impact</h2>
            </div>
            <div className="anchor-right">
              <p className="lead">
                Four defining strategic mandates across global higher education,
                enterprise IT advisory, executive succession, and international
                curriculum development.
              </p>
            </div>
          </div>

          <div className="work-list">
            <article className="work-item" data-reveal>
              <div className="work-item-copy">
                <h3 className="head">128% Matriculant Growth</h3>
                <p className="small muted nums">
                  Oceania University of Medicine · Five Countries (2021 - 2026)
                </p>
                <p className="body-copy">
                  Rebuilt marketing, communications, and admissions
                  infrastructure across five international markets. Strengthened
                  market positioning and aligned teams around enrollment
                  strategy, turning fragmented operations into a unified,
                  revenue-generating machine.
                </p>
              </div>
              <div className="work-item-media">
                <figure className="work-photo-frame">
                  <img
                    src="/images/coast-island.jpg"
                    alt="Coastal rock island reflected in calm tide waters under a wide sky"
                    width={1600}
                    height={900}
                    loading="lazy"
                  />
                </figure>
              </div>
            </article>

            <article className="work-item" data-reveal>
              <div className="work-item-copy">
                <h3 className="head">$100K to $15M Proposals</h3>
                <p className="small muted nums">
                  Gartner, Inc. · Public &amp; Private Sector (2000 - 2010)
                </p>
                <p className="body-copy">
                  Spent a decade at Gartner supporting enterprise growth through
                  end-to-end competitive IT proposal strategy, client-focused
                  win strategies, and business development across public and
                  private sector engagements.
                </p>
              </div>
              <div className="work-item-media">
                <figure className="work-photo-frame">
                  <img
                    src="/images/coast-stacks.jpg"
                    alt="Basalt sea stacks rising from dark coastal surf"
                    width={1200}
                    height={1500}
                    loading="lazy"
                  />
                </figure>
              </div>
            </article>

            <article className="work-item" data-reveal>
              <div className="work-item-copy">
                <h3 className="head">CMO &amp; COO Succession</h3>
                <p className="small muted nums">
                  Enterprise Strategy &amp; Operations (2011 - 2026)
                </p>
                <p className="body-copy">
                  Served as Chief Marketing Officer and Chief Operating Officer
                  succession designee, expanding leadership beyond marketing
                  into organizational strategy, change management, and
                  enterprise execution.
                </p>
              </div>
              <div className="work-item-media">
                <figure className="work-photo-frame">
                  <img
                    src="/images/coast-dunes.jpg"
                    alt="Coastal dune grass bending in the sea wind under open sky"
                    width={1600}
                    height={1067}
                    loading="lazy"
                  />
                </figure>
              </div>
            </article>

            <article className="work-item" data-reveal>
              <div className="work-item-copy">
                <h3 className="head">UN Curriculum &amp; EU Grants</h3>
                <p className="small muted nums">
                  United Nations &amp; U.S. Peace Corps (1997 - 1999)
                </p>
                <p className="body-copy">
                  Developed an online refugee awareness curriculum for high
                  school students at the United Nations, managing an
                  international team of designers, engineers, and instructors,
                  following two years in Poland teaching, lecturing at
                  Jagiellonian University, and securing EU infrastructure
                  grants.
                </p>
              </div>
              <div className="work-item-media">
                <figure className="work-photo-frame">
                  <img
                    src="/images/coast-surf.jpg"
                    alt="Aerial view of coastal waves breaking along the shore"
                    width={1200}
                    height={1500}
                    loading="lazy"
                  />
                </figure>
              </div>
            </article>
          </div>
        </section>

        {/* SHOWCASE BAND OF UNEQUAL PANELS */}
        <section
          className="section-surface wrap section-pad"
          aria-label="Four Arenas of Leadership"
        >
          <div className="grid-two-anchor" data-reveal>
            <div className="anchor-left">
              <h2 className="head">Four Arenas of Change</h2>
            </div>
            <div className="anchor-right">
              <p className="body-copy muted">
                Across higher education, enterprise advisory, mission-driven
                nonprofits, and international diplomacy, every chapter centers
                on aligning strategy, people, and execution.
              </p>
            </div>
          </div>

          <div className="showcase-band" data-reveal>
            <div className="showcase-panel panel-1">
              <img
                src="/images/coast-pier.jpg"
                alt="Coastal pier representing global higher education leadership"
                width={1600}
                height={1067}
                loading="lazy"
              />
              <div className="showcase-scrim">
                <p className="lead">Global Higher Education</p>
                <p className="small muted">
                  Oceania University of Medicine &amp; Jagiellonian University
                </p>
              </div>
            </div>

            <div className="showcase-panel panel-2">
              <img
                src="/images/coast-stacks.jpg"
                alt="Sea stacks representing enterprise advisory at Gartner"
                width={1200}
                height={1500}
                loading="lazy"
              />
              <div className="showcase-scrim">
                <p className="body-copy" style={{ fontWeight: 600 }}>
                  Enterprise Advisory
                </p>
                <p className="small muted">Decade at Gartner, Inc.</p>
              </div>
            </div>

            <div className="showcase-panel panel-3">
              <img
                src="/images/coast-dunes.jpg"
                alt="Coastal dunes representing nonprofit organizational consulting"
                width={1600}
                height={1067}
                loading="lazy"
              />
              <div className="showcase-scrim">
                <p className="body-copy" style={{ fontWeight: 600 }}>
                  Mission Nonprofits
                </p>
                <p className="small muted">
                  10 Years of Strategy &amp; Change Consulting
                </p>
              </div>
            </div>

            <div className="showcase-panel panel-4">
              <img
                src="/images/coast-lighthouse.jpg"
                alt="Lighthouse representing United Nations and Peace Corps service"
                width={1200}
                height={900}
                loading="lazy"
              />
              <div className="showcase-scrim">
                <p className="body-copy" style={{ fontWeight: 600 }}>
                  Global Service
                </p>
                <p className="small muted">United Nations &amp; Peace Corps</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WORK EXPERIENCE + LIVE MANDATE FILTER */}
        <section id="experience" className="wrap section-pad">
          <div className="grid-two-anchor" data-reveal>
            <div className="anchor-left">
              <h2 className="head">Career Chronicle</h2>
            </div>

            <div
              className="anchor-right"
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div
                className="filter-buttons"
                role="group"
                aria-label="Filter career roles by executive mandate"
              >
                {(
                  ['all', 'cmo', 'enterprise', 'global'] as MandateCategory[]
                ).map((lens) => (
                  <button
                    key={lens}
                    type="button"
                    className="filter-btn"
                    aria-pressed={activeLens === lens}
                    onClick={() => setActiveLens(lens)}
                  >
                    {LENS_METADATA[lens].label}
                  </button>
                ))}
              </div>
              <p className="small muted" aria-live="polite">
                {LENS_METADATA[activeLens].focus}
              </p>
            </div>
          </div>

          <div className="chronicle-stack">
            {filteredExperience.map((item) => (
              <article key={item.id} className="chronicle-entry" data-reveal>
                <div className="chronicle-meta">
                  <h3 className="lead">{item.organization}</h3>
                  <p className="small muted nums">
                    {item.tenure} · {item.location}
                  </p>
                </div>
                <div className="chronicle-body">
                  <p className="body-copy" style={{ fontWeight: 600 }}>
                    {item.role}
                  </p>
                  <p className="body-copy muted">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. SKILLS SECTION (Pale concrete field-1) */}
        <section id="skills" className="field-light wrap section-pad">
          <div className="grid-two-anchor">
            <div className="anchor-left" data-reveal>
              <h2 className="head">Skills &amp; Platforms</h2>
              <p className="body-copy muted" style={{ marginTop: '0.75rem' }}>
                Combining analytical marketing infrastructure, HubSpot CRM
                architecture, generative AI fluency, and 25+ years of executive
                leadership.
              </p>
            </div>

            <div className="anchor-right skills-stack" data-reveal>
              <div>
                <h3 className="lead">Top LinkedIn Skills</h3>
                <p className="body-copy">
                  Marketing Analytics · HubSpot Marketing Hub · HubSpot Sales
                  Hub
                </p>
              </div>

              <div>
                <h3 className="lead">Growth &amp; Positioning</h3>
                <p className="body-copy">
                  Market Positioning · Enrollment &amp; Pipeline Infrastructure
                  · Brand Management · Multi-Country Campaign Execution
                </p>
              </div>

              <div>
                <h3 className="lead">Enterprise Strategy</h3>
                <p className="body-copy">
                  Competitive IT Proposal Strategy ($100K to $15M) · Public
                  &amp; Private Sector Win Strategies · Business Development
                </p>
              </div>

              <div>
                <h3 className="lead">Leadership &amp; Change</h3>
                <p className="body-copy">
                  CMO / COO Succession Leadership · Organizational Behavior
                  (MA) · Cross-Functional Alignment · Change Management
                </p>
              </div>

              <div>
                <h3 className="lead">Applied AI Fluency</h3>
                <p className="body-copy">
                  AI Generalist · AI for Organizational Leaders (Microsoft &amp;
                  LinkedIn) · Generative AI for Business Leaders · Claude Cowork
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="wrap section-pad">
          <div className="grid-two-anchor" data-reveal>
            <div className="anchor-left">
              <h2 className="head">Connect with Grace</h2>
            </div>

            <div
              className="anchor-right"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.35rem',
              }}
            >
              <p className="lead">
                If you are thinking about how marketing, strategy, and
                organizational alignment can create meaningful growth, I would
                enjoy connecting.
              </p>

              <p className="body-copy muted">
                Particularly interested in global organizations, universities,
                consulting and professional services firms, and mission-driven
                organizations doing work worth amplifying.
              </p>

              <a
                href="https://www.linkedin.com/in/grace-beber/"
                target="_blank"
                rel="noopener noreferrer"
                className="display-link"
              >
                linkedin.com/in/grace-beber
              </a>

              <div className="hero-actions">
                <a
                  href="https://www.linkedin.com/in/grace-beber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/gracebeber108-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-surface"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer className="site-footer">
        <div className="grid-two-anchor">
          <div className="anchor-left">
            <p className="body-copy" style={{ fontWeight: 600 }}>
              Grace Beber
            </p>
            <p className="small muted">
              CMO · VP Marketing &amp; Strategy · AI Generalist
            </p>
            <p className="small muted">Portland, Maine Metropolitan Area</p>
          </div>

          <div className="anchor-right credentials-two-col">
            <div className="credential-col">
              <p className="body-copy" style={{ fontWeight: 600 }}>
                Navigation
              </p>
              <a href="#about" className="link small">
                Executive Profile
              </a>
              <a href="#work" className="link small">
                Selected Impact
              </a>
              <a href="#experience" className="link small">
                Career Chronicle
              </a>
              <a href="#skills" className="link small">
                Skills &amp; Platforms
              </a>
            </div>

            <div className="credential-col">
              <p className="body-copy" style={{ fontWeight: 600 }}>
                Direct Links
              </p>
              <a
                href="https://www.linkedin.com/in/grace-beber/"
                target="_blank"
                rel="noopener noreferrer"
                className="link small"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/gracebeber108-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="link small"
              >
                GitHub (gracebeber108-ui)
              </a>
            </div>
          </div>
        </div>

        <svg
          className="footer-wordmark"
          viewBox="0 0 1000 135"
          role="img"
          aria-label="Grace Beber"
        >
          <text
            x="0"
            y="112"
            fill="currentColor"
            fontFamily="Erode, Georgia, serif"
            fontWeight="500"
            fontSize="132"
            letterSpacing="-4"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
          >
            GRACE BEBER
          </text>
        </svg>

        <div className="footer-bottom small">
          <p>© {new Date().getFullYear()} Grace Beber. All rights reserved.</p>
          <p>
            Coastal photography (Unsplash license via Picsum): Nick
            Diamantidis, May Pamintuan, Annie Spratt, Rosan Harmens, Alex
            Talmon, and Sarah Bürvenich.
          </p>
        </div>
      </footer>
    </>
  );
}
