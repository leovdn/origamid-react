import React from 'react'
import './Product.css'

const Product = ({ dados }) => {
  return (
    <div>
      <ul>
        <h1>{dados.nome}</h1>
        <li>R$ {dados.preco}</li>
        <li>{dados.descricao}</li>
        <img width='300' src={dados.fotos[0].src} />
      </ul>
    </div>
  )
}

export default Product
