import PropTypes from "prop-types";
import "../index.css";
// Background color mapping
const backgroundColors = {
  1: "#D5CDFD",
  2: "#9B9AF3",
  3: "#D3D5D9",
  4: "#E0BBE4",
  5: "#BFD8D2",
  6: "#C4E2C4",
  7: "#D5CDFD",
  8: "#9B9AF3",
  9: "#DDE7B9",
  10: "#C7CEEA",
};

export default function Acheivements(props) {
  const bgColor = backgroundColors[props.id] || "#FFF";
  console.log("bgColor for ID", props.id, "is", bgColor);
  return (
    <div className="showcase-card" id="Acheivements">
      <div className="card-img-container" style={{ backgroundColor: bgColor }}>
        <img
          src={props.img}
          alt="oops! your browser didn't support this image"
          className="showcase-img certificate-img"
        />
      </div>
      <div className="card-content">
        <h1 className="md-heading">{props.h1}</h1>
        <p className="p-card">{props.p}</p>
        <button className="btn1 card-btn">
          <a href={props.img} target="_blank" rel="noopener noreferrer">
            view&nbsp;&nbsp;<i className="fa-solid fa-angle-right"></i>
          </a>
        </button>
      </div>
    </div>
  );
}

Acheivements.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  h1: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};
