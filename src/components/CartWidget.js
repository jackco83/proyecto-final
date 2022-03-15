import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/" className="shop"><i className="fa-solid fa-cart-shopping"></i></Link>
  )
}

export default CartWidget;