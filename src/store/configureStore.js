import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cssReducer from '../reducers/css';

export default () => createStore(
  combineReducers({
    css: cssReducer,     
}), applyMiddleware(thunk));

