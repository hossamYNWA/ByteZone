import "./productCard.css";
import BuyOption from "./BuyOption";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
export default function ProductCard({
  addHandler,
    inFavs,
  favsAddHandler,
  items,
  favsRemoveHandler,
    index,
  image,
  title,
  price,
  cpu,
  ram,
  graphics,
  hard,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  const buyHandler = () => {
      alert("Payment completed succefully!")
  };
  const cartHandler = () => {
    addHandler(index);
  };
  const favHandler = () => {
    if (isLiked) {
        favsRemoveHandler(index);
        console.log("disliked")
      
    } else {
        console.log("liked")
        favsAddHandler(index);
    }
      setIsLiked(!isLiked);
  };
  return (
    <div className="product-card">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={0.6}
        flipSpeedFrontToBack={0.6}
      >
        <div className="front">
          <div className="product-image">
            <img src={image} alt="product-image" />
          </div>
          <div className="details">
            <h4>{title}</h4>
            <button className="specs" onClick={flipCard}>
              specifications
            </button>
            <p>{price}$</p>
            {loggedIn&&!inFavs && (
              <div className="buy-options">
                <BuyOption clickHandler={buyHandler} content="Buy Now" />
                <BuyOption clickHandler={cartHandler} content="Add To Cart" />
                <BuyOption
                  clickHandler={favHandler}
                  content={isLiked ? <FaHeart /> : <CiHeart />}
                />
              </div>
            )}
          </div>
        </div>
        <div className="back">
          <h4>{title}</h4>
          <p>
            <span>CPU:</span>
            {cpu}
          </p>
          <p>
            <span>RAM:</span>
            {ram}
          </p>
          <p>
            <span>Graphics:</span>
            {graphics}
          </p>
          <p>
            <span>Hard Drive:</span>
            {hard}
          </p>
          <button className="specs" onClick={flipCard}>
            <TiArrowBack />
          </button>
        </div>
      </ReactCardFlip>
    </div>
  );
}
