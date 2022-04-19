import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { toast } from "react-toastify"
import { db } from "../firebase/firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

const Cart = () => {
  const { cart, calcTotal, clearCart, removeItem } = useContext(CartContext)

  const finalizarCompra = () => {

    const orden = {
      buyer : {
          nombre : "Jack",
          telefono : "990222600",
          email : "jack@mitiendavirtual.com"
      },
      items : cart,
      date : serverTimestamp(),
      total : calcTotal()
    }

    const ordenesCollection = collection(db, "ordenes")
    const pedido = addDoc(ordenesCollection,orden)

    pedido
      .then(resultado=>{
        toast.success("Finalizó su compra! Gracias!")
      })
      .catch(error=>{
        toast.error("Hubo un error!")
      })
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2"><h2 className="mb-4">Carrito</h2></div>
      </div>
      <div className="row">
        {cart.length === 0 ? (
          <div className="offset-lg-5 col-lg-2">
            <div className="text-center">
              <h3 className="mb-4">Aún no tienes productos</h3>
              <Link className="btn-detalle" to="/">Regresar al Home</Link>
            </div>
          </div>
        ) : (
          <>
            {cart.map(prod => (
              <div key={prod.id} className="itemprod col-lg-8 offset-lg-2 pb-3 mb-3">
                <div className="row">
                  <div className="col-lg-3 text-center"><figure className="mb-0"><img src={prod.image} alt={prod.title} width="150" /></figure></div>
                  <div className="col-lg-9">
                    <p><strong>Nombre:</strong> {prod.title}</p>
                    <p><strong>Cant:</strong> {prod.quantity}</p>
                    <p><strong>Precio unitario:</strong> ${prod.price}</p>
                    <p><strong>Subtotal :</strong> {prod.quantity * prod.price}</p>
                    <button className="btn-detalle" onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="offset-lg-4 col-lg-6 mt-4">
              <h3 className="mb-4">Total: ${calcTotal()}</h3>
              <div className="d-flex">
                <button className="btn-detalle me-3" onClick={clearCart}>Vaciar cart</button>
                <button className="btn-detalle" onClick={finalizarCompra}>Finalizar la compra</button>
              </div>
            </div>
          </>
        )
        }
      </div>
    </>
  )
}

export default Cart