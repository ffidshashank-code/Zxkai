import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDownRight, ArrowUpRight, ArrowUp, Radio, Send } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

// Replace these editable content slots once the real app names, logo files,
// descriptions, and destination URLs have been supplied.
const portfolioSlots = [
  { id: 'app-one', index: '01', glyph: 'A', colorLabel: 'mint studio' },
  { id: 'app-two', index: '02', glyph: 'B', colorLabel: 'coral studio' },
  { id: 'app-three', index: '03', glyph: 'C', colorLabel: 'lilac studio' },
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
            <p className="section-kicker eyebrow mono">A little collection / 001—003</p>
            <h2 id="work-title" className="section-heading">Things I’ve<br />put into the world.</h2>
          </div>
          <p className="section-intro">A home for my apps, experiments, and useful oddities. The shelves are ready; the app details are waiting for their final labels.</p>
        </div>

        <div className="work-grid">
          {portfolioSlots.map((slot) => (
            <article className="work-card" key={slot.id} data-testid={`card-app-${slot.id}`}>
              <div className="work-art" role="img" aria-label={`Decorative ${slot.colorLabel} placeholder app mark`}>
                <span className="art-stamp mono">APP MARK / TO REPLACE</span>
                <div className="app-glyph" aria-hidden="true">{slot.glyph}</div>
                <div className="art-floor" />
              </div>
              <div className="work-meta">
                <div>
                  <h3 className="work-title">[App name goes here]</h3>
                  <p className="work-placeholder"><i aria-hidden="true" />Add the app name, short description, logo file, and live destination here.</p>
                </div>
                <span className="card-index">{slot.index}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="work-note">
          <strong>Content note:</strong> These are editable portfolio slots, not live app listings. Replace each title, description, and generated letter-mark with the supplied details; add an outbound link only when its real URL is known.
        </p>
      </section>

      <section className="up-next" id="next" aria-labelledby="next-title">
        <div className="up-next-inner">
          <div className="next-ticket" aria-label="Upcoming app placeholder artwork" role="img">
            <span className="ticket-label">IN THE WORKSHOP / COMING UP</span>
            <span className="ticket-big">NEXT<br />THING</span>
            <span className="ticket-foot mono">NAME + DETAILS TO COME</span>
          </div>
          <div className="next-copy">
            <p className="section-kicker eyebrow mono">A new idea is taking shape</p>
            <h2 className="section-heading" id="next-title">One more<br />thing is brewing.</h2>
            <p>The next app is still under wraps. Its name, what it does, and when it lands will go here as soon as those details are ready to share.</p>
            <span className="editable-flag"><span className="status-dot" />Upcoming app details pending</span>
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
                <p>Community invite link will be added here.</p>
                <button className="button-disabled" type="button" disabled aria-label="Telegram invite link not provided yet" data-testid="button-telegram-pending">
                  LINK TO BE ADDED
                </button>
              </div>
            </div>
          </article>
          <article className="community-card whatsapp">
            <div className="community-icon" aria-hidden="true"><Radio size={21} /></div>
            <div>
              <h3 className="community-title">WhatsApp</h3>
              <div className="community-bottom">
                <p>Community invite link will be added here.</p>
                <button className="button-disabled" type="button" disabled aria-label="WhatsApp invite link not provided yet" data-testid="button-whatsapp-pending">
                  LINK TO BE ADDED
                </button>
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
