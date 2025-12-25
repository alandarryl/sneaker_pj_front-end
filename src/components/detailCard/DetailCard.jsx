


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
                <h2 className="title" >{product?.name}</h2>
                <p className="price" >Price: <span>{product?.price}</span> $</p>
                <p className="brand" >Brand: <span>{product?.brand}</span></p>
                <select  name="size" id="size-select" >
                    <option value="">Select Size</option>
                    {product?.size?.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                    ))}
                </select>
                <p className="category" >Category: <span>{product?.category}</span></p>
                <p className="stock" >Stock: <span>{product?.stock}</span></p>
                <p className="rating" >Rating: {product?.avis?.stars} ⭐ ({product?.avis?.nb} Avis) </p>
                <a href="#" className='btn' >Add to Cart</a>
                <p className="description" > {product?.content}</p>
            </div>
        </div>

    )

}




export default DetailCard;


