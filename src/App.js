import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';

import { Query } from "react-apollo";
import gql from "graphql-tag";


import RestaurantList from './component/RestaurantList';
import Navbar from './component/Navbar';
import ReactCenter from 'react-center';
import {ShopConsumer} from './contex';
import {ApolloProvider} from 'react-apollo';

import Details from './component/Details';






class App extends Component {
 
  constructor(props){
    super(props);
  }


 render() {
   
  
  return (
      <React.Fragment>
        <Navbar />
      
      <Switch>
            
            <Route exact path='/' component={RestaurantList}/>
            <Route  path='/details' component={Details}/>
            


      </Switch>



      </React.Fragment>
  );
}

}

export default App;
