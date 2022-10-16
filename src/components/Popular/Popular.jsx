import useFetch from "../../hooks/useFetch";
import "./Popular.scss";

const Popular = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8080/api/hotels?featured=true&limit=5"
  );
  

  return (
    <div className="popular">
      {loading ? (
        "Loading"
      ) : (
        <>
          {" "}
          {data.map((item) => (
            <div className="popular__item" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="popular__img"
              />
              <span className="popular__name">{item.name}</span>
              <span className="popular__city">{item.city}</span>
              <span className="popular__price">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="popular__rating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Popular;
