import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
       <NavWrapper className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>

       <div className='main_title'>
       <span className='title'>TuolFoodNav</span>
       </div>

       

        <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                       
                       <input type='text' placeholder='search...'/>
                        
                    </li>
                  
                </ul>

               

       </NavWrapper>
    )
}


const NavWrapper = styled.nav`
        background-color: black !important;

        .title{
            color: white;
            font-size: 1.2rem;
          
        }
        
    
        .nav-link{
            color: white !important;
            font-size: 1.3rem;
            text-transform: capitalize !important;
            transition: ease-out .5s;
            font-size: 1.5rem;
        }
        .nav-link:hover{
            transform: scale(1.1);
            cursor: pointer;
            
            
        }
        input {
            position: absolute;
            left: 25vw;
            width: 50vw;
            top: 4px;
            transition: ease-out .5s;
        }
        input:hover{
            transform: scale(1.1);
        }

`;