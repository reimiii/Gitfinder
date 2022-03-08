import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Footer } from './components';
import { Home, About, NotFound } from './pages';
import { GithubProvider } from './context/github/GithubContext';

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />

          <main className="container mx-auto px-3 pb-12">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/notfound' component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </main>

          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
