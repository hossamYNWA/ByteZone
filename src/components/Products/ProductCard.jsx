import "./productCard.css";
import BuyOption from "./BuyOption";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { useState, memo } from "react";
import ReactCardFlip from "react-card-flip";
function ProductCard({
    addHandler,
    logged,
    inFavs,
    favsAddHandler,
    favsRemoveHandler,
    product,img
}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const title = product.brand!==product.name? product.brand + " " + product.name: product.name;
    const frontKeys = ["brand", "name", "price", 'id',"image"];
    //excluding the front data from the whole product data
    const specs = Object.keys(product)
        .filter((key) => !frontKeys.includes(key))
        .reduce((obj, k) => {
            obj[k] = product[k];
            return obj;
        }, {});
    const backContent = Object.keys(specs).map((key) => {
        const spec = key.replace("_", " ")
        return (
            <p>
                <span>{spec}</span>
                : {specs[key]}
            </p>
        );
    });

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };
    const buyHandler = () => {
        alert("Payment completed succefully!");
    };
    const cartHandler = () => {
        addHandler(index);
    };
    const favHandler = () => {
        if (isLiked) {
            favsRemoveHandler(index);
            console.log("disliked");
        } else {
            console.log("liked");
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
                        <img src={img} alt="product-image" />
                    </div>
                    <div className="details">
                        <h4>{title}</h4>
                        <button className="specs" onClick={flipCard}>
                            specifications
                        </button>
                        <p>{product.price}$</p>
                        {logged && !inFavs && (
                            <div className="buy-options">
                                <BuyOption
                                    clickHandler={buyHandler}
                                    content="Buy Now"
                                />
                                <BuyOption
                                    clickHandler={cartHandler}
                                    content="Add To Cart"
                                />
                                <BuyOption
                                    clickHandler={favHandler}
                                    content={
                                        isLiked ? <FaHeart /> : <CiHeart />
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="back">
                    <h4>{title}</h4>
                    {backContent}
                    {/* <p>
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
                        <span></span>
                        
                    </p> */}
                    <button className="specs" onClick={flipCard}>
                        <TiArrowBack />
                    </button>
                </div>
            </ReactCardFlip>
        </div>
    );
}

export default memo(ProductCard);
