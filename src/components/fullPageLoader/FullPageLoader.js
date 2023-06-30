import React from "react";
import classes from './styles.module.css'
import Spinner from "./Spinner";
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
          <Spinner  className = {classes.spinner}/>
        </div>
    )
}
export default FullPageLoader