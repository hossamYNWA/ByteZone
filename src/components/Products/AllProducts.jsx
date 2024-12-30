import { useState, useEffect } from "react";
import "./allProducts.css";
import ProductCard from "./ProductCard";
const productsImages = [
  "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_Primary_image?$categorypdpnav$&fmt=png-alpha",
  "https://pclub.com.sa/image/cache/catalog/DJI/OSMO%206/4-550x550.jpg",
  "https://images-cdn.ubuy.com.sa/634ebac59ca7fd76eb327ce3-canon-eos-4000d-dslr-camera-ef-s-18-55.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZDPmFsXRVqq7DIQNpSFWZoR73oaTXSA7Aw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb9iwv16mqsKl5ZaFsW_30vI5s8yOlAgsvw&s",
  "https://m.media-amazon.com/images/I/51mS5FhRwRL.jpg",
  "https://m.media-amazon.com/images/I/61m5dpLy+FL.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPN9QE3EvPSHABYGcWiPO-_hXx8uHB6yW9w&s",
  "https://www.jarir.com/cdn-cgi/image/fit=contain,width=auto,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/1/2/d/4/12d4e895ea2806526b7d59ea16f60528fe80f0d5_581187.jpg",
  "https://m.media-amazon.com/images/I/916pOy58tgL.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-l4Me51MJKEjE8fKyGMzRhNO-k4cih0XSQ&s",
  "https://www.tavolashop.com/media/catalog/product/6/0/600x600_1.jpg?store=sa-en&image-type=image",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2UuglLRdb5v4y6hlKG0HmrpqtiC9YOGq7w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMiVe4nxFWT6lctTohEk9KnEhne8QN3wBBtg&s",
  "https://m.media-amazon.com/images/I/61A+x8c9VeL.jpg",
  "https://m.media-amazon.com/images/I/71n4pkYFCbL.jpg",
  "https://m.media-amazon.com/images/I/41PIX1YruEL._AC_UF1000,1000_QL80_.jpg",
  "https://media.extra.com/i/aurora/100347329_100_01?fmt=auto&w=720",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxUJxwA5hOR9siuDVfCyt_5QGAmH5p_X56w&s",
  "https://www.fawknerflowers.com.au/wp-content/uploads/2023/09/PhotoRoom_20230905_131855.jpeg",
  "https://images.ctfassets.net/a3peezndovsu/variant-31961410175065/b66107cbf9c189f011602977692a4171/variant-31961410175065.jpg",
  "https://m.media-amazon.com/images/I/61wsr5f7oqL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/71LmN7FsaZL.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12PhkpC4QpszMG-U4XC5GG6QPyLx64M1bWw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIb7qv7me3HQev81ulFkB9Nm6yqusXAg5zA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmPyN8IBy59H5QPBeAn9W9jsvY22xO5kDmRg29oCSCd65_TbqCSPb2ahuGyqVq0k752g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvr3muyRxnvNd9TQzO8RtWWZEfQDant-_gNQ&s",
  "https://m.media-amazon.com/images/I/7147HHebrcL.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKFvUoIdboL1XxPEwY35jZyGCmDLB9URaOw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfClZ7SHqy9uRLuRSSLa4fyws6qFBrRgxj9Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyWzjF50sAj6nAsk-a27cxny1eWJMNIrv2A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NIVBdLVnjcoRAU6JLb7WO7FkwLdCZdK98A&s",
  "https://m.media-amazon.com/images/I/71-Qz4eAl1L.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XZrEPMrgc33uiKj9v-JKj05TChxhFirx5w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpKguEwAaoH8GJ3ALfmC0UNQqxNXiqaznjQ&s",
  "https://images-na.ssl-images-amazon.com/images/I/61EH8ma4DFL._UL500_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pZQEyRhwHXXS0fbMptZG0zl8FaPkjw9ijw&s",
  "https://m.media-amazon.com/images/I/51fTyb0LIwL.jpg",
  "https://m.media-amazon.com/images/I/714VP9wIU3L.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_qIn-t_HU_wj-kMz9TklG1qKeNe6bbeWow&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5NnzKIdllU1VNVYGWUL9oo5WIAxdT-WtPQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi97zlaQy5RBFFwnxXyGMuMS9x0N3EmNGxoQ&s",
  "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g613/g613-gallery-1.png?v=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxkwCIgT8PdJNUnaEf4ES8O13Gl67iADG9A&s",
  "https://m.media-amazon.com/images/I/81to5bPRDwL.jpg",
  "https://m.media-amazon.com/images/I/51ODqiGzr7L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/71Nlslc02aL._AC_UF894,1000_QL80_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lG6b8MOXZ9dUlPE9f7sAmy332rJvzw9Wzw&s",
  "https://www.garmin.sa/wp-content/uploads/2022/08/cf-lg-1f31215e-e1d4-4ae6-91ae-0229df8e528b-7.jpg",
  "https://m.media-amazon.com/images/I/81b+GgYFbrL.jpg",
];
export default function AllProducts({
  addToCart,
  manageFavs,
  removeFav,
  logState,
}) {
  const addItemToCart = (i) => {
    console.log(i);
    addToCart(i);
  };
  const favsAdd = (i) => {
    console.log(i);
    manageFavs(i);
  };
  const removeFavItem = (i) => {
    removeFav(i);
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('https://www.freetestapi.com/api/v1/products')
      .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);


  const content = products.map((product, i) => {
    return (
      <ProductCard
        addHandler={addItemToCart}
        logged={logState}
        favsRemoveHandler={removeFavItem}
        items={products}
        favsAddHandler={favsAdd}
        key={`${product.id}-${i}`} // Combination of id and index
        product={product}
        img={productsImages[i]}
      />
    );
  });
  return (
    <div className="all-products">
      <h2>Browse Our Products</h2>
      <div className="content">{content}</div>
    </div>
  );
}
