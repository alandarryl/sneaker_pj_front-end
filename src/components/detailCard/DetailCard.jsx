


import "./detailCard.css";


function DetailCard({productList, loading, error}) {

    const product = productList ;

    return(

        <div  className='detail-container' >
            <div className='image-side' >
                <div className='primary-image' >
                    <img className="main" src={product?.picture?.[0]?.pic1} alt="Product Image" />
                </div>
                <div className='secondary-image' >
                    <img className="first" src={product?.picture?.[0]?.pic2} alt="Product Image" />
                    <img className="second" src={product?.picture?.[0]?.pic3} alt="Product Image" />
                    <img className="third" src={product?.picture?.[0]?.pic4} alt="Product Image" />
                </div>
            </div>
            <div className='text-side' >
                <h2>{product?.name}</h2>
                <p>Price: {product?.price}</p>
                <p>Brand: {product?.brand}</p>
                <select  name="size" id="size-select" >
                    <option value="">Select Size</option>
                    {product?.size?.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                    ))}
                </select>
                <p>Category: {product?.category}</p>
                <p>Stock: {product?.stock}</p>
                <span>Rating: {product?.avis?.stars} ⭐</span>
                <a href="#" className='btn' >Add to Cart</a>
                <p>Description: {product?.content}</p>
            </div>
        </div>

    )

}




export default DetailCard;


