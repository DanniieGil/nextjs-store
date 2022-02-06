import Navbar from "@component/";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [productList, setProductlist] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => setProductlist(data));
  }, []);

  return (
    <div>
      <h1>Home Platzi Store</h1>
      {productList.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default Home;
