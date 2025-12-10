


import "./detailCard.css";


function DetailCard(){


    return(

        <div className="detail-card" >
            <div className="image-section" >
                <img src="" alt="sneaker image" className="detail-image" />
            </div>
            <div className="info-section" >
                <h2 className="detail-name" >Sneaker Name</h2>
                <p className="brand" >nike</p>
                <span className="detail-stars" >⭐⭐⭐⭐⭐</span>
                <p className="detail-price" >$199.99</p>
                <p className="detail-size" >Available Sizes: 7, 8, 9, 10, 11</p>
                <p className="detail-gender" >h, f</p>
                <span className="availability" > available | out of stock </span>
                <p className="detail-description" >
                    This is a detailed description of the sneaker. It includes features, materials used, and other relevant information that would help a customer make a purchasing decision.
                </p>
            </div>
        </div>

    )

}







