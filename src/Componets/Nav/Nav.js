import React from 'react';

import './Nav.scss';

export default function Nav() {
    return (
        <div className="nav container">
         <div>
            <span className="span border-buttom">STORE</span> 
            <span className="span">NEWS</span>     
            <span className="span">FAQ</span>     
            <span className="span">HELP</span>     
        </div>   

        <div>
            <span className="span">Language (AR)</span> 
            <span className="span">SIGN</span>     
        </div>   
        </div>
    )
}
