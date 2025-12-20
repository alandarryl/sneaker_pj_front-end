import "./cardSkeleton.css";

function CardSkeleton() {
  return (
    <div className="card-skeleton">
      <div className="skeleton-img"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text small"></div>
    </div>
  );
}

export default CardSkeleton;
