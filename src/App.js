import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent';
import Services from './components/ServicesComponent';
import Contact from './components/ContactComponent';
import FAQ from './components/FAQComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={Services} path='/services' />
          <Route component={Contact} path='/contact' />
          <Route component={FAQ} path='/faqs' />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
