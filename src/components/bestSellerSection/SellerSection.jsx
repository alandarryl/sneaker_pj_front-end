import Card from "../card/Card";
import CardSkeleton from "../skeleton/CardSkeleton";
import useFetch from "../../hooks/useFetch";

import "./seller.css";

function SellerSection() {
  const {
    data: productList,
    loading,
    error,
  } = useFetch("https://sneaker-pj-back-end.vercel.app/api/sneakers/all");

  if (loading) {
    return (
      <div className="card-grid">
        {Array.from({ length: 7 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!productList || productList.length === 0) {
    return <p>No products found</p>;
  }

  const leftCard = productList[0];
  const limitedList = productList.slice(1, 7);

  return (
    <div className="seller-section">
      <h2>Best Seller</h2>
      <p>Products</p>

      <div className="card-grid">
        <Card
          className="left-card"
          id={leftCard.id}
          title={leftCard.name}
          img={leftCard.picture?.[0]?.pic1}
          price={leftCard.price}
        />

        {limitedList.map((product) => (
          <Card
            className="right-card"
            key={product.id}
            id={product.id}
            title={product.name}
            img={product.picture?.[0]?.pic1}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default SellerSection;
