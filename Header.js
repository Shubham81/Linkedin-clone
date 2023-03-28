import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./css/header.css"
import Headeroption from './Headeroption';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Header() {
    const user=useSelector(selectUser)
  return (
    <div className='header'>
         <div className='header__left'>
              <div className='header__logo'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/>
               </div>

               <div className='header__search'>
                      <SearchIcon/> 
                      <input type="text" placeholder="Search"/>
               </div>
         </div>
         <div className='header__right'>
              <Headeroption Icon={HomeIcon} title="Home"/>
              <Headeroption Icon={PeopleIcon} title="Network"/>
              <Headeroption Icon={BusinessCenterIcon} title="Jobs"/>
              <Headeroption Icon={MessageIcon} title="Messaging"/>
              <Headeroption Icon={NotificationsIcon} title="Notification"/>
              <Headeroption avatar={Avatar} title={user.displayName}/>
              
         </div>
    </div>
  )
}

export default Header
