import React, { Component } from 'react';
import ApolloClient from "apollo-boost";







const client = new ApolloClient({
    uri: "https://second-project-284802.wm.r.appspot.com/graphql" //change according to where server is located
  }); 

const ShopContext = React.createContext(); 

 class ShopProvider extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: 'tuolumne food nav',
            mainClient: client,
            input: '',
            currentDetails: { id: 20000, name: 'err', img: [{url: 'tests'}], hours_of_operation: 'Monday: 6:30AM-1AM Tuesday: 6:30AM-1AM Wednesday: 6:30AM-1AM Thursday: 6:30AM-1AM Friday: 6:30AM-1AM Saturday: 6:30AM-1AM Sunday: 6:30AM-1AM', map: 'err'  }
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

    getDetails = (id, name, address, img, hours_of_operation, menu, map) => {
            this.setState(() => {

                return {
                    currentDetails: {
                        id,
                        name,
                        address,
                        img,
                        hours_of_operation,
                        menu,
                        map
                    }
                }
            }, () => console.log(this.state));
    }
    
    render() {
        return (
           <ShopContext.Provider value={{
               ...this.state,
               getInput: this.getInput,
               getDetails: this.getDetails
           }}>

            {this.props.children}
           </ShopContext.Provider>
        )
    }
}


const ShopConsumer = ShopContext.Consumer;

export {ShopProvider, ShopConsumer};