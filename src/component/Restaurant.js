import React from 'react'
import styled from 'styled-components';
import {ShopConsumer} from '../contex';
import ReactCenter from 'react-center';
import {Link} from 'react-router-dom';
export default function Restaurant(props) {
    const img = props.data.img[0].url; //img url used for src
  
    return (
        <RestaurantWrapper className='col-9 mx-auto col-md-6 col-lg-4 my-3'>
           
             <ShopConsumer>
                    {(value) => {
                        return (
                            <div className='card' onClick={() => value.getDetails(props.data.id, props.name, props.data.address, props.data.img, props.data.hours_of_operation, props.data.menu, props.data.map)}>
                            <h4 className='rest-name'>{props.name}</h4>

              
                         <ReactCenter>   <Link to='/details' >
                           
                                <div className='img-container p-5'>
                                <img src={img} className='card-img-top'/>
                            </div>
                          
                           </Link>
                           </ReactCenter>
                  
                <div className='card-footer d-flex justify-content-between'>
        
                   <h5 className='text-blue font-italic mb-0 text-center mx-auto'>{props.data.address}</h5> 
                        </div>
            </div>
                  )
                }}
            </ShopConsumer>

        </RestaurantWrapper>
        
    )
}

const RestaurantWrapper = styled.div`
     .card{
            border-color: rgba(0,0,0,0.1);
            transition: all 0.2s linear;
        }
        .card-footer{
            background: transparent;
            border-top: transparent;
            transition: all 0.5s linear;
            
        }
        &:hover{
            .card{
                border: 0.04rem solid rgba(0,0,0,0.2);
                box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);
                
            }
            .card-footer{
                background: rgba(247, 247, 247);
            }
        }
        .img-container{
            position: relative;
            overflow: hidden;
            
            
        }
        .card-img-top{
                transition: all 0.2s linear;
        }
        .img-container:hover .card-img-top{
                transform: scale(1.2);
        }

        img{
            width: 250px;
            height: 175px;
        }
       
      

   

`;