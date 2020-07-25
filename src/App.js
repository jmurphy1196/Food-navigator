import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Test from './component/Test';
import Navbar from './component/Navbar';
import ReactCenter from 'react-center';


const client = new ApolloClient({
    uri: "http://localhost:1337/graphql"
  });



class App extends Component {
 
  constructor(props){
    super(props);
  }


 render() {
   
  
  return (
      <React.Fragment>
        <Navbar />

        <ApolloProvider client={client}>
             <div className='container'>
              <ReactCenter>
 
                 <div className='row  my-2 mx-auto p-1'>
                 <h2 className='titleo'>Tuolumne Food Navigator</h2>
                 </div>
                 </ReactCenter>


             </div>

          </ApolloProvider>

      </React.Fragment>
  );
}

}

export default App;
