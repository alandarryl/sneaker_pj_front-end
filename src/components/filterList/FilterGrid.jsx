
import "./filterGrid.css";

import Card from "../card/Card";

import useFetch from "../../hooks/useFetch";

import './filterGrid.css';


function FilterGrid(){

    const {
    data: productList,
    loading,
    error,
    } = useFetch("https://sneaker-pj-back-end.vercel.app/api/sneakers/all");

    return(
        <div className="filter-grid" >
            {productList.map((product) =>(
                <Card
                    className="card"
                    key={product.id}
                    id={product.id}
                    title={product.name}
                    img={product.picture?.[0]?.pic1}
                    price={product.price}
                />
            ) )}
        </div>
    )

}

export default FilterGrid;

