import React, { useEffect, useState } from 'react'


import Card from '../card/Card';

import './seller.css';



function SellerSection({startList, endList}){

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
        // console.log(productList);

        const leftCard = productList[0];
        const limitedList = productList.slice(1, 7);


    return (

        <div className='seller-section'>
            <h2> best seller  </h2>
            <p> Products </p>
            <div className='card-grid'>
                    {/* <Card className="left-card" key={index} 
                    id={leftCard.id} 
                    title={leftCard.name} 
                    img={leftCard.picture[0].pic1}
                    price={leftCard.price}
                    /> */}

                {limitedList.map((product, index) =>(
                    <Card className="right-card" key={index} 
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

export default SellerSection;