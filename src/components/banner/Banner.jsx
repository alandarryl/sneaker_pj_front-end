
import { useEffect, useState } from "react";

import "./banner.css";


function Banner() {

        const [productList, setProduct] = useState([])
        const [product, setProductDetail] = useState(null);
        
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

            const bannerProduct = productList[7];

    return(
        <div  className="banner"
            style={{
                backgroundImage: `url(${bannerProduct ? bannerProduct.picture[0].pic1 : ''})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <h2 className="banner-title" >sneaker</h2>
            <p className="banner-subtitle" >best sneaker collection</p>
        </div>
    )

}

export default Banner;
