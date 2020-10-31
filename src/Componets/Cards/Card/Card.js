import React ,{useState} from 'react';

import './Card.scss';



export default function Card(props) {
    const [hover , setHover] = useState(false)

    return (
        <div className={hover? "cards-div cc cardsss " :"cards-div cc"} onMouseEnter= {() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={props.img} alt="" />
            <span>Exclusive Adult </span>
            <span>Sharkboy Costume</span>
            <span>-40%</span>
            <span>$11.99</span>
            <span>$7.19</span>


            
        </div>
    )
}
