// import { Link } from 'react-router-dom';
import './Card.css';

function Card({img, title}){

    return (
        <div className="card" >
                <img src={img} alt='movie poster' className="card-image" />
                <h2 className='title'>{title} </h2>
        </div>
    )
};


export default Card;