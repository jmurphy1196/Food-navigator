import React from 'react';

import styled from 'styled-components';
import {ShopConsumer} from '../contex';
import ReactCenter from 'react-center';
import ReactMarkdown from 'react-markdown';

var parse = require('html-react-parser');
export default function Details() {

    let day = new Date();
    day = day.getDay(); //used for bolding day shop is currently open
    return (
            <DeatilsWrapper>
                       <ShopConsumer>
            {(value) => {
                
                const {id, name, address, img, hours_of_operation, menu, map} = value.currentDetails;
                
                 const imgUrl =  img[0].url;
               
                   let hours = hours_of_operation.split(' ') //split the days and hours seperate from eachother, example: 'monday: 12-10pm becomes [monday:, 12-10] 

            
                switch(day){
                    case (1): hours[0] = hours[0].bold(); hours[1] = hours[1].bold(); break;
                    case (2): hours[2] = hours[2].bold(); hours[3] = hours[3].bold(); break;
                    case (3): hours[4] = hours[4].bold(); hours[5] = hours[5].bold(); break;
                    case (4): hours[6] = hours[6].bold(); hours[7] = hours[7].bold(); break;
                    case (5): hours[8] = hours[8].bold(); hours[9] = hours[9].bold(); break;
                    case (6): hours[10] = hours[10].bold(); hours[11] = hours[11].bold(); break; 
                    case (7): hours[12] = hours[12].bold(); hours[13] = hours[13].bold(); break;
                } 
          
                
                 
                
                return (
                    <div className='container py-5'>
                        <div className='row'>
                                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                    <h3 className='text-capitalize'>{name}</h3>
                                </div>
                        </div>

                        <div className='row'>
                            <div className='col-10 mx-auto text-center text-slanted text-blue my-5 ml-3 '>
                                    <img src={imgUrl} className='img-fluid' alt='product'/>
                            </div>

                            <div className='col-10 mx-auto col-md-6 my-3 text-capitalize first-col'>
                <h4>Address: </h4>  {parse(map)}
                                    <h4>Hours of operation: </h4> {hours_of_operation !== null ? <><p>{parse(hours[0])} {parse(hours[1])} </p> <p>{parse(hours[2])} {parse(hours[3])} </p> <p>{parse(hours[4])} {parse(hours[5])} </p> <p>{parse(hours[6])} {parse(hours[7])} </p> <p>{parse(hours[8])} {parse(hours[9])} </p> <p>{parse(hours[10])} {parse(hours[11])} </p> <p>{parse(hours[12])} {parse(hours[13])} </p></> : <p>error</p>}
                            </div>

                            <div className='col-10 mx-auto col-md-6 my-3 first-col'>
                                    <h4>Menu: </h4> <span><ReactMarkdown source={menu}/></span>
                            </div>
                           

                        </div>


                    </div>
                )
            }}
        </ShopConsumer>
            </DeatilsWrapper>
    )
}



const DeatilsWrapper = styled.div`
            img{
                max-width: 340px;
                max-height: 300px;
            }

            .first-col:hover{
                border: 0.04rem solid rgba(0,0,0,0.2);
                box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
            }
`;