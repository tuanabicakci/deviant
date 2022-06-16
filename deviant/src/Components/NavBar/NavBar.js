import{ useState } from 'react';
import {  Link } from "react-router-dom";


import './NavBar.css'//importing the css file


{/*export const MenuItems = [
    {title : 'EXPLORE',  cName :"/explore"},
    {title : 'FORUMS', cName : "/forums"},
    {title : <i className="fa-solid fa-bell"></i>,  cName : "/notifications"},
    {title : <i className="fa-solid fa-pen-to-square"></i>,  cName : "/post"},
    {title : <i className="fa-solid fa-user"></i>,  cName : "/profile"}
]
*/}
function NavBar() {

        return (
            <nav className="NavBarItems">
                <h1 className="NavBarLogo">DEV<span>IANT</span> <i
                    className="fa-solid fa-gamepad"></i></h1>


                <ul className="nav-menu">
                    <li className="nav-links"><Link to="/home">HOME</Link></li>
                    <li className="nav-links"><Link to="/explore">EXPLORE</Link></li>
                    <li className="nav-links"><Link to="/forums">FORUMS</Link></li>
                    <li><div className="search"><input className="search-bar" type="text" placeholder={"Search..."}/></div></li>
                    <li className="nav-links"><Link to="/notifications"><i className="fa-solid fa-bell"></i></Link></li>
                    <li className="nav-links"><Link to="/post"><i className="fa-solid fa-pen-to-square"></i></Link></li>
                    <li className="nav-links"><Link to="profile"><i className="fa-solid fa-user"></i></Link></li>
                </ul>

                {/*
                <ul className='nav-menu'>
                    <li><input className="search-bar" type="text" placeholder={"Search..."}/></li>

                    {MenuItems.map((item, index) => {
                        return (
                            <li className="nav-links" key={index}>
                                <Link to={item.cName} >
                                    {item.title}
                                </Link>
                            </li>

                        )
                    })}

                </ul >*/}
            </nav>
        );


}

export default NavBar;
