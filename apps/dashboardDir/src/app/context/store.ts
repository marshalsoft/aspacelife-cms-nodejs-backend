'use client';
import { legacy_createStore as createStore } from 'redux';
import {userReducer} from './reducerActions';

export const store = createStore(userReducer);
