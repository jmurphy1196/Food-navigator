import React, { Component } from 'react';

const ShopContext = React.createContext();

 class ShopProvider extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: 'tuolumne food nav'
        }
    }
    
    render() {
        return (
           <ShopContext.Provider value={{
               ...this.state
           }}>

            {this.props.children}
           </ShopContext.Provider>>
        )
    }
}


const ShopConsumer = ShopContext.Consumer;

export {ShopProvider, ShopConsumer};