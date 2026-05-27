import { Switch, Route, Router as WouterRouter } from "wouter";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotesIndexPage from "./pages/NotesIndexPage";
import NotePage from "./pages/NotePage";
import PhilosophyPage from "./pages/PhilosophyPage";
import ArchivePage from "./pages/ArchivePage";
import GranthalayanPage from "./pages/GranthalayanPage";
import TattvaprashnaPage from "./pages/TattvaprashnaPage";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/"                                component={HomePage}          />
      <Route path="/about"                           component={AboutPage}         />
      <Route path="/notes"                           component={NotesIndexPage}    />
      <Route path="/notes/:slug"                     component={NotePage}          />
      <Route path="/philosophy"                      component={PhilosophyPage}    />
      <Route path="/archive"                         component={ArchivePage}       />
      <Route path="/granthalaya"                     component={GranthalayanPage}  />
      <Route path="/granthalaya/tattvaprashna"       component={TattvaprashnaPage} />
      <Route                                         component={NotFound}          />
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
