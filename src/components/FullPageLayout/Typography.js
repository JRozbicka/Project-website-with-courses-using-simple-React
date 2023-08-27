import React from "react";
import classes from './styles.module.css'

console.log(classes);
export const FullPageLayout = (props) =>{
    const {
      className,
      children,
      otherProps,
    } = props

   
    return(<div
        className= {`${classes.root}${className ? `${className}` : '' }`}
        {...otherProps}
        >
        children
    </div>
        
    )
}
FullPageLayout.prototype={
    className: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['h1','h3','button'])
}
export default FullPageLayout