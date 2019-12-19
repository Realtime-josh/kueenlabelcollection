import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import AppRouter from './routers/AppRouter';
import 'react-toastify/dist/ReactToastify.css';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'core-js/stable/map';
import 'core-js/stable/set';

const store = configureStore();
// provider makes the store available everywhere in the application
const App = (
  <Provider store={store}>
    <AppRouter />
    <ToastContainer autoClose={4000} pauseOnFocusLoss={false} position={toast.POSITION.TOP_CENTER}/>
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
