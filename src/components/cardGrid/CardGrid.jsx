import React, { useEffect, useState } from 'react'

import Card from './card/Card';

import './cardgrid.css';



function CardGrid({startList, endList}){

    const [productList, setProduct] = useState([])
    
    const getMovie = () => {
        fetch("https://sneaker-pj-back-end.vercel.app/api/sneakers/all", {
        headers: {
        accept: "application/json",
        },
        })
        .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then((json) => {
            console.log("Fetched products:", json);
            setProduct(json.data);
        })
        .catch((err) => console.error("Fetch error:", err));
    };
    
    
        useEffect(()=>{
            getMovie();

        },[])
        console.log(productList);


    return (
        <div className='card-grid'>
        {productList.map((product, index) =>(
            <Card key={index} 
            id={product.id} 
            title={product.name} 
            img={product.picture[0].pic1}
            price={product.price}
            />
            
        ) )}
        </div>
    )
};

export default CardGrid;