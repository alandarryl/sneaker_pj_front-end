


import "./searchList.css";

function SearchList(){

    return(
        <div className="list-container" >
        <h2 className="list-title">All our products</h2>
            <div className="list-grid">
                {results.map((item, index) =>(
                    <div key={index} className="list-item">
                        <img src={item.picture[0].pic1} alt={item.name} className="list-image" />
                        <h2 className="list-name">{item.name}</h2>
                        <p className="list-price">${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}




export default SearchList;


