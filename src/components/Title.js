import React from 'react';
import '../glow.css'
// import Background 


function Title() {
    return (
        <div className="title">
            <div className="title p-5" style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                {/* <h1 className="headTitle align-center">
                    Matthew P Yang
                </h1> */}
                <h1 data-text="Matthew P Yang" className="flux align-center"><span>Matthew P Yang</span></h1>
            </div>
            
        </div>
    )
};

export default Title;