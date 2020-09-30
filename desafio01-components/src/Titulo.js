import React from 'react'

const Titulo = ({texto}) => {
  return (
    <div>
      <h1 style={{color: "#4c8b64"}}>
        {texto}
      </h1>
    </div>
  )
}

export default Titulo;