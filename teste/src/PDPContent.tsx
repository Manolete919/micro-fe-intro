import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";


 import { Product } from "./product";

import { getProductById, currency } from "home/products";
 
export default function PDPContent() {
  //const id: string  = "1";
  const { id } = useParams<string>();

  const [product, setProduct] = useState<Product | null>(null);
 

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) return null;

  return (
    
              <div key={product.id}>
            <img src={product.image} alt={product.name}/>
          </div>
      
  );
}