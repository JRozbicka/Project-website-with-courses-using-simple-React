import React from 'react'
import Button from '../Button'
import classes from './styles.module.css'
import PropTypes from 'prop-types'
import Typography from '../Typography'
import InfoIcon from './InfoIcon'
import ErrorIcon from './ErrorIcon'
export const  FullPageMessage = (props) =>{
    const {
        className,
        buttonLabel='GO BACK',
        message,
        IconVariant='info',
        ...otherProps
    } =props
    return (
        <div>
            className= {`${classes.root}${className ? `${className}` : '' }`}
        {otherProps}
        <div className={classes.wrapper}>
          {
            IconVariant === 'info' ?
            <InfoIcon/>
            :
            IconVariant === 'error' ?
            <ErrorIcon/>
            :
            null
          }

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
    buttonLabel:PropTypes.string,
    IconVariant:PropTypes.oneOf(['info','error'])
}
export default FullPageMessage