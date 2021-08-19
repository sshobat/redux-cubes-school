import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//redux imports
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import thunk from 'redux-thunk';

//kada ima više argumenata mora compose
const composedEnhancer = compose(
                          applyMiddleware(thunk),
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                        )

const store = createStore(
  reducer,
  composedEnhancer
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();