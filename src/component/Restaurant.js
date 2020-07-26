import React from 'react'
import styled from 'styled-components';
import {ShopConsumer} from '../contex';
import ReactCenter from 'react-center';
import {Link} from 'react-router-dom';
export default function Restaurant(props) {
    const img = `http://localhost:1337${props.data.img[0].url}`;
    console.log(img)
    console.log(props.data);
    return (
        <RestaurantWrapper className='col-9 mx-auto col-md-6 col-lg-4 my-3'>
            <div className='card'>
                <h4 className='rest-name'>{props.name}</h4>

                <ShopConsumer>
                    {(value) => {
                        return (
                            <Link to='/details'>
                           <ReactCenter>
                                <div className='img-container p-5'>
                                <img src={img} className='card-img-top'/>
                            </div>
                           </ReactCenter>
                           </Link>
                        )
                    }}
                </ShopConsumer>
                <div className='card-footer d-flex justify-content-between'>
        
                   <h5 className='text-blue font-italic mb-0 text-center mx-auto'>{props.data.address}</h5> 
                        </div>
            </div>

        </RestaurantWrapper>
        
    )
}

const RestaurantWrapper = styled.div`
     .card{
            border-color: transparent;
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
                box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
                
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