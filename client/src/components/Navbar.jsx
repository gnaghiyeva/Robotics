import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import PsychologyIcon from '@mui/icons-material/Psychology';
import navbarStyle from "../components/navbar.module.css"
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <header>
        <nav>
            <div className={navbarStyle.nav1}>
                <ul className={navbarStyle.nav1_list1}>
                    <li className={navbarStyle.nav1_list1li}><FacebookIcon/></li>
                    <li className={navbarStyle.nav1_list1li}><TwitterIcon/></li>
                    <li className={navbarStyle.nav1_list1li}><SportsBasketballIcon/></li>
                    <li className={navbarStyle.nav1_list1li}><PsychologyIcon/></li>
                </ul>

                <ul className={navbarStyle.nav1_list2}>
                    <li className={navbarStyle.nav1_list2li}>+880 012 3654 896 </li>
                    <li className={navbarStyle.nav1_list2li}>Register/Login</li>
                </ul>
            </div>
        </nav>

        <nav>
            <div className={navbarStyle.nav2}>
            <ul>
                <img src='https://preview.colorlib.com/theme/security/img/logo.png.webp' alt='logo'/>
            </ul>
            
                <ul className={navbarStyle.nav2_list2}>
                    <li className={navbarStyle.nav2_list2li}>HOME</li>
                    <li className={navbarStyle.nav2_list2li}>ABOUT US</li>
                    <li className={navbarStyle.nav2_list2li}>SERVICE</li>
                    <li className={navbarStyle.nav2_list2li}>TEAM</li>
                    <li className={navbarStyle.nav2_list2li}>PRICE</li>
                    <li className={navbarStyle.nav2_list2li}><Link to='/add-blog' style={{color:'white', textDecoration:'none'}}>ADD BLOG</Link></li>
                    <li className={navbarStyle.nav2_list2li}>CONTACT</li>
                    <li className={navbarStyle.nav2_list2li}>PAGES</li>
                   
                </ul>
            </div>
        </nav>
        <Divider/>

    </header>
    </>
  )
}

export default Navbar