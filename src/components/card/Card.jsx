// import { Link } from 'react-router-dom';
import './card.css';

function Card({img, title, price}){

    return (
        <div className="card" >
                <img src={img} alt='movie poster' className="card-image" />
                <h2 className='title'>{title} </h2>
                <p> {price} </p>
        </div>
    )
};


export default Card;