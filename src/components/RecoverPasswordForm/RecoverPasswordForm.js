import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Logo'
import Typography from '../Typography'
import TextField from '../TextField/TextField'
import Button from '../Button'
import classes from './styles.module.css'

export const RecoverPasswordForm = (props) => {
  const {
    className,
    email,
    onChangeEmail,
    onClickBackToLogin,
    onClickRecover,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Logo
      className={classes.logo}
      />
      <Typography
      className={classes.header}
      variant={'h1'}
      >
        Recovery password
        
        </Typography>
<TextField
className={classes.TextField}
placeholder={'e=mail'}
value={email}
onChange={onChangeEmail}

/>
<Button
className={classes.button}
variant={'contained'}
color={'primary'}
onClick={onClickRecover}
>
Recover
</Button>
<Button
className={classes.button}
variant={'text'}
onClick={onClickBackToLogin}
>

Back To Login
</Button>
    
    </div>
  )
}

RecoverPasswordForm.propTypes = {
  className: PropTypes.string,
  email:PropTypes.string.isRequired,
  onChangeEmail:PropTypes.func.isRequired,
  onClickBackToLogin:PropTypes.func.isRequired,
  onClickRecover:PropTypes.func.isRequired
}

export default RecoverPasswordForm
