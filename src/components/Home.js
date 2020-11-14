import React from "react";
import "../css//Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
        alt=""
        className="home__image"
      />
      <div className="home__row">
        <Product
          id={2342}
          title="A Promised Land  by Barack Obama  (Author)"
          rating={5}
          price={250}
          image="https://m.media-amazon.com/images/I/41nzI1lhIVL.jpg"
        />
        <Product
          id={23425}
          title="Essence Of Argan Precious Pink Lipstick"
          rating={4}
          price={29}
          image="https://m.media-amazon.com/images/I/71Clcide8jL._QL65_AC_UL640_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={2342}
          title="Echo Shell (fits Echo 2nd Generation only) – Charcoal Fabric"
          rating={5}
          price={20}
          image="https://m.media-amazon.com/images/I/61WdpWczUkL._AC_UY218_.jpg"
        />
        <Product
          id={2342}
          title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display"
          rating={3}
          price={369}
          image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
        />
        <Product
          id={2342}
          title="Samsung Galaxy S20 5G Factory Unlocked New Android Cell Phone EU Version"
          rating={5}
          price={250}
          image="https://m.media-amazon.com/images/I/61-u5AW3n6L._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
