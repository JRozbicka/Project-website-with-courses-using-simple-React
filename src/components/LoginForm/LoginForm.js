import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Logo'
import classes from './styles.module.css'
import Typography from '../Typography'
import TextField from '../TextField/TextField'
import Button from '../Button'

export const LoginForm = (props) => {
  const {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onClickLogin,
    onClickCreateAccount,
    onClickForgottenPassword,
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
        placeholder={'Email'} 
        value={email}
        onChange={onChangeEmail}/>
        <TextField 
        className={classes.textField}
        placeholder = {'password'}
        type={'password'}
        value={password}
        onChange={onChangePassword} />
        <Button 
        className={classes.button}
        variant={'contained'}
        color={'primary'}
        onClick={onClickLogin}>
          Login
        </Button>
        <Button 
        className={classes.button}
        variant={'contained'}
        color={'secondary'}
        onClick={onClickCreateAccount}>
          Crete Account
        </Button>
        <Button 
        className={classes.button}
        variant={'text'}
        color={'primary'}
        onClick={onClickForgottenPassword}>
          Forgotten password
        </Button>
       
    </div>
  )
}

LoginForm.propTypes = {
  className: PropTypes.string,
  email:PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onChangeEmail:PropTypes.func.isRequired,
    onChangePassword:PropTypes.func.isRequired,
    onClickLogin:PropTypes.func.isRequired,
    onClickCreateAccount:PropTypes.func.isRequired,
    onClickForgottenPassword:PropTypes.func.isRequired
}

export default LoginForm
