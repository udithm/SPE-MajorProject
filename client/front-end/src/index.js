import React from 'react';
// import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import './index.css';
import './style.css';
import './config/moment';
import ReactDOM from 'react-dom';
import store from './app/store';
import AppContainer from './components/App/Container';
import * as serviceWorker from './serviceWorker';


// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();