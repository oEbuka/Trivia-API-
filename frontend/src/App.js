import React from 'react';
import Header from './components/Header';

import './stylesheets/App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const HOST =
  process.env.NODE_ENV === 'production'
    ? 'https://trivia-quizzing.herokuapp.com'
    : 'http://localhost:5000';

const App = () => (
  <div className="App">
    <Header />
  </div>
);

export default App;
