import React from 'react'
import './App.css';
import './index.css'
//components
import { Route, Link, Switch } from "wouter";
import Header from './components/Header/Header'
//context
import { HelmetProvider } from 'react-helmet-async';
import { GifsContextProvider } from './context/gifsContext'
import { UserContextProvider } from './context/userContext';
//pages
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import SingleGif from './pages/SingleGif/SingleGif';
import LoginForm from './pages/Forms/LoginForm';
import RegisterForm from './pages/Forms/RegisterForm';
import Favorites from './pages/Favorites/Favorites';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <HelmetProvider>
      <UserContextProvider>
        <div className="App">
          <Header />
          <Link to='/'><h1>GifGif</h1></Link>
          <GifsContextProvider>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/search/:keyword/:rating?" component={SearchResults} />
              <Route path="/gif/:id" component={SingleGif} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/favorites" component={Favorites} />
              <Route component={NotFound} />
            </Switch>
          </GifsContextProvider>
        </div>
      </UserContextProvider>
    </HelmetProvider>
  );
}

export default App;
