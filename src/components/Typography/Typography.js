import React from "react";
import classes from './styles.module.css'
import PropTypes from 'prop-types'
console.log(classes);
export const Typography = (props) =>{
    const {
        className,
        children,
        variant,
        ...otherProps
    } = props
    const variantClasses= classes[variant]
   
    return(
        <span
            className = {`${classes.root}${className ? ` ${className}` : ''}
            ${variantClasses ? ` ${variantClasses}` : ''}`}
            {...otherProps}
            >
         {children}
        </span>
    )
}
Typography.prototype={
    className: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['h1','h3','button'])
}
export default Typography