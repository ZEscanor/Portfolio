import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';


export const Nav = styled.nav `
background: black;
height: 80px;
display:flex;
justify-content:space-between;
padding: 0.5rem calc((100vw-1000px) / 2)
z-index 10;
`
export const NavLink = styled(Link)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding-right: 10px;
width:100%
height: 100%;
cursor: pointer;
`
export const Bars = styled(FaBars)`
display:none;
color: white;

@media screen and (max-width: 700px){
    display: block;
    position: absolute;
    top:0;
    right: 0;
    transform: translate(-100,75%);
    font-size: 1.8rem;
    cursor: pointer

}
`
export const NavMenu = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: 700px){
    display:none;
}
`