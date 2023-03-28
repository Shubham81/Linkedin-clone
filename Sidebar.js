import React from 'react'
import "./css/sidebar.css"
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

  const user = useSelector(selectUser);
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
            <img src="https://tse3.mm.bing.net/th?id=OIP.OS1nVji5b4iK6_KDkQs7UAHaEK&pid=Api&P=0"/>
        

              <div className='profile__details'>
                   <Avatar src={user.photoURL}/>
                  <h4>{user.displayName}</h4>
                  <p>Full Stack Developer</p>
              </div>
              
              <div className='profile__stats'>
                  <span>Who viewed your profile</span>
                  <span className='stat__number'>20</span>
              </div>

              <div className='profile__stats'>
                  <span>Connection<br/><b>Grow your Network</b></span>
                  <span className='stat__number'>150</span>
              </div>

        </div>

        <div className='sidebar__recent'>
            <p>Recent</p>
            <p className='hash'><span>#</span>Branding</p>
            <p className='hash'><span>#</span>Marketing</p>
            <p className='hash'><span>#</span>Digital Marketing</p>
            <p className='hash'><span>#</span>Web Development</p>
            <p className='hash'><span>#</span>Android Development</p>
            <p className='hash'><span>#</span>Data Science</p>
        </div>
    </div>
  )
}

export default Sidebar
