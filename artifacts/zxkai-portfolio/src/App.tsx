import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDownRight, ArrowUpRight, ArrowUp, MessageCircle, Send } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const portfolioSlots = [
  {
    id: 'tnc-courses',
    index: '01',
    label: 'Nursing courses',
    name: 'TNC Nursing Courses',
    description: 'Courses for NORCET, AIIMS, CHO, and nursing exams.',
    href: 'https://courses.tncnursing.site',
    logo: '/logos/tnc-courses.svg',
    logoAlt: 'TNC Nursing emblem',
  },
  {
    id: 'tnc-test-series',
    index: '02',
    label: 'Test series',
    name: 'TNC Nursing Test Series',
    description: 'Full-length nursing mock tests with solutions and results.',
    href: 'https://test.tncnursing.site/',
    logo: '/logos/tnc-test-series.png',
    logoAlt: 'Test Sagar logo',
  },
  {
    id: 'nprep',
    index: '03',
    label: 'Study platform',
    name: 'NPrep',
    description: 'Lectures, notes, PYQs, and test series in one place.',
    href: 'https://nprep.site/',
    logo: '/logos/nprep-logo.png',
    logoAlt: 'NPrep logo',
  },
];

const upcomingApps = [
  { name: 'Nursing Next Live', shortName: 'NNL' },
  { name: 'Nursing Cortex' },
  { name: 'Testbook' },
  { name: 'JINC Nursing' },
  { name: 'Vidyagram' },
  { name: 'Utkarsh' },
];

function Home() {
  return (
    <main id="top" className="page-shell">
      <header className="topbar">
        <div className="topbar-inner mx-auto flex w-[calc(100%-40px)] max-w-[1320px] items-center justify-between py-5 md:w-[calc(100%-96px)]">
          <a className="footer-brand topbar-brand" href="#top" aria-label="ZXKAI I home" data-testid="link-home">
            ZXKAI I<span className="text-[#f77e61]">.</span>
          </a>
          <nav aria-label="Main navigation" className="topbar-nav flex items-center gap-5 sm:gap-9">
            <a className="text-link text-xs sm:text-sm" href="#work" data-testid="link-work">The apps</a>
            <a className="text-link text-xs sm:text-sm" href="#next" data-testid="link-up-next">Up next</a>
            <a className="button-primary !px-4 !py-2.5 !text-xs sm:!px-5 sm:!py-3 sm:!text-sm" href="#community" data-testid="link-community">
              <span className="community-label-long">Find the community</span>
              <span className="community-label-short">Community</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy-block">
            <p className="eyebrow mono flex items-center gap-3"><span className="status-dot" />Independent creator / digital things</p>
            <h1 id="hero-title"><span>Ideas</span><span className="outline-word">made</span><span>playable.</span></h1>
            <p className="hero-copy">
              I’m <strong>ZXKAI I</strong> — making little digital worlds, useful apps, and the details that make them feel alive.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#work" data-testid="link-explore-apps">
                Explore the apps <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <a className="text-link" href="#community" data-testid="link-say-hello">
                Come say hello <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="A floating, sculptural ZX monogram" role="img">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <span className="spark spark-a" aria-hidden="true">+</span>
            <span className="spark spark-b" aria-hidden="true">+</span>
            <div className="hero-disc"><span className="disc-symbol">ZX</span></div>
            <span className="float-chip chip-top mono">MADE TO BE USED</span>
            <span className="float-chip chip-bottom mono">SMALL IDEAS / BIG FEELING</span>
          </div>
        </div>
        <div className="hero-footnote mono"><span className="status-dot" />CURRENTLY MAKING / MORE SOON</div>
      </section>

      <div className="ticker" aria-label="Independent apps, curious ideas, made by ZXKAI I">
        <div className="ticker-track" aria-hidden="true">
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>INDEPENDENT APPS <b>×</b> CURIOUS IDEAS <b>×</b> MADE BY ZXKAI I <b>×</b></span>
          ))}
        </div>
      </div>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="work-head">
          <div className="work-head-copy">
            <p className="section-kicker eyebrow mono">Nursing tools / 001—003</p>
            <h2 id="work-title" className="section-heading">Made for the<br />next exam.</h2>
          </div>
          <p className="section-intro">Three places to learn, practise, and prepare for nursing exams.</p>
        </div>

        <div className="work-grid">
          {portfolioSlots.map((slot) => (
            <article className="work-card" key={slot.id} data-testid={`card-app-${slot.id}`}>
              <div className="work-art">
                <span className="art-stamp mono">{slot.label}</span>
                <div className="app-logo-frame">
                  <img src={slot.logo} alt={slot.logoAlt} />
                </div>
                <div className="art-floor" />
              </div>
              <div className="work-meta">
                <div>
                  <h3 className="work-title">{slot.name}</h3>
                  <p className="app-description">{slot.description}</p>
                  <a
                    className="app-open"
                    href={slot.href}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`link-app-${slot.id}`}
                  >
                    Open app <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
                <span className="card-index">{slot.index}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="up-next" id="next" aria-labelledby="next-title">
        <div className="up-next-inner">
          <div className="next-ticket" aria-label="Six upcoming nursing apps">
            <span className="ticket-label">ON THE HORIZON / COMING UP</span>
            <span className="ticket-big">NEXT<br />WAVE</span>
            <span className="ticket-foot mono">6 NURSING PROJECTS</span>
          </div>
          <div className="next-copy">
            <p className="section-kicker eyebrow mono">More is on the way</p>
            <h2 className="section-heading" id="next-title">The next wave<br />is taking shape.</h2>
            <p>Upcoming nursing learning projects from ZXKAI I.</p>
            <ul className="upcoming-apps" data-testid="list-upcoming-apps">
              {upcomingApps.map((app, index) => (
                <li className="upcoming-app" key={app.name} data-testid={`upcoming-app-${index + 1}`}>
                  <span className="upcoming-index mono">{String(index + 1).padStart(2, '0')}</span>
                  <span className="upcoming-name">{app.name}</span>
                  {app.shortName && <span className="upcoming-short mono">{app.shortName}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="community" id="community" aria-labelledby="community-title">
        <div className="community-top">
          <div>
            <p className="section-kicker eyebrow mono">Stay in the loop</p>
            <h2 className="section-heading" id="community-title">Good things are<br />better shared.</h2>
          </div>
          <p className="section-intro">Get closer to the process, hear when something new drops, and help shape what comes next.</p>
        </div>
        <div className="community-grid">
          <article className="community-card telegram">
            <div className="community-icon" aria-hidden="true"><Send size={21} /></div>
            <div>
              <h3 className="community-title">Telegram</h3>
              <div className="community-bottom">
                <p>Join the free nursing test series channel.</p>
                <a
                  className="button-join"
                  href="https://t.me/tnc_test_series_free"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-telegram"
                >
                  Join Telegram <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
          <article className="community-card whatsapp">
            <div className="community-icon" aria-hidden="true"><MessageCircle size={21} /></div>
            <div>
              <h3 className="community-title">WhatsApp</h3>
              <div className="community-bottom">
                <p>Follow the Zxkai channel on WhatsApp.</p>
                <a
                  className="button-join"
                  href="https://whatsapp.com/channel/0029Vb8nbcJA2pL6dbzeUs3Y"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-whatsapp"
                >
                  Follow channel <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="#top" data-testid="link-footer-home">ZXKAI I<span className="text-[#f77e61]">.</span></a>
        <span className="mono">INDEPENDENTLY MADE / ALWAYS IN PROGRESS</span>
        <a className="back-top" href="#top" data-testid="link-back-to-top">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
