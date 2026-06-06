import { Switch, Route, Router as WouterRouter } from "wouter";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotesIndexPage from "./pages/NotesIndexPage";
import NotePage from "./pages/NotePage";
import PhilosophyPage from "./pages/PhilosophyPage";
import ArchivePage from "./pages/ArchivePage";
import GranthalayaEntryPage from "./pages/GranthalayaEntryPage";
import GranthaCataloguePage from "./pages/GranthaCataloguePage";
import GranthaDetailPage from "./pages/GranthaDetailPage";
import GranthaFrontispiecePage from "./pages/GranthaFrontispiecePage";
import ManuscriptRoute from "./pages/ManuscriptRoute";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/"                           component={HomePage}                />
      <Route path="/about"                      component={AboutPage}               />
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
