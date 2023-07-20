import React from 'react'
import Button from '../Button'
import classes from './styles.module.css'
import PropTypes from 'prop-types'
import Typography from '../Typography'
export const  FullPageMessage = (props) =>{
    const {
        className,
        buttonLabel='GO BACK',
        message,
        ...otherProps
    } =props
    return (
        <div>
            className= {`${classes.root}${className ? `${className}` : '' }`}
        {otherProps}
        <div className={classes.wrapper}>

      <Typography
      className={classes.message}
      variant={'h3'}>
        {message}
      </Typography>
        
        <Button
        variant={'contained'}
        color={'primary'}
        >{buttonLabel}
        </Button>  
        </div>
        </div>
    )
}
FullPageMessage.prototype ={
    className:PropTypes.string,
    message:PropTypes.string.isRequired,
    buttonLabel:PropTypes.string
}
export default FullPageMessage