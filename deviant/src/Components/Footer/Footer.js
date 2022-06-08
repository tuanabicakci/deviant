import React from 'react'
import{Link} from 'react-router-dom'
import "./Footer.css"

export const FooterItems=[
    {title:'Site Guidelines',to:'/site-guidelines'},
    {title:'Terms',to:'/terms'},
    {title:'Game API',to:'game-api'},
    {title:'Support',to:'/support'},
    {title:'Privacy',to:'/privacy'},
    {title:'Marketplace',to:'marketplace'},
    {title:'About',to:'/about'},
    {title:'Cookie Policy',to:'/cookie-policy'},
    {title:'Partner Program',to:'partner-program'},
]

function Footer(){
    return(
        <footer className="footer-container">

            <ul className="footer-menu">
                {FooterItems.map((item,index) =>{
                    return(
                        <li key={index}>
                            <Link className="footer-menu-items"  to={item.to}>{item.title}</Link>
                        </li>
                    )
                })}

            </ul>
            <hr/>
            <ul className="socials">
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
            </ul>

        </footer>
    )
}

export default Footer;