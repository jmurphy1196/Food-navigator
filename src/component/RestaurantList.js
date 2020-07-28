
import React from 'react';


import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from 'styled-components';
import Restaurant from './Restaurant';
import {ShopConsumer} from '../contex';


const RestaurantList = () => (
    <Query
      query={gql`
        {
            restaurants {
            id
            desc
            name
            img {
                url
            }
            address
            menu
            hours_of_operation
            map
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) {
            return (<Loader> <i class="fa fa-spinner" aria-hidden="true"></i></Loader>)
        }
      if (error) {return <p>error {console.log(error)} :(</p>;}
        else {
              
            return (

                    <ShopConsumer>
                        {(value) => {
                            if(value.input == ''){
                                return (
                                    <div className='row my-2 p-1'>
                                    {data.restaurants.map(el => {
                                    return (<Restaurant name={el.name} key={el.id} data={el}/>)
                                    })}
                              </div>
                                )
                            } else {
                                let newData = data.restaurants.filter((item) => {
                                    if(item.name.includes(value.input)) {
                                        return item;
                                    }
                                });
                               if(newData.length > 0){
                                return (
                                    <div className='container'>

                                    
                                    <div className='row my-2 mx-auto '>
                                    {newData.map(el => {
                                    return (<Restaurant name={el.name} key={el.id} data={el}/>)
                                    })}
                              </div>
                              </div>
                                )    
                               } else {  return (<div>Search result not found :(</div>)  }
                            }
                        }}
                    </ShopConsumer>
            )
        }
     
      }}
    </Query>
  );
  export default RestaurantList;

  const Loader = styled.div`
        position: fixed;
        width: 100vw;
        height: 100vh;
        border-style: solid;
        border-color: black;
        
        i{
            position: absolute;
            left: 50vw;
            top: 25vh;
            font-size: 4rem;
            animation-name: spinner;
            animation-duration: 1.2s;
            animation-iteration-count: infinite;
        }

        @keyframes spinner {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
  `;