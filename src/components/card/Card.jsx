// import { Link } from 'react-router-dom';
import './card.css';

function Card({image, name, price, stars}){

    return (
        <div className="card" >
                <img src={image} alt='sneaker image' className="card-image" />
                <h2 className='name'>{name} </h2>
                <span>{stars} </span>
                <p> {price} </p>
        </div>
    )
};


export default Card;