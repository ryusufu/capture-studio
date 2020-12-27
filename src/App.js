import AboutUs from './pages/AboutUs'
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import ContactUs from './components/ContactUs'
import OurWork from './components/OurWork'
import { Switch, Route } from 'react-router-dom'
import MovieDetail from './pages/MovieDetail'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>

        <Route exact path="/work">
          <OurWork />
        </Route>
        <Route>
          <MovieDetail path="/work/:id" />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
