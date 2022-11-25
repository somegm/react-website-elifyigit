import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18next.js'


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div>Loading ~~</div>)}>
    <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
