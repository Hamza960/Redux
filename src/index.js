import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import patientsReducer from './features/Patients';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
  key : 'root',
  storage,
  blackist : ['patientsReducer']
}

const persistedReducer = persistReducer(persistConfig, patientsReducer)

const store = configureStore({
  reducer: {
    patients : persistedReducer,
  }
})

export const persistor = persistStore(store) 



ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
