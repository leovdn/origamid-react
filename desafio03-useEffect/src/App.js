import React, { useEffect, useState } from 'react';
import Product from './components/Product';


// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


const App = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const localProduct = window.localStorage.getItem('product');
    if (localProduct !== null) {
      setProduct(localProduct);
    }
  }, [])

  useEffect(() => {
    if(product !== null) {
      window.localStorage.setItem('product', product);
    }
  }, [product])

  function handleClick({target}) {
    setProduct(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {product}</h1>
      <button onClick={handleClick} style={{marginRight:20}}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Product product={product}/>
    </div>
  );
};

export default App;
