import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

  const [cantidadSel, setCantidadSel] = useState(0)
  const { addItem } = useContext(CartContext)
  const onAdd = (cantidadSel) => {
    setCantidadSel(cantidadSel)
    addItem(item, cantidadSel)
  }

  return (
    <>
      <div className="item-detail" id={item.id}>
        <div className='row'>
          <div className='offset-md-2 col-md-2'>
            <figure className='mb-0 text-center'><img src={item.image} alt="" /></figure>
          </div>
          <div className='col-md-6'>
            <div className="titulos">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <div>
                <Rate allowHalf count={5} value={item.rating?.rate}/>
                <span>Rates : {item.rating?.count}</span>
              </div>
              <>
                {cantidadSel === 0 ? (
                  <ItemCount stock={5} initial={1} onAdd={onAdd} />
                ) : (
                  <div className="md-control my-4">
                    <h4>Cantidad: {cantidadSel}</h4>
                    <Link className='btn-detalle' to="/cart">Ir al carrito</Link>
                  </div>
                )
                }
              </>
            </div>
          </div>
          <div className='offset-md-2 col-md-8'>
            <p className="descripcion">{item.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail