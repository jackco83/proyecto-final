import { useState } from "react"

const ItemCount = (props) => {
  let [estado, setEstado] = useState(props.initial)

  const btnSumar = () => {
    if (estado < props.stock) {
      setEstado(estado + 1)
    }
  }

  const btnRestar = () => {
    if (estado > props.initial) {
      setEstado(estado - 1)
    }
  }

  const btnAgregar = () => {
    props.onAdd(estado)
  }

  return (
    <div className="md-control my-4">
      <div>
        <button className="cant" onClick={btnRestar}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <span>{estado}</span>
        <button className="cant" onClick={btnSumar}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div>
        <button className="conf" onClick={btnAgregar}>Confirmar cantidad</button>
      </div>
    </div>
  )
}

export default ItemCount