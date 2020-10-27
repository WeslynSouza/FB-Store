import React from 'react';
import Routes from './routes';

import '../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
import '../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';
import './assets/styles/global.css';

function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
