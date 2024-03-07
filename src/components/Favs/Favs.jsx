import "./favs.css";
import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";

const lapsImages = [
  "https://m.media-amazon.com/images/I/710EGJBdIML.jpg",
  "https://m.media-amazon.com/images/I/71PUZ9o9U6L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61RHsomZZTS._AC_UF1000,1000_QL80_.jpg",
  "https://www.lenovo.com/medias/lenovo-laptops-x1-carbon-6th-gen-hero.png?context=bWFzdGVyfHJvb3R8Mjk0NzU4fGltYWdlL3BuZ3xoYTIvaDZjLzE0NDQ3MTYzNzM2MDk0LnBuZ3xiMThiNWJlY2NjODExN2U0M2E4ZDE2NGNmMTM2NTExMWZkNzYwMzE4YTBmNDE5YzFiNThhODc2ZDEzYTMwZWQ5",
  "https://m.media-amazon.com/images/I/71nz3cIcFOL.jpg",
  "https://m.media-amazon.com/images/I/61CfGWWIwpL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61PouaE9IaL._AC_UF1000,1000_QL80_.jpg",
  "https://www.jarir.com/cdn-cgi/image/fit=contain,width=350,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/m1/delta/534212_1.jpg",
  "https://m.media-amazon.com/images/I/61QxW5rKVmL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/81nN5u1MEuL.jpg",
  "https://m.media-amazon.com/images/I/61qS1eDVy9S._AC_UF894,1000_QL80_.jpg",
  "https://sa.newtechstore.com/cdn/shop/products/lg-gram-17z90q-17-laptop-intelr-core-i7-16gb-ram-1-tb-ssd-black-laptops-lg-594870_600x.webp?v=1658226841",
  "https://m.media-amazon.com/images/I/71zMJ-j6NnS._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/71L86H65iDL.jpg",
  "https://m.media-amazon.com/images/I/71nBB1SSe6L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/81IQj+bkQML._AC_UF894,1000_QL80_.jpg",
  "https://dlcdnwebimgs.asus.com/gain/d81deb62-5ccf-4d65-919f-c964e818058c/",
  "https://m.media-amazon.com/images/I/61t4FAw-3IL._AC_UF894,1000_QL80_.jpg",
  "https://www.lenovo.com/medias/lenovo-laptops-x1-carbon-6th-gen-hero.png?context=bWFzdGVyfHJvb3R8Mjk0NzU4fGltYWdlL3BuZ3xoYTIvaDZjLzE0NDQ3MTYzNzM2MDk0LnBuZ3xiMThiNWJlY2NjODExN2U0M2E4ZDE2NGNmMTM2NTExMWZkNzYwMzE4YTBmNDE5YzFiNThhODc2ZDEzYTMwZWQ5",
  "https://m.media-amazon.com/images/I/711uQawJ4ML.jpg",
  "https://m.media-amazon.com/images/I/710EGJBdIML.jpg",
  "https://m.media-amazon.com/images/I/61N73RM-rXL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/71kZFtE9arL.jpg",
  "https://m.media-amazon.com/images/I/719CAihgtTL.jpg",
  "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8NDQxNDM4fGltYWdlL3BuZ3xoNWMvaGFiLzE0MzM5NTgwMTAwNjM4LnBuZ3wxYzdjMDI2NzRlOGY3YjdlNGMyMmI4ODdmNTE5YzRmNzcwNWE1MDI0ODMzZWVmYmYwMGU0MGFjNjc1YjU5YTE3/lenovo-laptop-yoga-c740-14-gallery-1.png",
  "https://m.media-amazon.com/images/I/71vvXGmdKWL.jpg",
  "https://m.media-amazon.com/images/I/71A1fFf1vOL.jpg",
  "https://m.media-amazon.com/images/I/71kZFtE9arL.jpg",
  "https://m.media-amazon.com/images/I/71MmRJDlubL.jpg",
  "https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_UF894,1000_QL80_.jpg",
];
export default function Favs({ favIds }) {
  console.log("qty " + qnty);

  const [favedLaps, setLaptops] = useState([]);
  useEffect(() => {
    async function dataHandler() {
      const url = "https://freetestapi.com/api/v1/laptops";
      const options = {
        method: "GET",
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const data = JSON.parse(result);
        let laps = [];
        data.forEach((lap, i) => {
          if (favIds.includes(lap.id)) {
            laps.push({
              id: lap.id,
              brand: lap.brand,
              model: lap.model,
              price: lap.price,
              image: lapsImages[i],
              year: lap.release_year,
              cpu: lap.processor,
              ram: lap.ram,
              graphics: lap.graphics_card,
              storage: lap.storage,
            });
          }
        });
        console.log(laps);
        setLaptops(laps);
      } catch (error) {
        console.error(error);
      }
    }
    dataHandler();
  }, []);
  const repetitiveNames = ["HP", "Acer", "LENOVO"];
  const content = favedLaps.map((product) => {
    return (
      <ProductCard
        inFavs={true}
        addHandler={null}
        favsRemoveHandler={null}
        favsAddHandler={null}
        key={product.id}
        index={product.id}
        image={product.image}
        title={
          repetitiveNames.includes(product.brand)
            ? `${product.model} ${product.year}`
            : `${product.brand} ${product.model} ${product.year}`
        }
        price={product.price}
        cpu={product.cpu}
        ram={product.ram}
        graphics={product.graphics}
        hard={product.storage}
      />
    );
  });
  return (
    <div className="favs-container">
      <h2>Your Favourite List</h2>
      <div className="favs-content">{content}</div>
    </div>
  );
}
