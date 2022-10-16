import useFetch from "../../hooks/useFetch";
import "./Featured.scss";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8080/api/hotels/countByCity?cities=Sombor,Rome"
  );

  //,"proxy":"http://localhost:8800/api" this can be put in the end in package.json
  //throwing an error when trying to console log the following
  // could be an issue with port http://localhost:3000/proxy/hotels/countByCity?cities=Sombor,Rome

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featured__item">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/690203.webp?k=dc8f5453ce80f38f94b1575299ae214a62239fd07eb6927c1518eeb703fa56c5&o="
              alt=""
              className="featured__img"
            />
            <div className="featured__titles">
              <h1>Sombor</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featured__item ">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/690203.webp?k=dc8f5453ce80f38f94b1575299ae214a62239fd07eb6927c1518eeb703fa56c5&o="
              alt=""
              className="featured__img"
            />
            <div className="featured__titles">
              <h1>Rome</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featured__item">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/690203.webp?k=dc8f5453ce80f38f94b1575299ae214a62239fd07eb6927c1518eeb703fa56c5&o="
              alt=""
              className="featured__img"
            />
            <div className="featured__titles">
              <h1>Dublin</h1>
              <h2>123 properties</h2>
            </div>
          </div>
          <div className="featured__item">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/690203.webp?k=dc8f5453ce80f38f94b1575299ae214a62239fd07eb6927c1518eeb703fa56c5&o="
              alt=""
              className="featured__img"
            />
            <div className="featured__titles">
              <h1>Dublin</h1>
              <h2>123 properties</h2>
            </div>
          </div>
          <div className="featured__item">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/690203.webp?k=dc8f5453ce80f38f94b1575299ae214a62239fd07eb6927c1518eeb703fa56c5&o="
              alt=""
              className="featured__img"
            />
            <div className="featured__titles">
              <h1>Dublin</h1>
              <h2>123 properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
