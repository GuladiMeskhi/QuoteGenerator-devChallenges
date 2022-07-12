import React from 'react'
import classes from './Card.module.css'


export const Card = ({quoteText}) => {

  return (
    <div className={classes.cardContainer}>
        <p className={classes.cardText}>
          {quoteText}
        </p>
    </div>
  )
}


// rgba(247, 223, 148, 1)
