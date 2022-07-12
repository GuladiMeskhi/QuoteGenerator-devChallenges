import React from 'react'
import classes from './Authorbutton.module.css'
import {CgArrowRight} from 'react-icons/cg'

export const Authorbutton = ({quoteAuthor,quoteGenre}) => {
  return (
    <div className={classes.btnContainer}>
        <div className={classes.authorBtn}>
            <div style={{height:'60px'}}>
               <p style={{fontSize:'24px',margin:'0px',}}>{quoteAuthor}</p>
               <p style={{fontSize:'14px',color:'rgba(130, 130, 130, 1)',margin:'0px',marginTop:'8px'}}>
                {quoteGenre}  
              </p> 
            </div>
            <span>
                <CgArrowRight color='white' fontSize='34px'/>
            </span>
        </div>
    </div>
  )
}
