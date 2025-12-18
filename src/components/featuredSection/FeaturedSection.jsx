import React, { useEffect, useState } from 'react'


import Card from '../card/Card';

import './featured.css';



function FeaturedSection({startList, endList}){

    const [productList, setProduct] = useState([])
    
    const getItems = () => {
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
            getItems();

        },[])
        console.log(productList);

        const limitedList = productList.slice(startList, endList);


    return (

        <div className='featured-section'>
            <h2> featured </h2>
            <p> Products </p>
            <div className='card-grid'>
                {limitedList.map((product, index) =>(
                    <Card key={index} 
                    id={product.id} 
                    title={product.name} 
                    img={product.picture[0].pic1}
                    price={product.price}
                    />
                    
                ) )}
            </div>
        </div>

    )
};

export default FeaturedSection;