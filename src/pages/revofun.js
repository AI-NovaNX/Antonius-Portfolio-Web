import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import './portfolio.css';
import './nexread.css';

const gameExperiences = [
  {
    title: 'Modern Battleship War',
    copy: 'A strategy game with nickname and difficulty selection, manual ship placement and rotation, enemy AI, scoring, a game-over state, and a persistent local leaderboard.',
  },
  {
    title: 'Avoid Falling Objects',
    copy: 'A real-time keyboard game where players avoid hazards, collect diamond bonuses, and track score, level, and duration before submitting a result to the leaderboard.',
  },
  {
    title: 'Memory Card Game',
    copy: 'A DOM-based matching challenge with a move counter, timer, nickname entry, win feedback, final results, and locally stored leaderboard records.',
  },
];

const engineeringDecisions = [
  {
    title: 'Give every game an explicit lifecycle',
    copy: 'Nickname entry, configuration, active play, completion, replay, and leaderboard states give players clear feedback while keeping game logic easier to reset and maintain.',
  },
  {
    title: 'Use the browser as the game platform',
    copy: 'Vanilla JavaScript, DOM events, timers, and collision or matching rules deliver immediate play without installation. Each game can remain focused on its own mechanics while sharing the RevoFun brand experience.',
  },
  {
    title: 'Persist useful progress without a backend',
    copy: 'localStorage keeps leaderboard results available across browser sessions. This suits the scope of a static milestone while avoiding unnecessary server infrastructure.',
  },
  {
    title: 'Adapt interaction density to the device',
    copy: 'The landing experience supports desktop, tablet, and mobile navigation. The more complex Battleship board is intentionally best experienced on tablet or desktop, where placement controls and two grids have enough room.',
  },
];

const architectureLayers = [
  [
    'Static entry and content pages',
    'A deployment-safe root redirect leads visitors to the main experience, supported by the landing, About, Privacy, and Terms pages.',
  ],
  [
    'Presentation layer',
    'Semantic HTML structures the pages, while CSS, Tailwind CSS utilities, responsive breakpoints, typography, and video assets establish the visual system.',
  ],
  [
    'Game interaction layer',
    'Vanilla JavaScript manages DOM events, player input, timers, board or object state, scoring, difficulty, completion, and replay behavior.',
  ],
  [
    'Browser persistence',
    'localStorage retains game leaderboard records on the player’s device without requiring an account, API, or remote database.',
  ],
  [
    'Static deployment',
    'The compiled assets and pages can be served directly by GitHub Pages or another static host, keeping deployment lightweight and portable.',
  ],
];

const technologyGroups = [
  {
    name: 'Frontend',
    summary:
      'A lightweight browser stack keeps the experience fast to open, easy to deploy, and close to the platform APIs used by each game.',
    items: [
      {
        name: 'HTML5',
        role: 'Page and game structure',
        reason:
          'Semantic pages organize the landing experience, supporting information, game controls, score displays, overlays, and interactive boards without a framework runtime.',
      },
      {
        name: 'CSS3 & Tailwind CSS v4',
        role: 'Responsive styling system',
        reason:
          'Custom CSS handles game-specific visuals and animation, while Tailwind utilities speed up consistent layout, spacing, typography, and breakpoint decisions across the site.',
      },
      {
        name: 'Vanilla JavaScript',
        role: 'Game logic and browser interaction',
        reason:
          'Native events, timers, DOM updates, collision detection, matching logic, scoring, difficulty, and reset flows provide direct control without adding application-framework complexity.',
      },
      {
        name: 'HTML5 Video & Google Fonts',
        role: 'Brand atmosphere and typography',
        reason:
          'Video creates an energetic hero experience, while web fonts reinforce a consistent gaming identity across landing and supporting pages.',
      },
    ],
  },
  {
    name: 'State & Delivery',
    summary:
      'Browser-native persistence and static hosting match the project’s no-login, no-install casual gaming model.',
    items: [
      {
        name: 'DOM & Web APIs',
        role: 'Real-time interface updates',
        reason:
          'Keyboard events, dynamic elements, timers, and browser rendering connect player actions directly to visible game-state changes.',
      },
      {
        name: 'localStorage',
        role: 'Local leaderboard persistence',
        reason:
          'Scores remain available between sessions on the same device without introducing authentication, a server, or database administration.',
      },
      {
        name: 'npm & Tailwind CLI',
        role: 'Development and CSS build workflow',
        reason:
          'A small package workflow compiles Tailwind input into deployable CSS while leaving the finished application as portable static files.',
      },
      {
        name: 'GitHub Pages-ready deployment',
        role: 'Static web delivery',
        reason:
          'A root redirect and relative project structure allow the site to be published as a static experience with no backend process to maintain.',
      },
    ],
  },
];

const ScreenshotPlaceholder = ({ label, title, description }) => (
  <figure className="screenshot-placeholder">
    <div className="screenshot-placeholder-icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="7" y="9" width="34" height="30" rx="4" />
        <circle cx="18" cy="20" r="3" />
        <path d="m10 34 9-9 7 7 5-5 7 7" />
      </svg>
    </div>
    <figcaption>
      <span>{label}</span>
      <strong>{title}</strong>
      <p>{description}</p>
    </figcaption>
  </figure>
);

ScreenshotPlaceholder.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const RevoFunPage = () => (
  <div className="portfolio-page nexread-page">
    <Helmet>
      <title>RevoFun — Browser Gaming Website Case Study</title>
      <meta
        name="description"
        content="RevoFun case study: a responsive browser gaming website featuring Battleship, Avoid Falling Objects, and Memory Card games built with HTML5, Tailwind CSS, and Vanilla JavaScript."
      />
    </Helmet>

    <div className="nexread-shell">
      <aside className="nexread-sidebar">
        <div>
          <Link className="nexread-owner" to="/">
            Antonius Eko Indriarto
          </Link>
          <p className="nexread-role">Fullstack Developer</p>
          <p className="nexread-intro">
            Fullstack Developer building reliable experiences across frontend and backend systems.
          </p>
          <nav className="nexread-nav" aria-label="RevoFun article sections">
            <a href="#overview">
              <span />
              Overview
            </a>
            <a href="#background">
              <span />
              Background
            </a>
            <a href="#contribution">
              <span />
              Contribution
            </a>
            <a href="#experience">
              <span />
              Experience
            </a>
            <a href="#engineering">
              <span />
              Engineering
            </a>
            <a href="#quality">
              <span />
              Quality
            </a>
            <a href="#architecture">
              <span />
              Architecture
            </a>
            <a href="#technology">
              <span />
              Technology
            </a>
            <a href="#reflection">
              <span />
              Reflection
            </a>
          </nav>
        </div>
        <Link className="back-link" to="/#projects">
          ← Back to projects
        </Link>
      </aside>

      <main className="nexread-article">
        <header className="nexread-hero" id="overview">
          <p className="article-kicker">
            Three Games, One Responsive Destination · Frontend Web Application
          </p>
          <h1>RevoFun</h1>
          <p className="article-lead">
            Casual browser games designed for immediate play—no download, installation, or account
            required.
          </p>
          <p>
            RevoFun is a responsive gaming website that introduces a fictional entertainment brand
            and connects visitors to three complete JavaScript games: Modern Battleship War, Avoid
            Falling Objects, and Memory Card. The experience combines a branded landing page,
            supporting company pages, responsive navigation, and locally persisted leaderboards in
            one static deployment.
          </p>
          <div className="article-actions">
            <a href="https://ai-novanx.online/src/indeks.html" target="_blank" rel="noreferrer">
              Play RevoFun ↗
            </a>
            <a
              className="secondary-action"
              href="https://github.com/AI-NovaNX/milestone-2-AI-NovaNX"
              target="_blank"
              rel="noreferrer">
              View Source Code ↗
            </a>
          </div>
        </header>

        <figure className="nexread-preview">
          <img
            src="/images/official/RevoFun.png"
            alt="RevoFun browser-based gaming website preview"
          />
          <figcaption>
            RevoFun brings three distinct casual games into one responsive, branded web experience.
          </figcaption>
        </figure>

        <section className="article-section" id="background">
          <p className="article-number">01</p>
          <div>
            <h2>Making casual games easier to discover and start</h2>
            <p>
              Casual players often want a short break without committing to an installation,
              registration flow, or complex onboarding. At the same time, a collection of unrelated
              game files can feel fragmented and difficult to navigate, especially across screen
              sizes.
            </p>
            <p>
              RevoFun addresses that gap with a single destination where visitors can understand the
              brand, preview the available experiences, and move directly into a game. Each title
              has different interaction rules, but the surrounding website keeps discovery,
              navigation, and visual identity consistent.
            </p>
            <div className="problem-callout">
              <p className="problem-label">The product question</p>
              <p>
                How can three different browser games feel like one accessible product while
                remaining lightweight, responsive, and enjoyable without a backend?
              </p>
            </div>
            <ScreenshotPlaceholder
              label="Image needed · Product overview"
              title="RevoFun landing page and featured games"
              description="Capture the branded hero, video background, primary call to action, and all three featured game cards in one clear desktop screenshot. This should be the recruiter’s fastest introduction to the product."
            />
          </div>
        </section>

        <section className="article-section" id="contribution">
          <p className="article-number">02</p>
          <div>
            <h2>Building the complete experience as an individual frontend developer</h2>
            <div className="problem-callout role-callout">
              <p className="problem-label">Role · Individual Frontend & Game Developer</p>
              <p>
                I independently designed and implemented the RevoFun website and its three games. My
                ownership included page structure, responsive styling, mobile navigation, JavaScript
                game logic, difficulty and scoring systems, local leaderboard persistence,
                supporting information pages, and static deployment preparation.
              </p>
            </div>
            <p>
              This scope required both product-level consistency and game-specific problem solving.
              I created a recognizable journey from the landing page into each title, then built the
              interaction model each game needed—from grid placement and enemy decisions to
              real-time movement and card-matching state.
            </p>
            <p>
              Working without a framework also strengthened my understanding of the browser itself:
              event handling, DOM updates, timers, state transitions, responsive behavior, and local
              persistence all remain visible and intentional in the implementation.
            </p>
          </div>
        </section>

        <section className="article-section" id="experience">
          <p className="article-number">03</p>
          <div>
            <h2>Three play styles for casual gamers</h2>
            <p>
              RevoFun targets students, young professionals, and other casual players who want an
              approachable experience that starts in the browser. The landing page provides quick
              access, while each game combines familiar rules with visible progress and a reason to
              replay.
            </p>
            <div className="entity-grid">
              {gameExperiences.map(game => (
                <article key={game.title}>
                  <h3>{game.title}</h3>
                  <p>{game.copy}</p>
                </article>
              ))}
            </div>
            <div className="screenshot-stack" aria-label="Required RevoFun game screenshots">
              <ScreenshotPlaceholder
                label="Image needed · Responsive navigation"
                title="Mobile landing page and navigation overlay"
                description="Show the RevoFun homepage at mobile width with the burger menu opened. Include the hero or featured-game context so recruiters can see that navigation adapts without losing the brand experience."
              />
              <ScreenshotPlaceholder
                label="Image needed · Battleship onboarding"
                title="Battleship ship placement"
                description="Use one screenshot of the pre-game ship-placement screen with the selected difficulty, player nickname, fleet, grid, and rotation controls visible. This single state should clearly communicate how players prepare for battle."
              />
              <ScreenshotPlaceholder
                label="Image needed · Battleship gameplay"
                title="Modern Battleship War in progress"
                description="Use one screenshot of an active match with the player and enemy grids, recognizable hit-or-miss feedback, score information, and action controls visible."
              />
              <ScreenshotPlaceholder
                label="Image needed · Arcade gameplay"
                title="Avoid Falling Objects"
                description="Capture an active game with the player, falling hazards, diamond bonus, score, level, and duration visible. Choose a frame that immediately communicates movement and the objective."
              />
              <ScreenshotPlaceholder
                label="Image needed · Matching gameplay"
                title="Memory Card Game"
                description="Use one screenshot of an active round with a partially revealed card board, matched pairs, move count, and timer visible."
              />
            </div>
          </div>
        </section>

        <section className="article-section" id="engineering">
          <p className="article-number">04</p>
          <div>
            <h2>Engineering distinct mechanics with browser-native tools</h2>
            <p>
              The central engineering challenge was not simply rendering three interfaces. Each game
              needed reliable rules, input handling, visible feedback, completion conditions, and a
              clean reset path while still fitting the same site and deployment model.
            </p>
            <div className="decision-list">
              {engineeringDecisions.map(decision => (
                <article key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.copy}</p>
                </article>
              ))}
            </div>
            <h3 className="subsection-heading">Game-specific implementation</h3>
            <p>
              Battleship coordinates player placement, rotation, turn results, difficulty, and enemy
              AI across two boards. Avoid Falling Objects runs a real-time loop that creates moving
              hazards and bonuses, reads keyboard input, detects collisions, and increases
              progression. Memory Card manages shuffled pairs, temporary card reveals, matching,
              moves, elapsed time, and the final win state through DOM updates.
            </p>
            <ScreenshotPlaceholder
              label="Diagram needed · Interaction logic"
              title="Game state and replay lifecycle"
              description="Create a simple flow diagram showing Setup → Active Game → Score or Win Condition → Game Over → Leaderboard → Replay. Add short branches for Battleship turns, Falling Objects collisions, and Memory Card matching."
            />
          </div>
        </section>

        <section className="article-section" id="quality">
          <p className="article-number">05</p>
          <div>
            <h2>Quality through clear states, responsive behavior, and repeatable play</h2>
            <p>
              RevoFun&apos;s quality strategy is visible in the player journey: configuration is
              kept separate from active play, scores update during the session, completion states
              are explicit, and replay restores the game to a predictable starting point.
              Leaderboard data remains available after a refresh through localStorage.
            </p>
            <ul className="feature-grid">
              <li>Responsive landing layout for desktop, tablet, and mobile screens</li>
              <li>Mobile navigation overlay with direct access to essential destinations</li>
              <li>Explicit nickname, difficulty, active, game-over, and replay states</li>
              <li>Persistent local leaderboards without requiring user registration</li>
              <li>Supporting About, Privacy, and Terms pages for a more complete product</li>
              <li>Root redirect and static asset structure prepared for hosted deployment</li>
            </ul>
            <p>
              For a recruiter-facing review, the most useful evidence is the same journey a player
              experiences: open the site at multiple widths, start every game, complete both
              successful and failure outcomes, replay, refresh, and confirm that leaderboard records
              persist. Automated gameplay tests are a future improvement rather than a feature
              claimed by the current project.
            </p>
            <div className="screenshot-stack">
              <ScreenshotPlaceholder
                label="Image needed · Responsive evidence"
                title="Responsive tablet landing layout"
                description="Use one screenshot of the RevoFun landing page at tablet width. Keep the navigation, hero, and game cards visible so the responsive layout can be evaluated from a single image."
              />
              <ScreenshotPlaceholder
                label="Image needed · Persistence evidence"
                title="Persisted leaderboard after refresh"
                description="Use one screenshot of the leaderboard after the page has been refreshed, with a recognizable demo nickname and result still visible. Avoid exposing browser extensions or personal information."
              />
            </div>
          </div>
        </section>

        <section className="article-section" id="architecture">
          <p className="article-number">06</p>
          <div>
            <h2>A deliberately lightweight static architecture</h2>
            <p>
              RevoFun runs entirely in the browser. HTML pages and compiled styles provide the
              product shell, JavaScript modules control interactive behavior, and localStorage
              retains leaderboard data on the current device. No backend, API, authentication
              service, or remote database is required for the implemented experience.
            </p>
            <div className="entity-grid">
              {architectureLayers.map(([name, description]) => (
                <article key={name}>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <ScreenshotPlaceholder
              label="Diagram needed · Static architecture"
              title="RevoFun browser architecture"
              description="Create a high-level diagram showing Visitor → Static Host → HTML/CSS/Assets → Vanilla JavaScript Game Logic → DOM and localStorage. Clearly mark that gameplay and leaderboard persistence happen inside the browser and that no backend is currently used."
            />
          </div>
        </section>

        <section className="article-section" id="technology">
          <p className="article-number">07</p>
          <div>
            <h2>A stack chosen for direct browser control and simple delivery</h2>
            <p>
              The technology choices keep the product approachable while exposing the fundamentals
              behind interactive web applications. Each tool serves either the visual experience,
              real-time game behavior, lightweight persistence, or static delivery.
            </p>
            <div className="technology-groups">
              {technologyGroups.map(group => (
                <section className="technology-group" key={group.name}>
                  <div className="technology-group-heading">
                    <p>{group.name}</p>
                    <h3>{group.name} technology stack</h3>
                    <span>{group.summary}</span>
                  </div>
                  <ul className="technology-stack-list">
                    {group.items.map(technology => (
                      <li key={technology.name}>
                        <div className="technology-title">
                          <h4>{technology.name}</h4>
                        </div>
                        <p className="technology-role">{technology.role}</p>
                        <p>{technology.reason}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <figure className="language-composition">
              <figcaption>
                <p className="problem-label">Repository language composition</p>
                <h3>How the RevoFun codebase is distributed</h3>
                <p>
                  GitHub identifies JavaScript as the largest portion of the repository because it
                  powers the game rules and interaction. HTML provides the page and game structure,
                  while CSS controls presentation, responsive layouts, and visual effects.
                </p>
              </figcaption>
              <div
                className="language-composition-bar"
                role="img"
                aria-label="JavaScript 39.7 percent, HTML 37.2 percent, and CSS 23.1 percent">
                <span className="language-js" style={{ width: '39.7%' }} />
                <span className="language-html" style={{ width: '37.2%' }} />
                <span className="language-css" style={{ width: '23.1%' }} />
              </div>
              <ul className="language-composition-legend">
                <li>
                  <span className="language-js" />
                  <strong>JavaScript</strong> 39.7%
                </li>
                <li>
                  <span className="language-html" />
                  <strong>HTML</strong> 37.2%
                </li>
                <li>
                  <span className="language-css" />
                  <strong>CSS</strong> 23.1%
                </li>
              </ul>
              <p className="language-composition-note">
                These percentages represent the relative amount of code detected by GitHub. They do
                not measure code quality, development effort, or the importance of each technology.
              </p>
            </figure>
          </div>
        </section>

        <section className="article-section" id="reflection">
          <p className="article-number">08</p>
          <div>
            <h2>What RevoFun strengthened in my frontend practice</h2>
            <p>
              RevoFun taught me to treat game mechanics as user experience, not only JavaScript
              logic. A correct collision or matching rule still needs understandable feedback,
              deliberate pacing, a visible outcome, and a reliable way to begin again. Building
              three different games also improved my ability to separate reusable product patterns
              from mechanics that should remain game-specific.
            </p>
            <p>
              The project reinforced how much can be achieved with browser-native technologies.
              Working close to the DOM made state transitions, event lifecycles, rendering cost, and
              responsive constraints concrete rather than hidden behind abstractions.
            </p>
            <h3 className="subsection-heading">Results, Output &amp; Future Improvements</h3>
            <p>
              The result is a deployed, no-install destination with three playable experiences, a
              consistent responsive brand, and persistent local scores. Future iterations could add
              touch-first Battleship controls, accessibility improvements, sound and pause settings,
              automated gameplay tests, and an optional backend for authenticated cross-device or
              global leaderboards.
            </p>
            <div className="problem-callout closing-statement">
              <p className="problem-label">Closing perspective</p>
              <p>
                I build playful interfaces with the same discipline as any product: clear states,
                responsive interaction, purposeful feedback, and technology matched to the real user
                need.
              </p>
            </div>
          </div>
        </section>

        <footer className="article-footer">
          <div>
            <p>Explore all three RevoFun games in your browser.</p>
            <div className="demo-access">
              <p>
                No account or installation is required. Choose a game and enter a demo nickname.
              </p>
            </div>
          </div>
          <a href="https://ai-novanx.online/src/indeks.html" target="_blank" rel="noreferrer">
            Play RevoFun ↗
          </a>
        </footer>
      </main>
    </div>
  </div>
);

export default RevoFunPage;
