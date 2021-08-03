import React from 'react';
import { connect } from "react-redux";
import { createOrder, removeFromCartByID } from "../../redux/cart/cartActions";

const CartList = () => {
  return (
    <div>
      <h1>CartList</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.items,
  };
}

const mapDispatchToProps =  {removeFromCartByID, createOrder}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);