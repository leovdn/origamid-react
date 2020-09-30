import React, { useState, useEffect } from 'react'
import './Product.css'

const Product = ({ product }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if(product !== null) {

      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
      .then(response => response.json())
      .then((json) => setData(json));
    }
  }, [product]);

  if(data === null) {
    return null;
  }

  return (
    <div>
      <h1>{data.nome}</h1>
      <li>R$ {data.preco}</li>
    </div>
  )
}

export default Product
