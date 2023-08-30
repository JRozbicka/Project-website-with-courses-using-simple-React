import React from "react";
import classes from './styles.module.css'
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
export const Loader = (props) =>{
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

Loader.prototype={
    className:PropTypes.string
}
export default Loader