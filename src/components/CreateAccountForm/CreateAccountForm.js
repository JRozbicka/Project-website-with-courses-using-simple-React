import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Logo'
import classes from './styles.module.css'
import TextField from '../TextField/TextField'
import Button from '../Button'
import Typography from '../Typography'

export const CreateAccountForm = (props) => {
  const {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    reapedPassword,
    onChangeReapedPassword,
    onClickCreateAccount,
    onClickBackToLogin,
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
<Logo className={classes.logo}></Logo>
<Typography
className={classes.header}
variant={'h1'}>
Create new account
</Typography>
<TextField
className={classes.textField}
placeholder={'email'}
value={email}
onChange={onChangeEmail}
/>
<TextField
className={classes.textField}
placeholder={'password'}
type={'password'}
value={password}
onChange={onChangePassword}
/>
<TextField
className={classes.textField}
placeholder={'reapedpassword'}
type={'password'}
value={reapedPassword}
onChange={onChangeReapedPassword}
/>
<Button
className={classes.button}
variant={'contained'}
color={'primary'}
onClick={onClickCreateAccount}>
  Create Account
</Button>
<Button
className={classes.button}
variant={'text'}
onClick={onClickBackToLogin}
>
  Back to login
</Button>
    </div>
  )
}

CreateAccountForm.propTypes = {
  className: PropTypes.string,
  email:PropTypes.string.isRequired,
    onChangeEmail:PropTypes.func,
    password:PropTypes.string.isRequired,
    onChangePassword:PropTypes.func,
    reapedPassword:PropTypes.func,
    onChangeReapedPassword:PropTypes.func,
    onClickCreateAccount:PropTypes.func,
    onClickBackToLogin:PropTypes.func
}

export default CreateAccountForm
