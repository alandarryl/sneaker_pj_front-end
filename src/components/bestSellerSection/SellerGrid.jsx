// import React, { useEffect, useState } from 'react'

// import Card from '../card/Card';

// import './seller.css';



// function SellerGrid({startList, endList}){

//     const [productList, setProduct] = useState([])
    
//     const getItems = () => {
//         fetch("https://sneaker-pj-back-end.vercel.app/api/sneakers/all", {
//         headers: {
//         accept: "application/json",
//         },
//         })
//         .then((res) => {
//             if (!res.ok) throw new Error("Network response was not ok");
//             return res.json();
//         })
//         .then((json) => {
//             console.log("Fetched products:", json);
//             setProduct(json.data);
//         })
//         .catch((err) => console.error("Fetch error:", err));
//     };
    
    
//         useEffect(()=>{
//             getItems();

//         },[])
//         console.log(productList);


//     return (
//         <div className='card-grid'>
//         {productList.map((product, index) =>(
//             <Card key={index} 
//             id={product.id} 
//             name={product.name}
//             image={product.picture[0].pic1}
//             price={product.price}
//             />
            
//         ) )}
//         </div>
//     )
// };

// export default SellerGrid;