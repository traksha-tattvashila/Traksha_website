import { Switch, Route, Router as WouterRouter } from "wouter";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotesIndexPage from "./pages/NotesIndexPage";
import NotePage from "./pages/NotePage";
import PhilosophyPage from "./pages/PhilosophyPage";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/notes" component={NotesIndexPage} />
      <Route path="/notes/:slug" component={NotePage} />
      <Route path="/philosophy" component={PhilosophyPage} />
      <Route component={NotFound} />
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
