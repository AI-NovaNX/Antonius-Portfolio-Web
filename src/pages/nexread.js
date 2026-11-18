import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import './portfolio.css';
import './nexread.css';

const features = [
  'Secure login and registration using HttpOnly session cookies',
  'Book discovery by title, author, category, and rating',
  'Reader journeys covering cart, checkout, loan history, profile, and reviews',
  'Author profiles with summaries and related book collections',
  'An analytics dashboard for catalog and borrowing activity',
  'Protected management tools for books, loans, users, authors, categories, and reviews',
];

const technologies = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Tailwind CSS 4',
  'shadcn/ui',
  'React Hook Form',
  'Railway API',
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
            <p>
              I built NexRead as a practical full-stack software engineering project, translating
              product requirements and interface designs into a responsive application. My work
              covered reusable frontend components, reader and administrator workflows, form
              handling, REST API integration, authentication-aware experiences, and consistent
              feedback for loading, success, and error states.
            </p>
            <p>
              The project required balancing two distinct audiences. Readers need a simple path from
              discovery to borrowing, while administrators need dense operational tools that remain
              understandable and safe to use. I approached both sides as one connected system rather
              than a collection of isolated screens.
            </p>
            <div className="screenshot-stack" aria-label="Product overview images needed">
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
            <div className="screenshot-grid">
              <figure className="case-study-image">
                <img
                  src="/images/NexRead/Search-book.png"
                  alt="NexRead search results for White Fang with category and rating filters, book rating, cart action, and favorite control"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Book Search and Filtering</strong>
                  Readers can search by keyword and refine the results using category and rating
                  filters before adding a matching title to their cart or favorites.
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
              <div className="screenshot-sequence">
                <figure className="case-study-image">
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
                <figure className="case-study-image">
                  <img
                    src="/images/NexRead/Checkout.png"
                    alt="NexRead checkout showing reader information, selected book, borrowing date, loan duration, return date, policy agreements, and confirmation action"
                    loading="lazy"
                  />
                  <figcaption>
                    <strong>Borrowing Request Confirmation</strong>
                    The checkout step presents the selected book, calculates the return date from
                    the chosen loan duration, and asks readers to confirm the borrowing policy
                    before submitting their request.
                  </figcaption>
                </figure>
              </div>
              <figure className="case-study-image">
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
              <figure className="case-study-image return-verification-image">
                <a
                  href="/images/NexRead/nexread_return_verification_three_stage.png"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open the return verification workflow at full resolution">
                  <img
                    src="/images/NexRead/nexread_return_verification_three_stage.png"
                    alt="NexRead administrator return verification workflow showing how an admin identifies a return request, reviews and approves it, and confirms the updated returned status"
                    loading="lazy"
                  />
                </a>
                <figcaption>
                  <strong>Return Verification — Three-Step Process</strong>
                  Administrators locate the relevant request, verify the book and borrower details
                  before approval, and confirm that the loan record has been updated to Returned.
                  Select the image to view it at full resolution.
                </figcaption>
              </figure>
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

        <section className="article-section" id="architecture">
          <p className="article-number">05</p>
          <div>
            <h2>A connected model for catalog and borrowing data</h2>
            <p>
              The backend is the source of truth for catalog and borrowing activity. Users connect
              to loans, reviews, and cart items; books connect those interactions to authors and
              categories. This model supports both reader-facing journeys and administrative
              reporting without treating them as separate data silos.
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
                The PostgreSQL and Prisma data model connects catalog, inventory, borrowing,
                reviews, cart activity, and administrative audit history across ten relational
                models. Select the diagram to view it at full resolution.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="article-section" id="technology">
          <p className="article-number">06</p>
          <div>
            <h2>A modern foundation for maintainable product development</h2>
            <p>
              Next.js App Router provides the application structure, React and TypeScript support
              predictable component development, and Tailwind CSS with shadcn/ui enables a
              consistent responsive system. React Hook Form handles authentication forms, while the
              Railway-hosted API supplies authentication, catalog, user, loan, cart, and review
              data.
            </p>
            <p>
              Authentication uses HttpOnly session cookies so session credentials are not exposed to
              client-side JavaScript. Protected administration workflows add another boundary
              between reader functionality and catalog management.
            </p>
            <ul className="technology-list">
              {technologies.map(technology => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
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
          <p className="article-number">07</p>
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
