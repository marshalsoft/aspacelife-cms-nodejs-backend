'use client';
import { Provider } from 'react-redux';
import Login from "./components/LoginScreen/login";
import {store} from "./context/store";

export default function Home() {
  return ( <Provider store={store}>
  <Login />
  </Provider>);
}
