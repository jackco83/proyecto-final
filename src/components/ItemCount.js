import { useState } from "react"

const ItemCount = (props) => {
  let [estado, setEstado] = useState(props.inicial)

  const btnSumar = () => {
    if (estado < props.stock) {
      setEstado(estado + 1)
    }
  }

  const btnRestar = () => {
    if (estado > props.inicial) {
      setEstado(estado - 1)
    }
  }

  const onAdd = () => {
    alert(estado)
  }

  return (
    <div className="md-control">
      <div>
        <button onClick={btnRestar}>
          <span className="material-icons">remove_circle_outline</span>
        </button>
        <span>{estado}</span>
        <button onClick={btnSumar}>
          <span className="material-icons">add_circle_outline</span>
        </button>
      </div>
      <div>
        <button onClick={onAdd}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount