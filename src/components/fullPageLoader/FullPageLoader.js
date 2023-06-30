import React from "react";
import classes from './styles.module.css'
export const FullPageLoader = (props) =>{
    const {
        className,
        ...otherProps
    } = props
    return(
        <div
            className = {`${classes.root}${className ? `${className}` : '' }`}
            {...otherProps}
            >
            FullPageLoader
        </div>
    )
}
export default FullPageLoader