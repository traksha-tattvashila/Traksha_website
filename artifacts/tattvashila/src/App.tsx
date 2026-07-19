import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";

// HomePage is loaded eagerly — it is the entry point and most visited route.
// All other pages are lazy-loaded for bundle optimisation.
import HomePage from "./pages/HomePage";

const AboutPage             = lazy(() => import("./pages/AboutPage"));
const ContactPage           = lazy(() => import("./pages/ContactPage"));
const OriginPage            = lazy(() => import("./pages/OriginPage"));
const NotesIndexPage        = lazy(() => import("./pages/NotesIndexPage"));
const NotePage              = lazy(() => import("./pages/NotePage"));
const PhilosophyPage        = lazy(() => import("./pages/PhilosophyPage"));
const ArchivePage           = lazy(() => import("./pages/ArchivePage"));
const GranthalayaEntryPage  = lazy(() => import("./pages/GranthalayaEntryPage"));
const GranthaCataloguePage  = lazy(() => import("./pages/GranthaCataloguePage"));
const GranthaDetailPage     = lazy(() => import("./pages/GranthaDetailPage"));
const GranthaFrontispiecePage = lazy(() => import("./pages/GranthaFrontispiecePage"));
const ManuscriptRoute       = lazy(() => import("./pages/ManuscriptRoute"));
const NotFound              = lazy(() => import("./pages/not-found"));

/** Minimal bone-coloured shell shown while a lazy page chunk loads. */
function PageShell() {
  return <div className="min-h-screen bg-bone" aria-hidden="true" />;
}

function Router() {
  return (
    <Suspense fallback={<PageShell />}>
      <Switch>
        <Route path="/"                           component={HomePage}                />
        <Route path="/about"                      component={AboutPage}               />
        <Route path="/contact"                    component={ContactPage}             />
        <Route path="/origin"                     component={OriginPage}              />
        <Route path="/notes"                      component={NotesIndexPage}          />
        <Route path="/notes/:slug"                component={NotePage}                />
        <Route path="/philosophy"                 component={PhilosophyPage}          />
        <Route path="/archive"                    component={ArchivePage}             />

        {/* ── Granthālaya — staged manuscript flow ── */}
        {/* Order matters: more specific segments precede the :slug catch. */}
        <Route path="/granthalaya"                component={GranthalayaEntryPage}    />
        <Route path="/granthalaya/catalogue"      component={GranthaCataloguePage}    />
        <Route path="/granthalaya/:slug/enter"    component={GranthaFrontispiecePage} />
        <Route path="/granthalaya/:slug/:lang"    component={ManuscriptRoute}         />
        <Route path="/granthalaya/:slug"          component={GranthaDetailPage}       />

        <Route                                    component={NotFound}                />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
