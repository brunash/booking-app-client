import "./SearchItem.scss";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="search-item">
      <img src={item.photos[0]} alt="" className="search-item__image" />
      <div className="search-item__desc">
        <h1 className="search-item__title">{item.name}</h1>
        <span className="search-item__distance">
          {item.distance}m from center
        </span>
        <span className="search-item__taxi">Free airport taxi</span>
        <span className="search-item__subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="search-item__features">{item.description}</span>
        <span className="search-item__cancel">Free cancellation </span>
        <span className="search-item__cancel-subtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="search-item__details">
        {item.rating && 
          <div className="search-item__rating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        }
        <div className="search-item__details--text">
          <span className="search-item__price">{item.cheapestPrice}</span>
          <span className="search-item__tax">Includes taxes and fees</span>
          <Link to={`/hotels/${item.id}`}>
            <button className="search-item__check-button">
              See availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SearchItem;
