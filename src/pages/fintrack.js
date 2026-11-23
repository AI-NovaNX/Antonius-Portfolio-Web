import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import BackToTopButton from '../components/back-to-top-button';
import './portfolio.css';
import './nexread.css';

const apiCapabilities = [
  'JWT registration and login with bcrypt password hashing and protected profile access',
  'User-owned cash, bank, and digital-wallet accounts with isolated account queries',
  'Income, expense, and transfer transactions with automatic balance updates and reversal logic',
  'Admin-controlled categories with role-based access through guards and decorators',
  'Relational responses for users, accounts, transactions, destination accounts, and categories',
  'Interactive Swagger documentation and repeatable Postman/Newman regression coverage',
];

const engineeringDecisions = [
  {
    title: 'Derive ownership from the verified token',
    copy: 'Protected account and transaction queries use the authenticated user identity from JWT rather than trusting a user_id submitted by the client. Cross-user resources are hidden behind 404 responses to reduce information disclosure.',
  },
  {
    title: 'Treat balance changes as reversible business operations',
    copy: 'Income adds funds, expenses subtract them, and transfers move value between two accounts owned by the same user. Updates and deletes first reverse the previous financial effect before applying the new state, preventing balances from drifting away from transaction history.',
  },
  {
    title: 'Isolate calculations from infrastructure',
    copy: 'BalanceUpdatesProvider is an injectable pure calculation component with no Prisma, database, or HTTP dependency. It can be instantiated and unit-tested directly, keeping financial rules easier to reason about than persistence-aware service code.',
  },
  {
    title: 'Enforce rules at API and database boundaries',
    copy: 'DTO validation rejects foreign fields and transforms route parameters, while custom PostgreSQL checks protect amount, category, enum, and transfer-destination rules even if data reaches the database outside the normal controller path.',
  },
];

const architectureLayers = [
  [
    'API consumer',
    'Swagger, Postman, a future frontend, or another client sends JSON over HTTP with Bearer authentication.',
  ],
  [
    'NestJS controllers',
    'Resource controllers document endpoints, validate DTOs, and delegate authenticated requests to focused services.',
  ],
  [
    'Security boundary',
    'Passport JWT, JwtAuthGuard, RolesGuard, ownership rules, throttling, Helmet, and CORS protect access and request handling.',
  ],
  [
    'Domain services',
    'Users, accounts, categories, and transactions services coordinate business rules and relational operations.',
  ],
  [
    'Balance provider',
    'A pure injectable provider calculates income, expense, transfer, update, and reversal effects independently from persistence.',
  ],
  [
    'Prisma & PostgreSQL',
    'PrismaService manages relational access and migrations, while PostgreSQL foreign keys, indexes, and custom checks preserve data integrity.',
  ],
];

const technologyGroups = [
  {
    name: 'Backend',
    summary:
      'A modular, typed API architecture built around explicit financial rules, authorization boundaries, and relational integrity.',
    items: [
      {
        name: 'NestJS',
        icon: '/images/NexRead/icon-nestjs.svg',
        role: 'Modular REST API framework',
        reason:
          'Modules, dependency injection, guards, providers, pipes, middleware, and decorators keep financial capabilities separated while allowing cross-cutting security to remain consistent.',
      },
      {
        name: 'TypeScript',
        icon: '/images/NexRead/icon-typescript.svg',
        role: 'Typed domain and request contracts',
        reason:
          'Types and enums make transaction variants, DTOs, service inputs, and relational responses explicit, reducing ambiguity in balance-sensitive logic.',
      },
      {
        name: 'PostgreSQL',
        icon: '/images/NexRead/icon-postgresql.svg',
        role: 'Relational financial data store',
        reason:
          'Users, accounts, categories, and transactions require dependable relationships, foreign keys, indexes, and database-level checks for long-term consistency.',
      },
      {
        name: 'Prisma ORM',
        icon: '/images/NexRead/icon-prisma.svg',
        role: 'Schema, migrations, seed data, and data access',
        reason:
          'Prisma supplies typed access and repeatable migrations, while custom SQL extends the schema with financial constraints not expressible directly in Prisma Schema Language.',
      },
      {
        name: 'Passport JWT & bcrypt',
        icon: '/images/NexRead/icon-jwt.svg',
        role: 'Authentication and password protection',
        reason:
          'Bearer tokens establish the current user for protected requests, while bcrypt ensures stored passwords are hashed and never returned through API responses.',
      },
    ],
  },
  {
    name: 'Quality & Delivery',
    summary:
      'Executable documentation, layered validation, security testing, and production smoke evidence make API behavior observable and repeatable.',
    items: [
      {
        name: 'Swagger / OpenAPI',
        icon: '/images/NexRead/icon-swagger.svg',
        role: 'Interactive API contract',
        reason:
          'Endpoint operations, parameters, DTO examples, status responses, and Bearer authentication are generated from code so consumers can understand and exercise the API from one interface.',
      },
      {
        name: 'class-validator',
        icon: '/images/NexRead/icon-validation.svg',
        role: 'Global DTO validation',
        reason:
          'Whitelist, forbidNonWhitelisted, and transform settings constrain accepted payloads, reject unexpected properties, and convert route inputs into expected types.',
      },
      {
        name: 'Jest & E2E Testing',
        icon: '/images/NexRead/icon-jest.svg',
        role: 'Business and security verification',
        reason:
          'Isolated provider tests verify balance calculations, while end-to-end tests cover authentication, hashing, ownership, RBAC, validation, conflicts, throttling, transfers, and balance reversal.',
      },
      {
        name: 'Postman & Newman',
        icon: '/images/NexRead/icon-postman.svg',
        role: 'Repeatable API regression suite',
        reason:
          'Dynamic test data, ordered workflows, cleanup, and HTML evidence make the complete API contract repeatable locally and against a deployed environment.',
      },
      {
        name: 'Railway',
        icon: '/images/NexRead/icon-railway.svg',
        role: 'Production API deployment',
        reason:
          'Railway provides a public production environment for Swagger exploration and documented smoke tests against the same protected API behavior described in the repository.',
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

const FinTrackPage = () => (
  <div className="portfolio-page nexread-page">
    <Helmet>
      <title>FinTrack — Personal Finance API Case Study</title>
      <meta
        name="description"
        content="FinTrack case study: a secure NestJS personal-finance API with account ownership, balance-safe transactions, RBAC, PostgreSQL, Prisma, Swagger, and regression testing."
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
          <nav className="nexread-nav" aria-label="FinTrack article sections">
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
        <div className="sidebar-actions">
          <Link className="back-link" to="/#projects">
            ← Back to projects
          </Link>
          <BackToTopButton />
        </div>
      </aside>

      <main className="nexread-article">
        <header className="nexread-hero" id="overview">
          <p className="article-kicker">
            Protecting Ownership and Financial Integrity · NestJS REST API
          </p>
          <h1>FinTrack</h1>
          <p className="article-lead">
            A personal-finance API where every balance change remains accountable.
          </p>
          <p>
            FinTrack is a backend API for recording personal finances across cash, bank, and digital
            wallet accounts. Authenticated users can organize income, expenses, and transfers while
            the system protects ownership, applies transaction effects consistently, and exposes a
            documented contract for future frontend experiences.
          </p>
          <div className="article-actions">
            <a
              href="https://milestone-4-ai-novanx-production.up.railway.app/docs"
              target="_blank"
              rel="noreferrer">
              Explore Swagger Documentation ↗
            </a>
            <a
              className="secondary-action"
              href="https://github.com/AI-NovaNX/milestone-4-AI-NovaNX"
              target="_blank"
              rel="noreferrer">
              View Source Code ↗
            </a>
          </div>
        </header>

        <figure className="nexread-preview">
          <img
            src="/images/official/Fintech-API.png"
            alt="FinTrack interactive Swagger API documentation preview"
          />
          <figcaption>
            FinTrack exposes its authentication, users, accounts, categories, and transactions
            contract through interactive Swagger documentation.
          </figcaption>
        </figure>

        <section className="article-section" id="background">
          <p className="article-number">01</p>
          <div>
            <h2>Modeling personal finance as more than basic CRUD</h2>
            <p>
              Personal finance records are interconnected. A transaction is not simply a row to
              create or delete: it changes an account balance, may involve a second destination
              account, belongs to one authenticated user, and must remain consistent when edited or
              removed.
            </p>
            <p>
              FinTrack was created as a RevoU backend milestone to turn those relationships into a
              secure API. Users need to manage multiple financial accounts without seeing another
              person&apos;s data, while administrators need controlled access to shared categories
              and operational visibility.
            </p>
            <div className="problem-callout">
              <p className="problem-label">The backend challenge</p>
              <p>
                How can an API keep balances correct across income, expenses, transfers, updates,
                and deletions while ensuring every query and mutation respects ownership?
              </p>
            </div>
            <figure className="case-study-image">
              <img
                src="/images/Fintrack/Complete-Swagger-endpoint.png"
                alt="Complete FinTrack Swagger endpoint overview showing the Authentication, Users, Accounts, Categories, and Transactions groups"
                loading="lazy"
              />
              <figcaption>
                <strong>Complete Swagger endpoint overview</strong>
                FinTrack documents its authentication, users, accounts, categories, and transactions
                endpoints in one interactive API contract.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="article-section" id="contribution">
          <p className="article-number">02</p>
          <div>
            <h2>Owning the API from schema design to production evidence</h2>
            <div className="problem-callout role-callout">
              <p className="problem-label">Role · Individual Backend Developer</p>
              <p>
                I implemented FinTrack as an individual backend milestone. My work covered domain
                modeling, NestJS modules and services, Prisma schema and migrations, authentication,
                ownership and role authorization, validation, financial business rules, Swagger
                documentation, automated tests, Postman regression coverage, and Railway deployment.
              </p>
            </div>
            <p>
              The project evolved from a small set of mock GET endpoints into protected full CRUD
              for accounts, categories, and transactions. I kept security and financial integrity
              inside the application design rather than adding them after endpoint completion.
            </p>
            <p>
              I also separated balance calculations into a pure injectable provider. This reduced
              coupling to Prisma and made critical income, expense, and transfer rules directly
              testable without database or HTTP setup.
            </p>
          </div>
        </section>

        <section className="article-section" id="experience">
          <p className="article-number">03</p>
          <div>
            <h2>An API experience designed for users, administrators, and developers</h2>
            <p>
              Although FinTrack is backend-only, its users still include people and systems with
              distinct needs. Account owners need private and predictable financial operations,
              administrators need controlled category and account visibility, and API consumers need
              readable contracts, examples, and status responses.
            </p>
            <ul className="feature-grid">
              {apiCapabilities.map(capability => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <div className="screenshot-stack" aria-label="Required FinTrack API screenshots">
              <figure className="case-study-image">
                <img
                  src="/images/Fintrack/Successful-login2.png"
                  alt="Successful FinTrack login request and JWT authentication response in Swagger"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Successful login and JWT response</strong>
                  FinTrack authenticates valid credentials and returns a JWT for accessing protected
                  API endpoints.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/Fintrack/Protected-account.png"
                  alt="Protected FinTrack account response with owner details and relational transactions in Swagger"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Protected account response with relational transactions</strong>
                  An authenticated account request returns the owner&apos;s account data and its
                  related transactions while preserving user-level access boundaries.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/Fintrack/Transfer-transaction-contract.png"
                  alt="FinTrack transfer transaction contract showing the request schema in Swagger"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Transfer transaction contract</strong>
                  The transfer schema connects source and destination accounts with an amount and
                  optional category while keeping the financial workflow explicit.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/Fintrack/Role-protected-category.png"
                  alt="FinTrack role-protected category mutation showing a forbidden response in Swagger"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Role-protected category mutation</strong>
                  Role-based authorization rejects category mutations from standard users and
                  reserves administrative operations for permitted accounts.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="article-section" id="engineering">
          <p className="article-number">04</p>
          <div>
            <h2>Engineering decisions centered on financial correctness</h2>
            <p>
              FinTrack&apos;s most important decisions are not the number of endpoints. They are the
              boundaries that prevent identity forgery, cross-user transfers, invalid financial
              states, and balance drift after a transaction changes.
            </p>
            <div className="decision-list">
              {engineeringDecisions.map(decision => (
                <article key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.copy}</p>
                </article>
              ))}
            </div>
            <div className="screenshot-stack">
              <figure className="case-study-image">
                <img
                  src="/images/Fintrack/balance-reversal.png"
                  alt="Passing automated FinTrack balance-reversal verification tests"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Automated balance-reversal verification</strong>
                  Automated tests verify that updating or deleting a transaction reverses its
                  previous financial effect before the account balance changes again.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/Fintrack/Cross-user.png"
                  alt="FinTrack cross-user ownership isolation returning a not found response"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Cross-user ownership isolation</strong>
                  Requests for resources owned by another user return a not-found response,
                  protecting private financial data from cross-account access.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="article-section" id="quality">
          <p className="article-number">05</p>
          <div>
            <h2>Quality demonstrated through executable security and regression evidence</h2>
            <p>
              Quality checks cover more than successful CRUD. Unit tests isolate balance
              calculations, end-to-end tests exercise authentication and authorization boundaries,
              and the Postman collection runs complete workflows with dynamic test data and cleanup.
            </p>
            <ul className="quality-metrics" aria-label="FinTrack API regression results">
              <li>
                <strong>73</strong>
                <span>requests in the latest Newman regression run</span>
              </li>
              <li>
                <strong>89</strong>
                <span>passing assertions</span>
              </li>
              <li>
                <strong>0</strong>
                <span>reported regression failures</span>
              </li>
              <li>
                <strong>5 / 60 s</strong>
                <span>login rate limit per client</span>
              </li>
            </ul>
            <h3 className="subsection-heading">Security cases that prove the boundary</h3>
            <p>
              E2E coverage includes registration, login, bcrypt hashing, missing or invalid tokens,
              forged ownership payloads, cross-user isolation, RBAC, administrator access, and 429
              throttling. Transaction tests also verify category compatibility, destination
              ownership, relational responses, and balance changes or reversals.
            </p>
            <h3 className="subsection-heading">Repeatable data and cleanup</h3>
            <p>
              Prisma seed data creates five users, ten accounts, seven categories, and twenty-four
              transactions. Postman generates dynamic identities for regression runs and removes its
              temporary resources afterward so the suite can be executed repeatedly without
              permanently changing demo accounts.
            </p>
            <div className="screenshot-stack">
              <figure className="case-study-image">
                <img
                  src="/images/Fintrack/Newman-report.png"
                  alt="FinTrack Newman HTML regression report with 73 requests and 89 assertions"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Newman HTML report — 73 requests and 89 assertions</strong>
                  The automated Postman regression run records complete request and assertion
                  coverage with its execution results in a shareable HTML report.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/Fintrack/Unit-and-E2E-test.png"
                  alt="Passing FinTrack unit and end-to-end test results"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Unit and E2E test results</strong>
                  Passing unit and end-to-end suites verify balance calculations, authentication,
                  ownership, authorization, validation, throttling, and transfer behavior.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/Fintrack/Railway-smoke-test.png"
                  alt="FinTrack Railway production smoke test showing the deployment hostname and a successful 200 response"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Railway deployment smoke-test evidence</strong>
                  The deployed public endpoint responds successfully with HTTP 200 from the Railway
                  production hostname without exposing credentials or authentication data.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="article-section" id="architecture">
          <p className="article-number">06</p>
          <div>
            <h2>A modular API backed by relational and database-level safeguards</h2>
            <p>
              Requests move from documented controllers through validation and security guards into
              domain services. Prisma provides typed relational access, while PostgreSQL protects
              relationships and financial invariants through foreign keys, indexes, and custom
              migration constraints.
            </p>
            <div className="entity-grid">
              {architectureLayers.map(([name, description]) => (
                <article key={name}>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="screenshot-stack">
              <figure className="case-study-image">
                <img
                  src="/images/Fintrack/erd.png"
                  alt="FinTrack entity relationship diagram for users, accounts, categories, and transactions"
                  loading="lazy"
                />
                <figcaption>
                  <strong>FinTrack ERD</strong>
                  The relational model connects users, accounts, categories, and transactions,
                  including source and destination account relationships for transfers.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/Fintrack/FinTrack-API-Architecture.png"
                  alt="FinTrack API architecture showing authentication, authorization, services, balance processing, Prisma, and PostgreSQL"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Authentication, authorization, service, and persistence flow</strong>
                  Requests pass through NestJS security and validation boundaries into controllers,
                  domain services, balance processing, Prisma, and PostgreSQL persistence.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="article-section" id="technology">
          <p className="article-number">07</p>
          <div>
            <h2>A backend stack selected for explicit contracts and dependable financial rules</h2>
            <p>
              The stack combines modular application structure, a relational source of truth,
              executable documentation, and repeatable verification. Each tool has a defined role in
              protecting data, clarifying the API contract, or making behavior easier to test.
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
                </section>
              ))}
            </div>
            <figure className="language-composition">
              <figcaption>
                <p className="problem-label">Repository language composition</p>
                <h3>How GitHub classifies the FinTrack repository</h3>
                <p>
                  GitHub reports a large HTML share because generated documentation and test-report
                  artifacts can contain substantially more markup than the application source.
                  FinTrack&apos;s backend implementation itself is written in TypeScript, with the
                  remaining files supporting configuration, migrations, and delivery.
                </p>
              </figcaption>
              <div
                className="language-composition-bar"
                role="img"
                aria-label="HTML 87.4 percent, TypeScript 11.5 percent, and other languages 1.1 percent">
                <span className="language-html" style={{ width: '87.4%' }} />
                <span className="language-typescript" style={{ width: '11.5%' }} />
                <span className="language-other" style={{ width: '1.1%' }} />
              </div>
              <ul className="language-composition-legend">
                <li>
                  <span className="language-html" />
                  <strong>HTML</strong> 87.4%
                </li>
                <li>
                  <span className="language-typescript" />
                  <strong>TypeScript</strong> 11.5%
                </li>
                <li>
                  <span className="language-other" />
                  <strong>Other</strong> 1.1%
                </li>
              </ul>
              <p className="language-composition-note">
                These percentages describe the relative file content detected by GitHub. They do not
                measure application architecture, code quality, development effort, or the
                importance of each technology.
              </p>
            </figure>
          </div>
        </section>

        <section className="article-section" id="reflection">
          <p className="article-number">08</p>
          <div>
            <h2>What FinTrack strengthened in my backend engineering practice</h2>
            <p>
              FinTrack reinforced that authentication alone does not secure an API. Ownership must
              be derived from trusted identity, role checks must be explicit, unexpected fields must
              be rejected, passwords must remain outside responses, and database constraints must
              support the same rules enforced by services.
            </p>
            <p>
              It also showed the value of extracting calculation logic from infrastructure. A pure
              balance provider made transaction behavior easier to test and explain, while
              regression collections turned documentation into repeatable evidence rather than a
              static list of endpoints.
            </p>
            <h3 className="subsection-heading">Results &amp; Output</h3>
            <p>
              The completed output is a deployed personal-finance API with JWT authentication,
              role-based access, ownership-isolated accounts and transactions, controlled category
              management, and balance-safe income, expense, and transfer workflows. Its Swagger
              interface exposes the API contract for review, while Railway provides a live
              environment for exercising the documented behavior.
            </p>
            <p>
              The latest Newman regression run completed 73 requests and 89 assertions with zero
              reported failures. Unit, end-to-end, and API workflow coverage provide repeatable
              evidence for authentication, authorization, validation, balance changes and reversals,
              database constraints, and cleanup—making the result verifiable beyond the endpoint
              documentation alone.
            </p>
            <h3 className="subsection-heading">Future improvements</h3>
            <p>
              The current JWT flow does not yet provide refresh-token rotation or revocation, and
              throttling uses in-memory storage. A production-scale next step would add short-lived
              access tokens with refresh and revocation controls, use Redis-backed distributed rate
              limits, and build a frontend dashboard for cash-flow visualization and budgeting.
            </p>
            <div className="problem-callout closing-statement">
              <p className="problem-label">Closing perspective</p>
              <p>
                I design backend systems so that business rules, security boundaries, and test
                evidence remain as clear as the endpoints they support.
              </p>
            </div>
          </div>
        </section>

        <footer className="article-footer">
          <div>
            <p>Explore the complete FinTrack API contract.</p>
            <div className="demo-access">
              <p>To try the application, use one of the demo accounts below:</p>
              <dl>
                <div>
                  <dt>Admin</dt>
                  <dd>
                    <strong>Email:</strong> alya@example.com · <strong>Password:</strong>{' '}
                    Fintrack123
                  </dd>
                </div>
                <div>
                  <dt>User Demo</dt>
                  <dd>
                    <strong>Email:</strong> user@fintech.local · <strong>Password:</strong> User1234
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <a
            href="https://milestone-4-ai-novanx-production.up.railway.app/docs"
            target="_blank"
            rel="noreferrer">
            Open Swagger Documentation ↗
          </a>
        </footer>
      </main>
    </div>
  </div>
);

export default FinTrackPage;
