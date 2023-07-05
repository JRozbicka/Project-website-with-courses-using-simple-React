import React from "react";
import classes from './styles.module.css'
import PropTypes from 'prop-types'
import Typography from "../Typography";
console.log(classes);
export const Button = (props) =>{
    const {
        className,
        children,
        variant,
        color,
        ...otherProps
    } = props
    const colorClasses= classes[color]
    const variantClasses= classes[variant]
    console.log(variantClasses)
    return(
        <button
            className = {`${classes.root}${className ? ` ${className}` : ''}
            ${variantClasses ? ` ${variantClasses}` : ''}
            ${colorClasses ? ` ${colorClasses}` : ''}
            `}
            
            {...otherProps}
            >
                <Typography
                variant={'button'}>
                {children}
                </Typography>
         
        </button>
    )
}
Button.prototype={
    className: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['contained','text']),
    color: PropTypes.oneOf(['primary', 'secondary'])
}
export default Button