import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Logo'
import classes from './styles.module.css'
import Typography from '../Typography'
import TextField from '../TextField/TextField'
import Button from '../Button'

export const LoginForm = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Logo
      className={classes.logo}/>
      <Typography 
      className={classes.header}
      variant={'h1'}
      >
log in 👋
        </Typography>
        <TextField 
        className={classes.textField}
        placeholder={'Email'} />
        <TextField 
        className={classes.textField}
        placeholder = {'password'} />
        <Button 
        className={classes.button}
        variant={'contained'}
        color={'primary'}>
          Login
        </Button>
        <Button 
        className={classes.button}
        variant={'contained'}
        color={'secondary'}>
          Crete Account
        </Button>
        <Button 
        className={classes.button}
        variant={'text'}
        color={'primary'}>
          Forgotten password
        </Button>
       
    </div>
  )
}

LoginForm.propTypes = {
  className: PropTypes.string
}

export default LoginForm
