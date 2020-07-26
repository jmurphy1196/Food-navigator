import React, { Component } from 'react';
import ApolloClient from "apollo-boost";







const client = new ApolloClient({
    uri: "http://localhost:1337/graphql"
  });

const ShopContext = React.createContext();

 class ShopProvider extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: 'tuolumne food nav',
            mainClient: client,
            input: ''
        }
    }

    getInput = (event) => {
        let myInput = event.target.value;
       
        this.setState(() => {

            return {
                input: myInput
            }
        }, () => console.log(this.state));
    }
    
    render() {
        return (
           <ShopContext.Provider value={{
               ...this.state,
               getInput: this.getInput
           }}>

            {this.props.children}
           </ShopContext.Provider>
        )
    }
}


const ShopConsumer = ShopContext.Consumer;

export {ShopProvider, ShopConsumer};