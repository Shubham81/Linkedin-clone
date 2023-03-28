import React from 'react'
import "./css/widget.css"
import InfoIcon from '@material-ui/icons/Info';
function Widget() {
  return (
    <>
    <div className='widget'>
        <div className='widget_top'>
           
           <div className='widget__header'>
            <h4>Linkedin News</h4>
            <InfoIcon/>
           </div>

           <div className='widget__body'>

             <ul className='widget__option'>
                <li>
                    <h4>Slaying job search fees</h4>
                    <p>6d ago * 4,55 readers</p>
                </li>

                <li>
                    <h4>A two pizza rule for eating</h4>
                    <p>2d ago * 6,12 readers</p>
                </li>

                <li>
                    <h4>Slaying job search fees</h4>
                    <p>6d ago * 4,55 readers</p>
                </li>

                <li>
                    <h4>A two pizza rule for eating</h4>
                    <p>2d ago * 6,12 readers</p>
                </li>
             </ul>
           </div>
         </div> 

         <div className='widget_bottom'>
         <div className='widget__header'>
            <h4>Todays top courses</h4>
            <InfoIcon/>
         </div>
         <div className='widget__body'>
               <ul className='widget__option'>
                <li>
                <h4>Leading with a heavy heat</h4>
                <p>Kay coly</p>
                </li>

                <li>
                <h4>Leading with a heavy heat</h4>
                <p>Kay coly</p>
                </li>

                <li>
                <h4>Leading with a heavy heat</h4>
                <p>Kay coly</p>
                </li>

               </ul>
         </div>
        </div>
      
    </div>
    </>
  )
}

export default Widget
