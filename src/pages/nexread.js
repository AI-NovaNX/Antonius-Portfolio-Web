import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import './portfolio.css';
import './nexread.css';

const features = [
  'Secure login with short-lived JWT access tokens and rotating refresh tokens',
  'Book discovery by title, author, category, and rating',
  'Reader journeys covering cart, checkout, loan history, profile, and reviews',
  'Author profiles with summaries and related book collections',
  'An analytics dashboard for catalog and borrowing activity',
  'Protected management tools for books, loans, users, authors, categories, and reviews',
];

const visualDesignPrinciples = [
  {
    name: 'Neon Glow',
    copy: 'Luminous cyan, violet, and electric-blue accents create energy around primary actions, progress, and feedback. The glow is used selectively so that it guides attention without competing with book content or reducing readability.',
  },
  {
    name: 'Modern',
    copy: 'Clean typography, generous spacing, rounded surfaces, and a clear card hierarchy make a feature-rich library feel familiar and easy to scan. Responsive behavior keeps the same visual system usable from mobile devices to desktop workspaces.',
  },
  {
    name: 'Futuristic',
    copy: 'A deep interface, layered gradients, translucent surfaces, and data-rich progress elements give NexRead a forward-looking identity. The direction supports the product vision of turning a conventional library service into an engaging digital experience.',
  },
];

const technologyGroups = [
  {
    name: 'Frontend',
    summary:
      'A typed, component-driven interface optimized for responsive reader and administrator journeys.',
    items: [
      {
        name: 'Next.js 16',
        icon: '/images/NexRead/icon-nextjs.svg',
        role: 'Application structure and routing',
        reason:
          'I chose the App Router to organize public, authenticated, and administrator experiences within a production-ready React framework.',
      },
      {
        name: 'React 19',
        icon: '/images/NexRead/icon-react.svg',
        role: 'Interactive and reusable UI components',
        reason:
          'Its component model supports shared catalog cards, filters, forms, feedback dialogs, and stateful borrowing workflows without duplicating interface logic.',
      },
      {
        name: 'TypeScript',
        icon: '/images/NexRead/icon-typescript.svg',
        role: 'Type-safe components and API integration',
        reason:
          'Static typing makes data contracts explicit and catches mismatches between UI state, form values, and backend responses earlier in development.',
      },
      {
        name: 'Tailwind CSS 4',
        icon: '/images/NexRead/icon-tailwind.svg',
        role: 'Responsive layout and visual consistency',
        reason:
          'Utility-first styling made it efficient to implement the supplied designs consistently across desktop and mobile screen sizes.',
      },
      {
        name: 'shadcn/ui',
        icon: '/images/NexRead/icon-shadcn.svg',
        role: 'Accessible interface primitives',
        reason:
          'I selected customizable, code-owned components to accelerate dialogs, controls, and feedback patterns while preserving NexRead’s visual identity.',
      },
      {
        name: 'React Hook Form',
        icon: '/images/NexRead/icon-react-hook-form.svg',
        role: 'Authentication and data-entry forms',
        reason:
          'It provides efficient field management and validation with minimal re-rendering for login and administrative forms.',
      },
      {
        name: 'Vercel',
        icon: '/images/NexRead/icon-vercel.svg',
        role: 'Frontend hosting and preview deployment',
        reason:
          'I chose Vercel for its native Next.js workflow. It gives the frontend a production-like environment for validating responsive behavior, testing API integration, and reviewing deployable builds before a release is shared with users.',
      },
    ],
  },
  {
    name: 'Backend',
    summary:
      'A modular, relational, security-conscious API supported by automated verification and controlled delivery.',
    items: [
      {
        name: 'Node.js',
        icon: '/images/NexRead/icon-nodejs.svg',
        role: 'Backend JavaScript runtime',
        reason:
          'Using the JavaScript ecosystem across the stack simplifies development context while supporting an API-oriented application efficiently.',
      },
      {
        name: 'NestJS 11',
        icon: '/images/NexRead/icon-nestjs.svg',
        role: 'Modular REST API architecture',
        reason:
          'Modules, dependency injection, guards, decorators, and exception filters provide a disciplined structure for a growing domain with clear boundaries.',
      },
      {
        name: 'PostgreSQL',
        icon: '/images/NexRead/icon-postgresql.svg',
        role: 'Relational source of truth',
        reason:
          'The library domain depends on reliable relationships and constraints across users, catalog books, inventory counters, loans, reviews, carts, and administrative audit records.',
      },
      {
        name: 'Prisma ORM 7',
        icon: '/images/NexRead/icon-prisma.svg',
        role: 'Typed data access and migrations',
        reason:
          'Prisma provides a readable schema, generated types, migration history, and safe repository implementation over PostgreSQL.',
      },
      {
        name: 'class-validator / class-transformer',
        icon: '/images/NexRead/icon-validation.svg',
        role: 'Request DTO validation',
        reason:
          'Declarative validation lets the global ValidationPipe reject malformed or unexpected input before it reaches business logic.',
      },
      {
        name: 'Passport, JWT, and bcrypt',
        icon: '/images/NexRead/icon-jwt.svg',
        role: 'Authentication and authorization',
        reason:
          'Short-lived access tokens, rotating refresh tokens, hashed token storage, and role guards protect member and administrator capabilities.',
      },
      {
        name: 'Swagger / OpenAPI 3.0',
        icon: '/images/NexRead/icon-swagger.svg',
        role: 'Executable API documentation',
        reason:
          'Documented endpoints, DTOs, status codes, and Bearer authentication give frontend integration a clear, testable contract.',
      },
      {
        name: 'Jest and Supertest',
        icon: '/images/NexRead/icon-jest.svg',
        role: 'Unit and end-to-end testing',
        reason:
          'They verify business services, security boundaries, error translation, and integrated HTTP behavior before changes are released.',
      },
      {
        name: 'Postman / Newman',
        icon: '/images/NexRead/icon-postman.svg',
        role: 'API smoke and regression testing',
        reason:
          'The same collection can validate authentication, CRUD lifecycles, protected routes, and constraints locally or against Railway staging.',
      },
      {
        name: 'GitHub Actions and Railway',
        icon: '/images/NexRead/icon-github-actions.svg',
        role: 'CI/CD and managed deployment',
        reason:
          'Automated quality gates promote passing revisions to staging, while readiness checks, smoke tests, and manual approval protect production releases.',
      },
    ],
  },
];

const securityMiddleware = [
  {
    name: 'Helmet',
    icon: '/images/NexRead/icon-helmet.svg',
    role: 'HTTP security headers and Content Security Policy',
    explanation:
      'Helmet hardens every response with security-focused HTTP headers. Its Content Security Policy restricts which image, script, and stylesheet sources the application is allowed to load, reducing exposure to common browser-based attacks.',
  },
  {
    name: 'CORS',
    icon: '/images/NexRead/icon-cors.svg',
    role: 'Controlled cross-origin API access',
    explanation:
      'The API reads its permitted frontend origin from FRONTEND_URL and limits the accepted HTTP methods and request headers. This prevents unapproved web origins from interacting with NexRead through a browser.',
  },
  {
    name: 'Request ID & HTTP Logging',
    icon: '/images/NexRead/icon-logging.svg',
    role: 'Traceable requests and operational visibility',
    explanation:
      'Custom Express middleware assigns an X-Request-Id to every request and records its method, path, status code, identifier, and processing time. These correlated logs make production debugging, monitoring, and incident investigation significantly faster.',
  },
  {
    name: 'NestJS Throttler',
    icon: '/images/NexRead/icon-throttler.svg',
    role: 'IP-based API rate limiting',
    explanation:
      'A global throttling guard limits request volume by client IP. Environment-configurable limits and time windows help protect login and public endpoints from brute-force attempts, excessive traffic, and automated abuse.',
  },
  {
    name: 'ValidationPipe',
    icon: '/images/NexRead/icon-validation.svg',
    role: 'DTO-based request validation and transformation',
    explanation:
      'The global pipe works with class-validator and class-transformer to validate incoming payloads. whitelist removes fields that are not declared in a DTO, while transform converts accepted values into the expected application types.',
  },
  {
    name: 'Passport & JWT',
    icon: '/images/NexRead/icon-jwt.svg',
    role: 'Token-based authentication',
    explanation:
      'Passport, passport-jwt, and @nestjs/jwt establish the authenticated user context. JwtStrategy verifies each token and JwtAuthGuard protects endpoints that require a signed-in NexRead user.',
  },
  {
    name: 'Role-Based Access Control',
    icon: '/images/NexRead/icon-rbac.svg',
    role: 'USER and ADMIN authorization boundaries',
    explanation:
      'RolesGuard and the @Roles() decorator apply permissions at endpoint level. Administrative capabilities—including user, inventory, and dashboard management—remain unavailable to standard reader accounts.',
  },
  {
    name: 'Prisma Exception Filter',
    icon: '/images/NexRead/icon-prisma.svg',
    role: 'Safe and consistent database error responses',
    explanation:
      'The global filter converts Prisma failures into predictable HTTP responses without exposing internal database details. Unique-constraint violations become 409 Conflict responses, while missing records become 404 Not Found.',
  },
  {
    name: 'Multer',
    icon: '/images/NexRead/icon-upload.svg',
    role: 'Validated multipart file handling',
    explanation:
      'Multer handles multipart/form-data uploads through the NestJS Express platform. NexRead uses it for book covers and user avatars, with file-format validation and size limits protecting storage and processing resources.',
  },
  {
    name: 'Trusted Proxy',
    icon: '/images/NexRead/icon-proxy.svg',
    role: 'Accurate client identity behind Railway',
    explanation:
      'The trust proxy configuration allows NestJS to interpret forwarding information from Railway’s reverse proxy correctly. Accurate client IP addresses keep request logging and IP-based rate limiting dependable in production.',
  },
];

const entities = [
  ['User', 'Borrows books, writes reviews, and owns a personal cart'],
  ['Book', 'Connects authors and categories with loans, reviews, and cart items'],
  ['Loan', 'Tracks borrowing status and due dates throughout the loan lifecycle'],
  ['Review', 'Captures reader ratings and written feedback for each book'],
];

const decisions = [
  {
    title: 'Responsive search without unnecessary requests',
    copy: 'The header search waits 400 milliseconds after the reader stops typing before updating the catalog query. Readers can still submit immediately with Enter, while active category and rating filters remain intact.',
  },
  {
    title: 'Clear separation between reader and administrator workflows',
    copy: 'Public discovery and borrowing experiences are kept focused for readers, while protected administration routes provide purpose-built controls for catalog and operational data.',
  },
  {
    title: 'Reusable, data-driven interface patterns',
    copy: 'Shared cards, headers, filters, forms, feedback dialogs, and pagination patterns create a consistent experience across a feature-rich application and reduce duplicated UI logic.',
  },
];

const developmentApproach = [
  {
    title: 'Model the business workflow before the endpoints',
    copy: 'Borrowing was defined as an atomic lifecycle around Book inventory counters. Creating a loan conditionally decreases availableCopies without exceeding totalCopies, while returning a loan records its completion and restores availability. This prevents concurrent requests from over-borrowing the catalog.',
  },
  {
    title: 'Keep business logic independent from data access',
    copy: 'NestJS services depend on abstract repository contracts, while Prisma-backed repositories implement persistence through a shared Prisma service. This repository pattern keeps domain behavior testable and reduces coupling to the database layer.',
  },
  {
    title: 'Treat validation and authorization as system boundaries',
    copy: 'Global DTO validation rejects invalid or unknown fields, JWT and role guards separate public, member, and administrator capabilities, and database constraint errors are translated into clear 400, 404, or 409 responses.',
  },
  {
    title: 'Release only after automated quality gates pass',
    copy: 'Formatting, linting, type checks, coverage, build verification, migrations, end-to-end tests, Newman API tests, and production dependency checks run in CI before a revision can progress through the delivery pipeline.',
  },
];

const intendedOutcomes = [
  'Simplify book discovery and borrowing',
  'Reduce unnecessary visits to library facilities',
  'Minimize queues at service and administrative counters',
  'Improve operational efficiency and reader convenience',
  'Make library services accessible regardless of location',
];

const ScreenshotPlaceholder = ({ label, title, description, format = 'landscape' }) => (
  <figure className={`screenshot-placeholder screenshot-placeholder-${format}`}>
    <div className="screenshot-placeholder-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="m5 18 5-5 3 3 2-2 4 4" />
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
  format: PropTypes.oneOf(['landscape', 'mobile']),
};

const NexReadPage = () => (
  <div className="portfolio-page nexread-page">
    <Helmet>
      <title>NexRead — Library Web Application</title>
      <meta
        name="description"
        content="NexRead case study: a full-stack library platform designed to improve access, operational efficiency, and reader engagement."
      />
    </Helmet>
    <div className="nexread-shell">
      <aside className="nexread-sidebar">
        <div>
          <Link className="nexread-owner" to="/">
            Antonius Eko Indriarto
          </Link>
          <p className="nexread-role">Frontend Engineer</p>
          <p className="nexread-intro">
            Frontend Developer building reliable web experiences with React, Next.js, and
            TypeScript.
          </p>
          <nav className="nexread-nav" aria-label="NexRead article sections">
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
            <a href="#features">
              <span />
              Experience
            </a>
            <a href="#decisions">
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
            Redefining the Digital Library Experience for Gen Z · Full-Stack Web Application
          </p>
          <h1 className="nexread-hero-logo">
            <img
              src="/images/NexRead/Logo-NexRead.png"
              alt="NexRead — Book and Portal"
              width="1792"
              height="927"
            />
          </h1>
          <p className="article-lead">Every visit brings your next great read.</p>
          <p>
            NexRead is a full-stack library platform designed to make discovering and borrowing
            books effortless for readers while giving administrators reliable tools to manage the
            catalog, users, loans, and community reviews.
          </p>
          <div className="article-actions">
            <a href="https://nexread.ai-novanx.online/" target="_blank" rel="noreferrer">
              View Live demo Application ↗
            </a>
            <a
              className="secondary-action"
              href="https://crack-be-ai-novanx-staging.up.railway.app/api"
              target="_blank"
              rel="noreferrer">
              View Staging API ↗
            </a>
          </div>
        </header>

        <figure className="nexread-preview">
          <img
            src="/images/NexRead/NexRead-homepage.png"
            alt="Complete NexRead reader homepage showing new arrivals, NEXRANK progress, book categories, personalized recommendations, popular authors, and the footer"
          />
          <figcaption>
            The complete reader homepage brings discovery, personalized recommendations, NEXRANK
            progress, book categories, and popular authors into one responsive experience.
          </figcaption>
        </figure>

        <section className="article-section" id="background">
          <p className="article-number">01</p>
          <div>
            <h2>Rethinking the digital library for a new generation of readers</h2>
            <p>
              NexRead started with a simple question: why do many digital library applications still
              fail to create an engaging experience for younger readers, particularly Gen Z?
            </p>
            <p>
              Most library applications are designed around essential transactions: searching the
              catalog, checking availability, and borrowing a book. These functions are important,
              but the experience often remains conventional and passive. People open the application
              only when they need something, rather than making it part of their regular digital
              activities.
            </p>
            <p>
              Gen Z has grown up with interactive products shaped by personalization, achievements,
              leaderboards, and social competition. That behavior suggested an opportunity to pair
              practical access to books with an experience that feels more rewarding and relevant to
              the way younger users already interact with technology.
            </p>

            <div className="visual-design-rationale">
              <p className="problem-label">Visual design direction</p>
              <h3>A neon, modern, and futuristic identity for Gen Z</h3>
              <p>
                NexRead is designed for a broad Gen Z audience—from secondary-school and university
                students to young professionals entering the workplace. Rather than treating this
                audience as a single stereotype, I used visual patterns familiar from the digital
                products, entertainment platforms, and interactive experiences that many younger
                users encounter every day. The result feels expressive and current without becoming
                childish or compromising the clarity expected from an academic or professional
                library service.
              </p>
              <div className="visual-principles-grid">
                {visualDesignPrinciples.map(principle => (
                  <article key={principle.name}>
                    <span aria-hidden="true"></span>
                    <h4>{principle.name}</h4>
                    <p>{principle.copy}</p>
                  </article>
                ))}
              </div>
              <p className="design-accessibility-note">
                The aesthetic is supported by practical UI decisions: glow is reserved for emphasis,
                text sits on stable high-contrast surfaces, and consistent spacing and hierarchy
                keep discovery and borrowing tasks easy to understand.
              </p>
            </div>

            <div className="problem-callout">
              <p className="problem-label">The product opportunity</p>
              <p>
                What if a library platform could make borrowing more convenient while also giving
                readers a reason to return, participate, and see reading as part of their digital
                lifestyle?
              </p>
            </div>

            <h3 className="subsection-heading">
              Modernizing a process that still creates friction
            </h3>
            <p>
              A second motivation was the need to modernize traditional library services. Readers
              may have to visit a library simply to search for a title, confirm availability, or
              begin a borrowing request. This costs time and can create avoidable queues at service
              and administrative counters.
            </p>
            <p>
              NexRead moves those early steps online. Readers can discover books, check
              availability, and initiate a request from anywhere, visiting the library only when a
              physical collection or return is required by its operating procedure. The concept can
              support university, academic, public, and government-managed libraries.
            </p>
            <ul className="feature-grid background-outcomes">
              {intendedOutcomes.map(outcome => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>

            <h3 className="subsection-heading">Beyond digitizing the transaction</h3>
            <p>
              I did not want NexRead to become another management system focused only on borrowing.
              The broader product concept introduces gamification-oriented ideas such as NEXRANK,
              achievements, and friendly competition to make reading more interactive and rewarding.
              These concepts are intended to encourage sustained engagement without distracting from
              the platform's core library services.
            </p>
            <p>
              From a software engineering perspective, this meant starting with the problem rather
              than the framework: understanding user behavior, examining the existing business
              process, and translating those findings into a maintainable digital product. NexRead
              reflects my belief that technology should not merely reproduce an offline process—it
              should remove friction and improve how people experience the service.
            </p>
            <figure className="case-study-image">
              <img
                src="/images/NexRead/Traditional%20Library%20vs%20NexRead%20Workflow.png"
                alt="Workflow comparison showing a traditional library visit, shelf search, counter queue, and borrowing process versus NexRead online search, availability check, and borrowing request"
                loading="lazy"
              />
              <figcaption>
                <strong>Traditional Library vs. NexRead Workflow</strong>
                NexRead moves discovery, availability checking, and borrowing requests online,
                reducing unnecessary visits and service-counter queues.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="article-section" id="contribution">
          <p className="article-number">02</p>
          <div>
            <h2>Turning a broad product scope into a coherent user experience</h2>
            <div className="problem-callout role-callout">
              <p className="problem-label">Role · Sole Full-Stack Developer</p>
              <p>
                I independently designed and built NexRead from end to end. I owned the complete
                delivery lifecycle—from product and workflow analysis through frontend and backend
                development, database modeling, security, testing, documentation, CI/CD, and
                deployment. No other developers or team members contributed to the
                application&apos;s implementation.
              </p>
            </div>
            <p>
              That end-to-end ownership included translating product requirements and interface
              designs into a responsive application. My implementation covered reusable frontend
              components, reader and administrator workflows, form handling, REST API integration,
              authentication-aware experiences, and consistent feedback for loading, success, and
              error states.
            </p>
            <p>
              The project required balancing two distinct audiences. Readers need a simple path from
              discovery to borrowing, while administrators need dense operational tools that remain
              understandable and safe to use. I approached both sides as one connected system rather
              than a collection of isolated screens.
            </p>
            <div className="screenshot-stack" aria-label="NexRead product overview">
              <figure className="case-study-image">
                <img
                  src="/images/NexRead/Reader-home-page.png"
                  alt="NexRead reader homepage showing navigation, book search, new arrivals, a reservation action, and the NEXRANK reading progress panel"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Reader Homepage</strong>
                  Readers can search the catalog, discover new arrivals, reserve books, and follow
                  their NEXRANK progress from a single personalized starting point.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/NexRead/Booklist.png"
                  alt="NexRead book catalog showing category and rating filters, book cards, ratings, cart actions, and favorite controls"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Book Catalog and Discovery</strong>
                  Readers can browse the catalog, narrow results by category and rating, compare
                  book information, and add titles to their cart or favorites from one view.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/NexRead/Admin-dashboard.png"
                  alt="NexRead administrator dashboard showing registered users, catalog size, available books, active and overdue loans, pending returns, authors, and categories"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Administrator Dashboard</strong>
                  Administrators get an at-a-glance view of users, catalog health, book
                  availability, active and overdue loans, pending returns, authors, and categories.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="article-section" id="features">
          <p className="article-number">03</p>
          <div>
            <h2>One platform, two purpose-built experiences</h2>
            <p>
              Readers can browse curated collections, combine search with category and rating
              filters, explore author profiles, and continue from cart to checkout and loan history.
              Favorites are currently stored in the browser and scoped to the signed-in user, with a
              documented API contract prepared for future server-side persistence.
            </p>
            <ul className="feature-grid">
              {features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="screenshot-grid reader-experience-grid">
              <figure className="case-study-image">
                <img
                  src="/images/NexRead/Search-book.png"
                  alt="NexRead search results for White Fang with category and rating filters, book rating, cart action, and favorite control"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Book Search and Filtering</strong>A React-controlled input uses 400 ms
                  debouncing to update catalog results as the reader types, eliminating the need to
                  press Enter while avoiding unnecessary API requests. Readers can still submit
                  immediately with Enter, refine results using category and rating filters, and add
                  matching titles to their cart or favorites.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/NexRead/Book-detail.png"
                  alt="NexRead detail page for White Fang showing its cover, author, rating, page count, available copies, reviews, description, cart, borrowing, and favorite actions"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Book Details and Availability</strong>
                  Readers can review essential book information, confirm available copies, read the
                  description and ratings, then add the title to their cart, borrow it, or save it
                  as a favorite.
                </figcaption>
              </figure>
              <figure className="case-study-image cart-checkout-image">
                <img
                  src="/images/NexRead/Cart-and-borrowing.png"
                  alt="NexRead cart showing selectable books, removal controls, a loan summary, and the borrowing action"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Cart and Borrowing Checkout</strong>
                  Readers can review and select books in their cart, remove unwanted titles, and
                  confirm the loan summary before submitting a borrowing request.
                </figcaption>
              </figure>
              <figure className="case-study-image borrowing-confirmation-image">
                <img
                  src="/images/NexRead/Checkout.png"
                  alt="NexRead checkout showing reader information, selected book, borrowing date, loan duration, return date, policy agreements, and confirmation action"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Borrowing Request Confirmation</strong>
                  The checkout step presents the selected book, calculates the return date from the
                  chosen loan duration, and asks readers to confirm the borrowing policy before
                  submitting their request.
                </figcaption>
              </figure>
              <figure className="case-study-image loan-history-image">
                <img
                  src="/images/NexRead/Loan-history.png"
                  alt="NexRead borrowed list showing loan status filters, overdue and returned books, due dates, return actions, and review actions"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Loan History and Status Tracking</strong>
                  Readers can filter their borrowing history by status, monitor due dates, return
                  overdue books, and review titles after completing a loan.
                </figcaption>
              </figure>
              <figure className="case-study-image admin-dashboard-image">
                <a
                  href="/images/NexRead/nexread_admin_dashboard_analytics.png"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open the administrator dashboard at full resolution">
                  <img
                    src="/images/NexRead/nexread_admin_dashboard_analytics.png"
                    alt="NexRead administrator dashboard showing user and catalog metrics, book availability, active and overdue loans, pending returns, top borrowed books, and management shortcuts"
                    loading="lazy"
                  />
                </a>
                <figcaption>
                  <strong>Dashboard and Loan Management</strong>
                  Administrators can monitor catalog health and borrowing activity, identify overdue
                  or pending returns, review popular books, and move directly to the management
                  areas that require attention. Select the image to view it at full resolution.
                </figcaption>
              </figure>
              <div className="screenshot-stack return-workflow-placements">
                <figure className="case-study-image return-workflow-step">
                  <img
                    src="/images/NexRead/Admin-Return-request.png"
                    alt="NexRead administrator loan management page for identifying a reader's pending return request"
                    loading="lazy"
                  />
                  <figcaption>
                    <strong>IDENTIFY RETURN REQUEST</strong>
                    The administrator locates the relevant pending return request and confirms the
                    borrower and book details before continuing to verification.
                  </figcaption>
                </figure>
                <figure className="case-study-image return-workflow-step">
                  <img
                    src="/images/NexRead/Admin-Approve-Return.png"
                    alt="NexRead return verification dialog showing the borrower, book, loan dates, and approval action for an administrator"
                    loading="lazy"
                  />
                  <figcaption>
                    <strong>REVIEW &amp; APPROVE</strong>
                    The administrator reviews the borrower, book, and loan details in the return
                    verification dialog before approving the request.
                  </figcaption>
                </figure>
                <figure className="case-study-image return-workflow-step">
                  <img
                    src="/images/NexRead/Admin-Status-Returned.png"
                    alt="NexRead administrator loan management page showing the approved request with its status updated to Returned"
                    loading="lazy"
                  />
                  <figcaption>
                    <strong>CONFIRM UPDATED STATUS</strong>
                    After approval, the administrator confirms that the loan record has been
                    successfully updated to Returned, completing the return workflow.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="article-section" id="decisions">
          <p className="article-number">04</p>
          <div>
            <h2>Engineering decisions shaped by real user journeys</h2>
            <p>
              The most valuable work was not simply adding more screens. It was deciding how the
              interface should behave as users search, filter, authenticate, borrow, and manage data
              across the application.
            </p>
            <div className="decision-list">
              {decisions.map(decision => (
                <article key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.copy}</p>
                </article>
              ))}
            </div>
            <figure className="case-study-image">
              <div className="borrowed-list-image-frame">
                <img
                  src="/images/NexRead/Borrowed-List.png"
                  alt="NexRead borrowed list showing book search, loan status filters, overdue status feedback, due dates, return actions, and review actions"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <strong>Search, Filters, and Feedback States</strong>
                Readers can search their borrowed books, filter loans by lifecycle status, identify
                overdue items through clear visual feedback, and take the appropriate return or
                review action.
              </figcaption>
            </figure>
            <figure className="case-study-image">
              <img
                src="/images/NexRead/Checkout.png"
                alt="NexRead checkout retaining the selected book, borrowing date, loan duration, calculated return date, and policy confirmations"
                loading="lazy"
              />
              <figcaption>
                <strong>Preserved Search and Filter State</strong>
                The checkout flow keeps the selected book and borrowing choices visible while the
                reader reviews the calculated return date and confirms the required policies.
              </figcaption>
            </figure>
            <figure className="case-study-image">
              <img
                src="/images/NexRead/Success-Notif.png"
                alt="NexRead checkout success notification confirming that one book was borrowed for three days with a link to the borrowed list"
                loading="lazy"
              />
              <figcaption>
                <strong>Success and Error Feedback</strong>
                After checkout, readers receive an explicit confirmation showing what was borrowed
                and for how long, together with a direct path to their Borrowed List.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="article-section" id="quality">
          <p className="article-number">05</p>
          <div>
            <h2>A workflow-first, quality-gated development approach</h2>
            <p>
              NexRead was developed around the application&apos;s real business flows rather than as
              a collection of disconnected CRUD screens. I first translated borrowing, physical
              return approval, account management, and catalog operations into explicit states,
              permissions, and data constraints. Those rules then guided the API contracts,
              interface behavior, and automated tests.
            </p>
            <div className="decision-list development-approach-list">
              {developmentApproach.map(item => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>

            <ul className="quality-metrics" aria-label="NexRead automated testing results">
              <li>
                <strong>92</strong>
                <span>passing unit tests</span>
              </li>
              <li>
                <strong>20</strong>
                <span>passing test suites</span>
              </li>
              <li>
                <strong>75%</strong>
                <span>minimum CI coverage per metric</span>
              </li>
              <li>
                <strong>Staged</strong>
                <span>approval-gated production delivery</span>
              </li>
            </ul>

            <h3 className="subsection-heading">Testing the behavior that protects the product</h3>
            <p>
              Jest unit tests cover business services, authorization guards and strategy,
              environment validation, database-error translation, and response-safety utilities.
              Supertest end-to-end tests verify integrated behavior, while Postman and Newman cover
              request validation, authentication, CRUD lifecycles, protected routes, error handling,
              and database constraints against seeded data.
            </p>

            <h3 className="subsection-heading">Controlled delivery from main to production</h3>
            <p>
              The Next.js frontend is developed and deployed through Vercel, providing a
              browser-accessible environment for responsive review and integration testing against
              the NexRead API. For the backend, GitHub Actions acts as the CI gate. Revisions that
              pass the main pipeline are deployed to Railway staging, where database-aware readiness
              checks and automated smoke tests validate the release. Production remains protected by
              manual approval, reducing the risk of promoting an unhealthy build.
            </p>
            <p>
              Runtime safeguards include Helmet security headers, per-IP and authentication rate
              limits, startup environment validation, structured JSON logs with request IDs,
              graceful shutdown hooks, and separate liveness and database-aware readiness probes.
              Together, these practices make reliability part of the delivery method rather than a
              final deployment task.
            </p>
          </div>
        </section>

        <section className="article-section" id="architecture">
          <p className="article-number">06</p>
          <div>
            <h2>A connected model for catalog and borrowing data</h2>
            <p>
              The backend is the source of truth for catalog and borrowing activity. Users connect
              to loans, reviews, and cart items; books connect those interactions to authors and
              categories. This model supports both reader-facing journeys and administrative
              reporting without treating them as separate data silos.
            </p>
            <p>
              At catalog level, totalCopies and availableCopies provide efficient inventory counters
              for atomic borrowing operations. The detailed ERD remains the architectural reference
              for physical-copy tracking and its associated audit history.
            </p>
            <div className="entity-grid">
              {entities.map(([name, description]) => (
                <article key={name}>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <figure className="case-study-image diagram-image">
              <a
                href="/images/NexRead/Entity-diagram.png"
                target="_blank"
                rel="noreferrer"
                aria-label="Open the NexRead entity relationship diagram at full resolution">
                <img
                  src="/images/NexRead/Entity-diagram.png"
                  alt="NexRead entity relationship diagram showing Author, Book, BookCopy, BookCopyAuditLog, Category, AdminAuditLog, User, Loan, Review, and CartItem models with their keys and relationships"
                  loading="lazy"
                />
              </a>
              <figcaption>
                <strong>NexRead Entity Relationship Diagram</strong>
                The PostgreSQL and Prisma data model connects catalog, physical-copy inventory,
                borrowing, reviews, cart activity, and administrative audit history across ten
                relational models. Select the diagram to view it at full resolution.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="article-section" id="technology">
          <p className="article-number">07</p>
          <div>
            <h2>A modern foundation for maintainable product development</h2>
            <p>
              I selected the stack around four priorities: a responsive and maintainable interface,
              explicit contracts between frontend and backend, reliable relational data, and a
              delivery process that verifies every revision before release. Each technology has a
              defined responsibility rather than being included only because it is popular.
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
                          <span className="technology-icon" aria-hidden="true">
                            <img src={technology.icon} alt="" loading="lazy" />
                          </span>
                          <h4>{technology.name}</h4>
                        </div>
                        <p className="technology-role">{technology.role}</p>
                        <p>{technology.reason}</p>
                      </li>
                    ))}
                  </ul>
                  {group.name === 'Frontend' && (
                    <figure className="language-composition frontend-language-composition">
                      <figcaption>
                        <p className="problem-label">Frontend repository composition</p>
                        <h3>A strongly typed frontend codebase</h3>
                        <p>
                          GitHub identifies TypeScript as nearly the entire frontend codebase,
                          reflecting the project&apos;s emphasis on typed components, application
                          state, and API contracts. CSS contains the custom presentation rules,
                          while only a minimal amount of plain JavaScript remains.
                        </p>
                      </figcaption>
                      <div
                        className="language-composition-bar"
                        role="img"
                        aria-label="TypeScript 95.3 percent, CSS 4.6 percent, and JavaScript 0.1 percent">
                        <span className="language-typescript" style={{ width: '95.3%' }} />
                        <span className="language-css" style={{ width: '4.6%' }} />
                        <span className="language-js" style={{ width: '0.1%' }} />
                      </div>
                      <ul className="language-composition-legend">
                        <li>
                          <span className="language-typescript" />
                          <strong>TypeScript</strong> 95.3%
                        </li>
                        <li>
                          <span className="language-css" />
                          <strong>CSS</strong> 4.6%
                        </li>
                        <li>
                          <span className="language-js" />
                          <strong>JavaScript</strong> 0.1%
                        </li>
                      </ul>
                      <p className="language-composition-note">
                        These percentages represent the relative amount of frontend repository
                        content classified by GitHub. They do not measure code quality, development
                        effort, or the importance of each technology, and Tailwind utility classes
                        written inside components are counted with those component files.
                      </p>
                    </figure>
                  )}
                  {group.name === 'Backend' && (
                    <figure className="language-composition backend-language-composition">
                      <figcaption>
                        <p className="problem-label">Backend repository composition</p>
                        <h3>A TypeScript-first backend codebase</h3>
                        <p>
                          GitHub identifies TypeScript as nearly the entire backend repository,
                          reflecting the typed NestJS modules, services, DTOs, guards, tests, and
                          Prisma integration. JavaScript supports a small number of runtime or tool
                          configuration files, while Shell scripts automate selected development or
                          delivery tasks.
                        </p>
                      </figcaption>
                      <div
                        className="language-composition-bar"
                        role="img"
                        aria-label="TypeScript 98.2 percent, JavaScript 1.4 percent, and Shell 0.4 percent">
                        <span className="language-typescript" style={{ width: '98.2%' }} />
                        <span className="language-js" style={{ width: '1.4%' }} />
                        <span className="language-shell" style={{ width: '0.4%' }} />
                      </div>
                      <ul className="language-composition-legend">
                        <li>
                          <span className="language-typescript" />
                          <strong>TypeScript</strong> 98.2%
                        </li>
                        <li>
                          <span className="language-js" />
                          <strong>JavaScript</strong> 1.4%
                        </li>
                        <li>
                          <span className="language-shell" />
                          <strong>Shell</strong> 0.4%
                        </li>
                      </ul>
                      <p className="language-composition-note">
                        These percentages represent repository content classified by GitHub. They do
                        not measure code quality, architectural importance, or development effort,
                        and technologies such as PostgreSQL and Prisma are described by their role
                        rather than by this language calculation.
                      </p>
                    </figure>
                  )}
                </section>
              ))}
            </div>
            <section className="security-technology" aria-labelledby="security-technology-title">
              <div className="technology-group-heading">
                <p>Security &amp; middleware</p>
                <h3 id="security-technology-title">
                  Defense in depth across the request lifecycle
                </h3>
                <span>
                  NexRead combines preventive controls, identity checks, input validation,
                  observability, and safe error translation instead of relying on authentication
                  alone. Each request passes through a deliberate set of protections before and
                  after it reaches the application logic.
                </span>
              </div>
              <ul className="security-middleware-list">
                {securityMiddleware.map(middleware => (
                  <li key={middleware.name}>
                    <div className="technology-title">
                      <span className="technology-icon" aria-hidden="true">
                        <img src={middleware.icon} alt="" loading="lazy" />
                      </span>
                      <div>
                        <h4>{middleware.name}</h4>
                        <p className="technology-role">{middleware.role}</p>
                      </div>
                    </div>
                    <p>{middleware.explanation}</p>
                  </li>
                ))}
              </ul>
            </section>
            <figure className="case-study-image">
              <img
                src="/images/NexRead/Admin-only-page.png"
                alt="NexRead sign-in page showing administrator credentials, password protection, and the login action"
                loading="lazy"
              />
              <figcaption>
                <strong>Protected Admin Access</strong>
                Authentication provides a controlled entry point before administrators can access
                protected catalog, user, loan, and review management workflows.
              </figcaption>
            </figure>
            <figure className="case-study-image api-documentation-image">
              <a
                href="/images/NexRead/swagger-staging.png"
                target="_blank"
                rel="noreferrer"
                aria-label="Open the NexRead Swagger API documentation at full resolution">
                <img
                  src="/images/NexRead/swagger-staging.png"
                  alt="NexRead Swagger OpenAPI documentation showing health checks, authentication endpoints, authorization, and authenticated user profile endpoints"
                  loading="lazy"
                />
              </a>
              <figcaption>
                <strong>API Documentation</strong>
                The staging API is documented with Swagger and OpenAPI 3.0, providing grouped
                endpoints, HTTP methods, authentication controls, and readable contracts for
                frontend integration. Select the image to view it at full resolution.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="article-section" id="reflection">
          <p className="article-number">08</p>
          <div>
            <h2>What this project strengthened</h2>
            <p>
              NexRead strengthened my ability to reason about an application as a complete product:
              shared state must survive navigation, filters must compose predictably, API failures
              need clear feedback, and administrative power must be paired with confirmation and
              error handling.
            </p>
            <p>
              It also reinforced a lesson from my quality-management background: reliability comes
              from disciplined details. Consistent components, explicit user feedback, structured
              data relationships, and well-defined workflows all contribute to software that users
              can trust.
            </p>
            <p>
              A logical next step is moving favorites from browser-local storage to the backend so
              they can follow readers across devices while preserving the same user experience.
            </p>
            <div className="screenshot-grid screenshot-grid-mobile">
              <figure className="case-study-image mobile-experience-image">
                <img
                  src="/images/NexRead/Nexread-on-mobile.png"
                  alt="NexRead responsive mobile interface displaying the reader homepage and book discovery experience"
                  loading="lazy"
                />
                <figcaption>
                  <strong>NexRead on Mobile</strong>
                  The responsive interface keeps book discovery and essential reader actions clear
                  and accessible on smaller screens.
                </figcaption>
              </figure>
              <figure className="case-study-image nexrank-image">
                <img
                  src="/images/NexRead/Nexrank.png"
                  alt="NEXRANK gamification panel showing reader level, experience points, progress to the next level, weekly quest, reading streak, achievements, and monthly ranking"
                  loading="lazy"
                />
                <figcaption>
                  <strong>NEXRANK and Achievement Concept</strong>
                  The gamification concept combines XP progression, weekly reading quests, streaks,
                  achievements, and comparative ranking to encourage readers to return and build
                  consistent reading habits.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <blockquote className="closing-statement">
          <span aria-hidden="true">“</span>
          <p>
            I don&apos;t just build applications to make existing processes digital.<br></br> I
            build solutions to make those processes better, more accessible, and more meaningful to
            the people who use them.
          </p>
        </blockquote>

        <footer className="article-footer">
          <p>Explore the complete reader experience.</p>
          <div className="demo-access">
            <p>
              To explore NexRead application please click link below, sign in with the demo reader
              account below:
            </p>
            <dl>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:user5@email.com">user5@email.com</a>
                </dd>
              </div>
              <div>
                <dt>Password</dt>
                <dd>user5123</dd>
              </div>
            </dl>
          </div>
          <a href="https://nexread.ai-novanx.online/" target="_blank" rel="noreferrer">
            Explore NexRead ↗
          </a>
        </footer>
      </main>
    </div>
  </div>
);

export default NexReadPage;
