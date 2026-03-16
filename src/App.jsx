import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import Login from './components/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Book Bank</h1>
          <SearchBar />
        </header>
        <nav>
          <Categories />
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            {/* Add more routes as needed */}
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;