import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ShopProvider} from './contex';
import { BrowserRouter as Router } from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import {ShopConsumer} from './contex';




ReactDOM.render(
  <React.StrictMode>
   
   
    <ShopProvider>
      <ShopConsumer>
          {(value) => {
            return (   
               <ApolloProvider client={value.mainClient} >
              <Router>
                     <App />
              </Router>
              </ApolloProvider>)
          }}
      </ShopConsumer>
  
       
    </ShopProvider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
