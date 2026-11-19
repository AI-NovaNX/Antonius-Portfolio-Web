import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import './portfolio.css';
import './nexread.css';

const shopperFeatures = [
  'Responsive product discovery with search, category filters, and dedicated UI states',
  'Dynamic product details with persistent cart actions and quantity management',
  'Voucher claiming, free-shipping progress, and an authenticated checkout flow',
  'A searchable FAQ, promotions, About content, and authentication-aware navigation',
  'Protected administration for product search, creation, editing, and deletion',
  'Platzi API integration with bounded retries, request cancellation, and mock fallback data',
];

const engineeringDecisions = [
  {
    title: 'Protect sensitive routes at the application boundary',
    copy: 'The Next.js proxy redirects unauthenticated checkout and administrator requests before protected experiences are shown. The admin route adds a role check, while mutation handlers verify the current Platzi token again before forwarding product changes.',
  },
  {
    title: 'Retry reads without duplicating user actions',
    copy: 'Product reads receive one initial attempt and up to two bounded retries with increasing delays. Login, checkout, create, update, and delete operations are deliberately excluded because automatically repeating a mutation could create duplicate or misleading outcomes.',
  },
  {
    title: 'Keep the shopping journey stable across refreshes',
    copy: 'A reducer gives cart and voucher changes explicit actions, while localStorage restores cart contents, claimed vouchers, the safe authentication snapshot, and the selected product source. A hydration state prevents an incorrect empty-cart flash during restoration.',
  },
  {
    title: 'Choose rendering strategies by content behavior',
    copy: 'Static content is prerendered, interactive pages hydrate in the browser, protected behavior is enforced by the proxy, and JSON endpoints remain dynamic Route Handlers. This keeps the initial experience efficient without pretending every page has the same rendering needs.',
  },
];

const architectureLayers = [
  [
    'Storefront UI',
    'Next.js pages and reusable components present discovery, cart, checkout, and administration journeys.',
  ],
  [
    'Client state',
    'React Context and a reducer coordinate cart, voucher, notification, and hydration state across the application.',
  ],
  [
    'Route protection',
    'The Next.js proxy checks authentication for checkout and applies the additional admin-role boundary.',
  ],
  [
    'Internal API layer',
    'Authentication and product Route Handlers validate requests, manage sessions, and isolate the browser from upstream API details.',
  ],
  [
    'External and fallback data',
    'Platzi supplies product and authentication data; bounded read failures fall back to an in-memory mock source.',
  ],
  [
    'Browser persistence',
    'localStorage preserves non-sensitive cart, voucher, source-choice, and safe UI-session data between visits.',
  ],
];

const technologyGroups = [
  {
    name: 'Frontend',
    summary:
      'A responsive, component-based storefront built around clear interaction states and reusable interface patterns.',
    items: [
      {
        name: 'Next.js 16',
        icon: '/images/NexRead/icon-nextjs.svg',
        role: 'Application framework and App Router',
        reason:
          'File-based routes, layouts, Route Handlers, static prerendering, dynamic routes, and protected navigation can live within one coherent application structure.',
      },
      {
        name: 'React 19 and JavaScript',
        icon: '/images/NexRead/icon-react.svg',
        role: 'Interactive components and client state',
        reason:
          'React supports reusable product UI, event-driven shopping flows, Context state, reducers, memoization, effects, and request cleanup across the storefront.',
      },
      {
        name: 'Tailwind CSS 4',
        icon: '/images/NexRead/icon-tailwind.svg',
        role: 'Responsive design system',
        reason:
          'Utility-first styling made it practical to maintain consistent spacing, breakpoints, feedback states, and responsive layouts across customer and admin pages.',
      },
      {
        name: 'shadcn/ui and Radix UI',
        icon: '/images/NexRead/icon-shadcn.svg',
        role: 'Accessible UI primitives',
        reason:
          'Code-owned primitives provide a reliable foundation for tabs, sheets, forms, dialogs, and navigation while remaining fully customizable for the RevoShop identity.',
      },
      {
        name: 'React Hook Form',
        icon: '/images/NexRead/icon-react-hook-form.svg',
        role: 'Checkout and product forms',
        reason:
          'It manages shipping, payment, login, add-product, and edit-product inputs efficiently while keeping validation errors scoped to the correct form.',
      },
    ],
  },
  {
    name: 'Platform & Data',
    summary:
      'A browser-first commerce demo with protected server boundaries, resilient upstream access, and deployable production builds.',
    items: [
      {
        name: 'Next.js Route Handlers',
        icon: '/images/NexRead/icon-nextjs.svg',
        role: 'Authentication and product API boundary',
        reason:
          'Internal endpoints keep access tokens out of client code, validate product payloads, verify admin mutations, and translate upstream responses into controlled application behavior.',
      },
      {
        name: 'Platzi Fake Store API',
        icon: '/images/NexRead/icon-swagger.svg',
        role: 'Product catalog and authentication source',
        reason:
          'The external API supplies realistic products, categories, users, and authentication flows without requiring a dedicated database for this frontend-focused milestone.',
      },
      {
        name: 'React Context and Hooks',
        icon: '/images/NexRead/icon-react.svg',
        role: 'Shared state and performance control',
        reason:
          'Context, useReducer, useMemo, useCallback, and effects make cart actions explicit, share live state across routes, and avoid unnecessary recalculation or function recreation.',
      },
      {
        name: 'HttpOnly Cookies & localStorage',
        icon: '/images/NexRead/icon-jwt.svg',
        role: 'Secure session and durable UI state',
        reason:
          'The access token remains in a server-managed HttpOnly session cookie, while only non-sensitive shopping state and a safe profile snapshot are persisted for responsive client UI.',
      },
      {
        name: 'Vercel',
        icon: '/images/NexRead/icon-vercel.svg',
        role: 'Production deployment',
        reason:
          'Vercel provides a natural deployment target for the Next.js application and makes the production build available for realistic route, rendering, and API integration verification.',
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

const RevoShopPage = () => (
  <div className="portfolio-page nexread-page">
    <Helmet>
      <title>RevoShop — Next.js E-Commerce Case Study</title>
      <meta
        name="description"
        content="RevoShop case study: a resilient Next.js storefront with protected checkout, role-based product management, persistent cart state, and defensive API integration."
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
          <nav className="nexread-nav" aria-label="RevoShop article sections">
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
            From Product Discovery to Protected Checkout · Next.js E-Commerce Application
          </p>
          <div className="revoshop-hero-title">
            <span className="revoshop-header-logo" aria-hidden="true">
              <img src="/images/Revoshop/RevoshopLogo1.webp" alt="" />
            </span>
            <h1> - RevoShop</h1>
          </div>
          <p className="article-lead">
            A resilient storefront designed around complete shopping journeys.
          </p>
          <p>
            RevoShop is a single-vendor e-commerce application that connects product discovery, cart
            and voucher management, authenticated checkout, and role-protected product
            administration. I built it as a RevoU Full Stack Software Engineering milestone to
            demonstrate how modern Next.js architecture can support a small but realistic commerce
            experience.
          </p>
          <div className="article-actions">
            <a href="https://revoshop.ai-novanx.online/" target="_blank" rel="noreferrer">
              View Live Application ↗
            </a>
            <a
              className="secondary-action"
              href="https://github.com/Revou-FSSE-Feb26/milestone-3-AI-NovaNX"
              target="_blank"
              rel="noreferrer">
              View Source Code ↗
            </a>
          </div>
        </header>

        <figure className="nexread-preview">
          <img
            src="/images/official/Revoshop.png"
            alt="RevoShop storefront preview showing the modern online shopping interface"
          />
          <figcaption>
            RevoShop combines catalog discovery, persistent shopping state, and protected commerce
            workflows in a responsive Next.js interface.
          </figcaption>
        </figure>

        <section className="article-section" id="background">
          <p className="article-number">01</p>
          <div>
            <h2>Turning framework requirements into a believable product experience</h2>
            <p>
              The project began as a Next.js milestone, but I did not want the result to feel like a
              collection of disconnected framework demonstrations. The product needed a journey a
              shopper could understand: discover an item, evaluate it, manage a cart, claim a
              promotion, authenticate, and complete checkout.
            </p>
            <p>
              The main constraint was that the application depends on a shared third-party fake
              store API rather than a dedicated production database. That made resilience and honest
              feedback important. RevoShop therefore treats loading, unavailable data, protected
              routes, temporary mock changes, and upstream failures as visible product states rather
              than hiding them behind a happy-path demo.
            </p>
            <div className="problem-callout">
              <p className="problem-label">The product challenge</p>
              <p>
                How can a frontend-focused commerce demo feel complete and dependable when its
                catalog and authentication depend on an external shared API?
              </p>
            </div>
            <figure className="case-study-image">
              <img
                src="/images/Revoshop/Homepage-catalog-discovery.png"
                alt="RevoShop homepage showing the storefront navigation, product search, category discovery, populated product catalog, prices, and cart access"
                loading="lazy"
              />
              <figcaption>
                <strong>Homepage Catalog, Search, and Category Discovery</strong>
                The storefront brings product search, category exploration, pricing, and cart access
                into one clear discovery experience, helping shoppers move quickly from browsing to
                product evaluation.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="article-section" id="contribution">
          <p className="article-number">02</p>
          <div>
            <h2>Owning the storefront from interaction design to deployment</h2>
            <div className="problem-callout role-callout">
              <p className="problem-label">Role · Individual Next.js Developer</p>
              <p>
                I implemented RevoShop as an individual milestone project. My ownership covered the
                customer and administrator interfaces, route structure, state management, API
                integration, authentication flow, protected access, validation, resilience
                improvements, documentation, and Vercel deployment.
              </p>
            </div>
            <p>
              I translated the assignment requirements into reusable components and connected user
              journeys rather than page-specific code. Product cards, navigation, cart actions,
              forms, loading skeletons, success feedback, and error states were designed to behave
              consistently across the application.
            </p>
            <p>
              Team-leader feedback also became part of the engineering work. I added request
              cancellation, a bounded retry strategy, and mock fallback behavior, while keeping
              mutation requests outside automatic retry to avoid duplicate actions.
            </p>
          </div>
        </section>

        <section className="article-section" id="experience">
          <p className="article-number">03</p>
          <div>
            <h2>A complete journey for shoppers and product administrators</h2>
            <p>
              Visitors can move from search and category discovery into product evaluation, a
              persistent cart, voucher selection, and protected checkout. Administrators receive a
              separate product-management workflow with role-based access, source selection, CRUD
              forms, validation, and explicit feedback.
            </p>
            <ul className="feature-grid">
              {shopperFeatures.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div
              className="screenshot-stack"
              aria-label="Required RevoShop application screenshots">
              <figure className="case-study-image">
                <img
                  src="/images/Revoshop/Product-detail.png"
                  alt="RevoShop product detail page showing the product image, category, description, price, quantity controls, navigation, and add-to-cart action"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Product Detail and Add-to-Cart Action</strong>
                  Shoppers can review the product image, category, description, and price before
                  selecting a quantity and adding the item to their cart without losing the wider
                  shopping journey context.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/Revoshop/Cart-quantity-control.png"
                  alt="RevoShop cart showing selected products, quantity controls, line totals, voucher entry, shipping progress, and order summary"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Cart, Quantity Controls, Voucher, and Shipping Progress</strong>
                  Shoppers can adjust product quantities, review line totals, apply a voucher, and
                  track progress toward the shipping threshold before continuing to checkout.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/Revoshop/Checkout-and-place-order.png"
                  alt="RevoShop checkout page showing shipping information, payment details, order items, order summary, and the place-order action"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Checkout with Shipping, Payment, and Order Summary</strong>
                  The protected checkout journey brings shipping information, payment details,
                  selected items, and the final order total into one review step before the shopper
                  places the order.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/Revoshop/Checkout-processed.png"
                  alt="RevoShop checkout result showing that the customer order has been successfully processed"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Order Confirmation and Checkout Result</strong>
                  After the order is submitted, RevoShop provides immediate confirmation that the
                  checkout has been processed, giving the shopper a clear completion state and
                  confidence that the action succeeded.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/Revoshop/Voucher.png"
                  alt="RevoShop promotions page showing available vouchers, category navigation, offer details, and voucher claim actions"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Promotions and Voucher Claim Experience</strong>
                  Shoppers can explore available promotions, compare offer conditions, and claim a
                  voucher through a focused interaction that connects promotional discovery with the
                  cart and checkout journey.
                </figcaption>
              </figure>
              <figure className="case-study-image">
                <img
                  src="/images/Revoshop/Admin-dashboard.png"
                  alt="RevoShop administrator dashboard showing product search, data-source controls, product listings, and product management actions"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Admin Product Management Dashboard</strong>
                  Administrators can search the catalog, inspect its active data source, reload
                  product information, and move directly into add, edit, or delete workflows from
                  one operational view.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="article-section" id="engineering">
          <p className="article-number">04</p>
          <div>
            <h2>Engineering decisions that protect continuity and user trust</h2>
            <p>
              The core engineering work focused on what happens between screens: how authentication
              is restored, how protected routes respond, how stale network requests are cancelled,
              how a cart survives refreshes, and how the application behaves when the primary data
              source is temporarily unavailable.
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
                  src="/images/Revoshop/Login-page.png"
                  alt="RevoShop login page used to authenticate shoppers before they enter protected checkout and account routes"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Login and Protected-Route Redirection</strong>
                  RevoShop directs unauthenticated shoppers to a focused login experience before
                  allowing access to protected journeys such as checkout, then returns them to the
                  intended flow after authentication.
                </figcaption>
              </figure>
              <figure className="case-study-image revoshop-mobile-comparison">
                <div className="mobile-comparison-images">
                  <img
                    src="/images/Revoshop/mobile-menu-home.png"
                    alt="RevoShop responsive mobile storefront showing navigation, search, product cards, and cart access"
                    loading="lazy"
                  />
                  <img
                    src="/images/Revoshop/mobil-menu-open.png"
                    alt="RevoShop mobile storefront with its navigation sheet opened"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <strong>Mobile Storefront and Navigation Sheet</strong>
                  The mobile storefront preserves product discovery, search, and cart access within
                  a compact layout, while the navigation sheet exposes key destinations without
                  taking permanent space away from shopping content.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="article-section" id="quality">
          <p className="article-number">05</p>
          <div>
            <h2>Quality built into asynchronous and failure states</h2>
            <p>
              RevoShop treats reliability as visible interface behavior. Home, product detail, cart,
              and admin screens use layout-matched skeletons while data or persisted state is being
              restored. Empty, error, and not-found outcomes receive dedicated messages instead of
              leaving the interface blank or structurally unstable.
            </p>
            <ul className="quality-metrics" aria-label="RevoShop reliability implementation">
              <li>
                <strong>3</strong>
                <span>maximum attempts for eligible read requests</span>
              </li>
              <li>
                <strong>500 ms / 1 s</strong>
                <span>bounded increasing retry delays</span>
              </li>
              <li>
                <strong>4</strong>
                <span>primary surfaces with layout-matched skeletons</span>
              </li>
              <li>
                <strong>2</strong>
                <span>protected customer and administrator routes</span>
              </li>
            </ul>
            <h3 className="subsection-heading">Defensive data fetching</h3>
            <p>
              Fetching effects receive an AbortSignal and cancel obsolete requests during unmounts
              or dependency changes. Platzi read failures retry within a small fixed budget, then
              fall back to mock products or categories. Errors are presented only when neither the
              primary nor fallback source can provide usable data.
            </p>
            <h3 className="subsection-heading">Validation on both sides of the boundary</h3>
            <p>
              React Hook Form gives shoppers and administrators immediate field feedback, while
              product Route Handlers validate mutation payloads again on the server. Admin tokens
              are rechecked before POST, PUT, or DELETE requests are forwarded upstream.
            </p>
            <figure className="case-study-image">
              <img
                src="/images/Revoshop/Skeleton.png"
                alt="RevoShop product catalog displaying skeleton placeholders while product data is loading"
                loading="lazy"
              />
              <figcaption>
                <strong>Product Catalog Skeleton Loading State</strong>
                While product data is being fetched, RevoShop displays visible placeholders for the
                catalog heading, category filters, status panel, product images, and product
                details. This preserves the page structure, reduces layout movement, and reassures
                shoppers that the catalog is actively loading.
              </figcaption>
            </figure>
            <figure className="case-study-image">
              <img
                src="/images/Revoshop/Empty.png"
                alt="RevoShop catalog showing no products found for a search query while category filters remain available"
                loading="lazy"
              />
              <figcaption>
                <strong>Empty Product Search State</strong>
                When a query returns no matching products, RevoShop keeps the search term and
                category context visible, communicates that no results were found, and suggests
                trying another product name or category instead of leaving the shopper at a blank
                screen.
              </figcaption>
            </figure>
            <figure className="case-study-image">
              <img
                src="/images/Revoshop/validasi.png"
                alt="RevoShop login form displaying a required-field validation message when the password is missing"
                loading="lazy"
              />
              <figcaption>
                <strong>Required-Field Validation on Login</strong>
                RevoShop prevents an incomplete authentication request from being submitted and
                immediately identifies the missing password field. The inline browser feedback keeps
                the correction close to the affected input so users can recover without leaving the
                login form.
              </figcaption>
            </figure>
            <figure className="case-study-image">
              <img
                src="/images/Revoshop/success.png"
                alt="RevoShop shopping cart showing a successfully applied Payday voucher, product discount, updated total, and checkout action"
                loading="lazy"
              />
              <figcaption>
                <strong>Voucher Applied Successfully in the Cart</strong>
                RevoShop confirms the selected voucher inside the checkout summary, displays the
                discount as a separate line item, and recalculates the order total immediately. The
                shopper can verify the benefit before continuing to checkout or remove the voucher
                if needed.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="article-section" id="architecture">
          <p className="article-number">06</p>
          <div>
            <h2>A layered architecture around the browser, server boundary, and upstream API</h2>
            <p>
              RevoShop is frontend-focused, but it does not expose every responsibility directly to
              the browser. Next.js Route Handlers provide a controlled boundary for authentication
              and product mutations, the proxy enforces route access, and the UI consumes small data
              helpers rather than scattering upstream calls throughout components.
            </p>
            <div className="entity-grid">
              {architectureLayers.map(([name, description]) => (
                <article key={name}>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <figure className="case-study-image diagram-image revoshop-architecture-image">
              <a
                href="/images/Revoshop/RevoShop-Architecture.png"
                target="_blank"
                rel="noreferrer"
                aria-label="Open the RevoShop architecture diagram at full resolution">
                <img
                  src="/images/Revoshop/RevoShop-Architecture.png"
                  alt="RevoShop architecture diagram showing browser UI and React Context state, Next.js proxy and Route Handlers, HttpOnly session cookies, Platzi API requests, and mock-data fallback for failed reads"
                  width="1600"
                  height="780"
                  loading="lazy"
                />
              </a>
              <figcaption>
                <strong>RevoShop Request, Session, State, and Fallback Flow</strong>
                The storefront sends requests through Next.js Route Handlers before reaching the
                external Platzi API. HttpOnly cookies protect the session boundary, React Context
                and localStorage manage browser state, and mock data keeps read journeys available
                when the upstream API fails. Select the diagram to inspect every label at full
                resolution.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="article-section" id="technology">
          <p className="article-number">07</p>
          <div>
            <h2>A focused stack selected for modern commerce interactions</h2>
            <p>
              Each technology has a defined responsibility: Next.js structures rendering and server
              boundaries, React coordinates interactive state, reusable primitives keep the UI
              consistent, and Vercel provides a realistic production environment for the complete
              application.
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
                <h3>How the RevoShop codebase is distributed</h3>
                <p>
                  GitHub identifies JavaScript as the dominant language because it powers most of
                  the application components, data flows, state management, and commerce
                  interactions. TypeScript provides typed contracts in selected parts of the
                  project, while CSS supports the remaining custom presentation rules.
                </p>
              </figcaption>
              <div
                className="language-composition-bar"
                role="img"
                aria-label="JavaScript 96.2 percent, TypeScript 2.7 percent, and CSS 1.1 percent">
                <span className="language-js" style={{ width: '96.2%' }} />
                <span className="language-typescript" style={{ width: '2.7%' }} />
                <span className="language-css" style={{ width: '1.1%' }} />
              </div>
              <ul className="language-composition-legend">
                <li>
                  <span className="language-js" />
                  <strong>JavaScript</strong> 96.2%
                </li>
                <li>
                  <span className="language-typescript" />
                  <strong>TypeScript</strong> 2.7%
                </li>
                <li>
                  <span className="language-css" />
                  <strong>CSS</strong> 1.1%
                </li>
              </ul>
              <p className="language-composition-note">
                These percentages show the relative amount of repository content classified by
                GitHub. They do not measure code quality, feature importance, development effort, or
                the amount of styling supplied through Tailwind utility classes.
              </p>
            </figure>
          </div>
        </section>

        <section className="article-section" id="reflection">
          <p className="article-number">08</p>
          <div>
            <h2>What building RevoShop changed in my frontend practice</h2>
            <p>
              RevoShop reinforced that frontend engineering is not limited to presenting API data.
              It includes deciding where trust boundaries belong, preventing stale asynchronous work
              from updating the UI, restoring browser state without hydration confusion, and giving
              users a clear explanation when an external dependency is unavailable.
            </p>
            <p>
              The project also clarified how Next.js rendering models can coexist. A Client
              Component is not automatically a purely client-rendered page: static shells can still
              be built in advance and hydrated for interaction, while dynamic Route Handlers serve
              JSON and the proxy protects access-sensitive journeys.
            </p>
            <div className="problem-callout closing-statement">
              <p className="problem-label">Closing perspective</p>
              <p>
                I build commerce interfaces not only for the successful purchase, but also for the
                loading, authentication, recovery, and decision-making moments that earn a
                user&apos;s trust along the way.
              </p>
            </div>
          </div>
        </section>

        <footer className="article-footer">
          <div>
            <p>Explore the complete RevoShop shopping experience.</p>
            <div className="demo-access">
              <p>
                To explore the protected customer journey, including checkout, sign in with the demo
                account below.
              </p>
              <dl>
                <div>
                  <dt>Email</dt>
                  <dd>user@revoshop.local</dd>
                </div>
                <div>
                  <dt>Password</dt>
                  <dd>user123</dd>
                </div>
              </dl>
            </div>
          </div>
          <a href="https://revoshop.ai-novanx.online/" target="_blank" rel="noreferrer">
            Open RevoShop ↗
          </a>
        </footer>
      </main>
    </div>
  </div>
);

export default RevoShopPage;
