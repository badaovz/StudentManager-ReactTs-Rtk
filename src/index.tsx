import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, history } from './app/store';
import App from './App';
import './index.css';
import { CssBaseline } from '@mui/material';
import { HistoryRouter as Router} from 'redux-first-history/rr6';

function emitComment(id: number) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `content of comment ${id}`
      })
    )
  }, 2000)

}

emitComment(1);
emitComment(2);
emitComment(3);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <CssBaseline>
            <App />
        </CssBaseline>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

