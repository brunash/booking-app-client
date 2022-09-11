import "./SearchItem.scss";

const SearchItem = () => {
    return (
      <div className="search-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt=""
          className="search-item__image"
        />
        <div className="search-item__desc">
          <h1 className="search-item__title">Tower Street Apartments</h1>
          <span className="search-item__distance">500m from center</span>
          <span className="search-item__taxi">Free airport taxi</span>
          <span className="search-item__subtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="search-item__features">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="search-item__cancel">Free cancellation </span>
          <span className="search-item__cancel-subtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="search-item__details">details</div>
      </div>
    );
}
 export default SearchItem;