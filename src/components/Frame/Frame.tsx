import React from 'react'

export const Frame = (props: any) => {
    const {children, className} = props;

    return ( 
    <div className= {className}>
        {children}
    </div>
    )
}